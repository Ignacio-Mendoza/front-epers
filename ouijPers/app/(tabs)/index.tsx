import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { Text, View} from 'react-native';
import RankingScreen from '@/screens/RankingScreen';
import { NavigationContainer } from '@react-navigation/native';



export default function OtraCosa() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/fondo-para-juego.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a OuijPers!</Text>
      <Text style={styles.description}>
        En los rincones más oscuros de la existencia, existe un portal de comunicación entre los vivos y los espíritus, un vínculo que pocos se atreven a cruzar: OuijPers. Este juego sella la unión entre médiums y entidades etéreas - ángeles, demonios y espectros vagabundos atrapados en el más allá. El médium, arriesgando su propia esencia, intentará desentrañar las palabras ocultas por estos espíritus. Solo los más valientes pueden resistir la presión de su presencia… y ganar el conocimiento secreto que guardan.
      </Text>
      <Text style={styles.subTitle}>El Desafío del Ahorcado Espiritual</Text>
      <Text style={styles.description}>
        La partida enfrenta a dos seres con papeles definidos: un espíritu, cuya energía se oculta tras palabras arcanas, y un médium, que intenta acceder a su poder. Cada sesión se desarrolla en tres rondas, y cada una representa una conexión con un espíritu distinto, con una palabra que guarda sus secretos.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>1. El Rol del Espíritu</Text>{'\n'}
        En silencio, el espíritu elige una palabra que el médium debe adivinar, un conocimiento sagrado o un enigma oscuro. Si el médium se equivoca al intentar descubrirlo, el espíritu toma forma lentamente, invocando su figura espectral como advertencia. Primero, aparece la cabeza, luego el torso y las extremidades, cada error acercando al médium a la presencia total de la entidad. Un fracaso absoluto puede significar la liberación del espíritu al plano de los vivos.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>2. El Rol del Médium</Text>{'\n'}
        El médium debe ser astuto y audaz, eligiendo letras en la OuijPers para desvelar la palabra oculta. Cada letra acertada abre una ventana al misterio, mientras que cada fallo da más poder al espíritu. Si adivina correctamente la palabra antes de completar la figura del espíritu, el conocimiento arcano pasa al médium y la entidad regresa al plano astral. Sin embargo, si la figura se completa, el espíritu podría liberarse, tomando parte de la esencia del médium antes de romper el vínculo.
      </Text>
      <ThemedView>
          <Text style={styles.subTitle}>Ranking de Médiums</Text>
          <View style={styles.rankingContainer}>
            {/* Aquí se muestra el componente RankingScreen */}
            <RankingScreen />
          </View>
        </ThemedView>
    </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    flex: 1,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  rule: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 20,
    fontFamily: 'Courier New',
  },
  bold: {
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
  tips: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Courier New', // Asegúrate de tener esta fuente configurada correctamente
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Courier New', // La misma fuente gótica para todo el texto
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  rankingContainer: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 16,
  },
}
);