import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Definimos el tipo para los jugadores
type Jugador = {
  nombre: string;
  puntaje: number;
};

const RankingScreen = () => {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);

  useEffect(() => {
    // Configurar EventSource para recibir datos en tiempo real
    const eventSource = new EventSource("http://localhost:8080/jugador/ranking");

    // Recibir mensajes del servidor
    eventSource.onmessage = (event) => {
      const nuevoJugador: Jugador = JSON.parse(event.data);

      // Actualizar el estado con el nuevo jugador o puntuación actualizada
      setJugadores((prev) => {
        const index = prev.findIndex((j) => j.nombre === nuevoJugador.nombre);

        if (index !== -1) {
          // Si el jugador ya existe, actualizamos su puntuación
          const updatedJugadores = [...prev];
          updatedJugadores[index] = nuevoJugador;
          return updatedJugadores;
        }

        // Si el jugador no existe, lo agregamos al listado
        return [...prev, nuevoJugador];
      });
    };

    // Manejo de errores
    eventSource.onerror = () => {
      console.error("Error al recibir datos del servidor");
      eventSource.close();
    };

    // Limpiar EventSource al desmontar el componente
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking en Tiempo Real</Text>
      <FlatList
        data={jugadores}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View style={styles.jugadorContainer}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.puntuacion}>Puntuación: {item.puntaje}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  jugadorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  puntuacion: {
    fontSize: 16,
    color: "#555",
  },
});

export default RankingScreen;
