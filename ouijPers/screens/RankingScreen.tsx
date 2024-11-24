import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

type Player = {
  nombre: string;
  puntuacion: number;
};

const RankingScreen = () => {
  const [ranking, setRanking] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch('http://localhost:8080/jugador/ranking');
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error('Error al obtener el ranking:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text style={styles.text}>Cargando el ranking...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking en Tiempo Real</Text>
      <FlatList
        data={ranking}
        keyExtractor={(item) => item.nombre.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nombre}</Text>
            <Text style={styles.score}>{item.puntuacion} puntos</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ff00',
  },
});

export default RankingScreen;
