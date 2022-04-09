import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  state = {
    num1: 0,
    num2: 0,
    res: ''
  }

operacao = () => {
  let n1 = parseFloat(this.state.num1)
  let n2 = parseFloat(this.state.num2)
  this.setState({
    res: n1 * n2
  })
}


  return (
    <View style={styles.container}>
      <Text style={{color: '#17d8ff', fontSize: 30, margin: 15}}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro nº"
        onChangeText={num1 => this.setState({num1})}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo nº"
        onChangeText={num2 => this.setState({num2})}
      />

      <Pressable style={styles.botao} q>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <Text style={{color: '#17d8ff', fontSize: 25, margin: 15}}>O resultado é:{this.state.res}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },

  botao:{
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#17d8ff'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
    color: 'white'
  }


});