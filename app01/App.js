import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image          
       source={{ uri: 'data:image/jpeg;base64,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'}}
          style={{ width: 300, height: 300}}
        />

<Text style={{color: 'black', fontSize: 25, margin: 15}}>Dados Pessoais</Text>
<Text>Sabrina Barreiros Duarte</Text>
<Text>Email:barreiros890@gmail.com</Text>
<Text style={{color: 'black', fontSize: 25, margin: 15}}>Formação</Text>
<Text>ETEC PG - Técnico em informática </Text>
<Text>Cursando - Fatec RL - Sistemas para Internet</Text>
<Text style={{color: 'black', fontSize: 25, margin: 15}}>Experiência</Text>
<Text>Experiente em não ter experiência</Text>
<Text style={{color: 'black', fontSize: 25, margin: 15}}>Projetos</Text>
<Text>https://github.com/Sabrina-barreiros?tab=repositories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});