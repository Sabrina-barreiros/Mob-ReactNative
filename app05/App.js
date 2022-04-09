import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

export default class App extends React.Component {

  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    classificacao: ''
  }

  calcular = () => {
    let imc = this.retornaImc()
    this.setState({
      imc: imc.toFixed(2),
      classificacao: this.retornaClassificacao(imc)
    })
  }

  retornaClassificacao = (imc) => {
    let res = ''

    if (imc < 0) {
      return 'O IMC não é válido'
    }

    if (imc < 18.5) {
      res = 'Abaixo do peso'
    } else if ( imc >= 18.5 && imc <= 24.9 ) {
      res = 'Peso normal'
    } else if ( imc >= 25.0 && imc <= 29.9 ) {
      res = 'Pré-obesidade'
    } else if (  imc >= 30.0 && imc <= 34.9 ) {
      res = 'Obesidade Grau 1'
    } else if ( imc >= 35.0 && imc <= 39.9 ) {
      res = 'Obesidade Grau 2'
    } else {
      res = 'Obesidade Grau 3'
    }

    return res
  }

  retornaImc = () => {
    let altura = parseFloat(this.state.altura) / 100
    return parseFloat(this.state.peso) / (altura**2)
  }


  render()
  {
  return (
    <View style={styles.container}>
      <Text style={{color: '#e66a1e', fontSize: 30, margin: 15}}> Cálculo do IMC</Text>
      <StatusBar style="auto" />

      <Image
          source={{ uri: 'https://blogdescalada.com/wp-content/uploads/2017/08/peso-escalada-biotipo-2.jpg'}}
          style={{ width: 400, height: 200}}
        />

<TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={peso => this.setState({peso})}
        
      />

<TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={altura => this.setState({altura})}
      />

<Pressable style={styles.botao} onPress={this.calcular}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>

      <Text style={{color: 'black', fontSize: 30, margin: 15}}> Classificação  {this.state.imc}</Text>
      <Text>{this.state.msg}</Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 0.80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: '#e66a1e'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
  },

  input:{
    height: 45,
    width: 370,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  }

});
