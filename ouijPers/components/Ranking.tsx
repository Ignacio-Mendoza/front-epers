import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

// Define la interfaz Jugador
interface Jugador {
  nombre: string;
  puntuacion: number;
}

const App = () => {
  // Define el estado para el ranking, que será un array de objetos Jugador
  const [ranking, setRanking] = useState<Jugador[]>([]);

  // Usa el hook useEffect para establecer la conexión SSE
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/jugador/ranking'); // Reemplaza con tu URL

    // Cuando llegue un mensaje del servidor (nuevo jugador o puntuación actualizada)
    eventSource.onmessage = (event) => {
      const jugador: Jugador = JSON.parse(event.data); // Asegúrate de que el objeto sea del tipo Jugador
      setRanking((prevRanking) => {
        // Añade el nuevo jugador al inicio del ranking
        return [jugador, ...prevRanking];
      });
    };

    // Maneja errores de la conexión SSE
    eventSource.onerror = (error) => {
      console.error('Error en la conexión SSE:', error);
      eventSource.close();
    };

    // Cierra la conexión SSE cuando el componente se desmonte
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking en Tiempo Real</Text>
      <FlatList
        data={ranking}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.text}>
              {index + 1}. {item.nombre}: {item.puntuacion}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  text: {
    fontSize: 18,
  },
});

export default App;
