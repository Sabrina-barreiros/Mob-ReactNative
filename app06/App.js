import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

export default class App extends React.Component {

  state = {
    res: '',
    escolha: 0
  }

descobrir = () => {
  let num = this.retornaNumero()
  this.setState({
    res: ` ${num}.`
  })
}

retornaNumero = () => {
  return Math.floor(Math.random() * 10)
}



render () {
  return (
    <View style={styles.container}>
      <Text style={{color: '#e66a1e', fontSize: 35, margin: 15}}> Jogo do Nº Aleatório</Text>
      <StatusBar style="auto" />

      <Image
          source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgSFRUYGRgaHBoZGRgYGhoYGBgaGBkZGhgcGBocIS4mHB4rHxkaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCs0NDQ0MTQ0NDQxNDQ0NjQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQ0NDQ2NDQ0NDQ0NDE0NDQ0NP/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABCEAACAQICBwUFBQUHBQEAAAABAgADEQQhBQYSMUFRYQcTInGRMoGhscFCUmJy0RQjgrLwJDNjc5Ki4TRDU7PCFf/EABkBAQEBAQEBAAAAAAAAAAAAAAACAQMEBf/EACERAQEAAgIDAAIDAAAAAAAAAAABAhEhMQMSQWGhMlFx/9oADAMBAAIRAxEAPwDjMREBERAREQEREBERAREQEREBETewWiq9UgUqNR7/AHVYj1taBoxLtozsyx9WxZFpD8bZ+gvLFh+yRFF6+LA/KoX4sTN0OTxO14fst0ewsMQ7HmHT5ASK012QOoLYatt2+w4sT5MMvhGhymJt6QwFWg5p1UZGG9WFvTmOompMCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiWnVjUfFY3xIoSne3ePkp57I3t7susCrTLRos52UVmY7lUEk+4TuOh+yrB0QHxDNXYZm/gp/6RmR5kzymt2CoB1weGXZW4DIgVWINiRbMjrN0OeaJ7OMfXse6FNTxqHZNvyi5+Euei+x6mtmxGIZuaoAo9Tc/KY6fatW2iDh0IvwdgfW0t+gdZaekEemA1NwoDrfMBwQCrDyPpE03SIp4TQuD3JTdlyuQarX9985I4LtA0efCrFB1pso+UgV7Pa1MkU3R0Psh7q4+BEjk7NsW7eM0kHPaLH0C/WK2adIxGO7+g7YWojMVIRgbgNbK85fV0TjLkYhKpOd2zdW63E6NqlqqmCRlDl3cguxyBIFhZeAlk2BGx+eH0XXLbVJKl728KsGvv4Cdb1BoYxKBGLJvfwBjd1WwyY+ctgQcp6AmCG1h1cw+MpmnXQH7rjJ0PNTOE64aiYjAsWsalG+VRR7PIOPsnrun6QnipTVgVYAgixBFwQeBE00/IcTsmu/ZYDtV8CLHMtQ4H/LJ3H8Jy5WnIK9BkYo6lWU2KsCGB5EHdMSxREQEREBERAREQEREBERAREQEREBERAREQJ/UrRAxOLp0X9i5Z+qJmR7zYe+fpPBhFVUQBVAAAAsABuAE4T2UIO/q1OKoAP4mz/lnUNH6fpM7UlqKzr7ShgSPMSbdVUnC2ugYEHcZRKnZ4qP3mGqbC3vsMLgdAwzt53l0w2KBE2wbypkWOWnsxquxZ61Nbm90RiRn1Izl11Y1Yo4NCtO7M1i7tmzEbvIDl1k9ED4Fn20XjagInktKrrnraMH3aBNp6hbZvkqhLXLc82UAdYFrvPhacb0zrpjiu2lTuxfIKqsSPeJr6M7SMYjA1StZPtAqFf+FlGR8wY6a6brHrVRwhRXuzvfYVd5C72J4DMesq2ke0p0fYTDA/ncqfdkZJaZ1fpaUpUsSjFWKXRiN6tZrMPMZEbusg8bqJiHQKyq7qcnDgAqBkGDDf5TdM2ktEdqFFyFr02pfjB20HVsgQPcZK63anYfSFPbFkq7N0rKAbjeA9vbT+hKbo3svxDEd/URE4hLu58rgBfPPynV8BglpIlJBZUVUUclUAD4CZNlfl7T2g6+EqmjXTZYbiM0Yc1biP6Mip+qtZNXKGNomhWXqjj20bgyH6bjPzRp/RFTC16mGqDxIbXG5lOasOhBBhKMiIgIiICIiAiIgIiICIiAiIgIiICIiBeezUkftTDeEW3n45UsHjXp1FrIxDqdq/M8b8wePnLr2WoD+0dVQfzSu6S0SaVV6dtzEe4m4+FpNurVSbjt2hNJCrSSqpydQ3lcbpYMNiuc51qBUP7Mq/dZgPW/1lup1Zz3qumtxZkcGeiZDYfF2klSrgzpjltFmlW7QdM4nD0kOHX2n2Xe1yi2Jy5Fjlc/Micy0vicVWTv8AvKuzcA7LsLEdAcp3XE4RKiNTdQyMLMrC4I5ESHfU3BldjurKd4V3UegaWxxrQ+tGNosNiu7ZgbDsXVumyxuPdadmr6LTG4dP2mkVLKrlb2emzKCQGHEXt1tMujNU8JQYPToIHG5yNpx5M1yJOLTtMnBapOI1DUotNMQ6qm1a6ozWbgWFrgTHo7sywqNtOz1OOy1lQ+aqLnyvaXosomNsQBymhQwwUBVUAAAAAWAA3ADgJm2BxM03xc1nxczZpJl1ExvigJWdNaep4dDUqsFUepPAAcTOaY7tUct+6ojZ5ux2iPJch6mNmnbf2ucd7csKveYbEAZsr02PPYKsv87Sx6oa3LjARbYdbbSE3yO5lPEfKQ/bOL4bDtyqMPVT+kSlnDj0REJIiICIiAiIgIiICIiAiIgIiICIiB0bso/7/wDB/wDUsusGgFr2YMUcC1wL3HUSs9lP/f8A4PrOh2nPK8umPTQ0Jo9aFNaa523niScyT75K7UxAT3Iq4gdZ9aVwYS6l2e9lBtkLXJPDeJNar6yU8SgdDuyZT7SnkZzLtSpnvqTcCjAeYa5/mEj+z/SLUcUq5hangblfep9cv4pcnG0W86fonD4m82BXEr2HxOUznFZSscmXFLvircZrPjRzlM1s1sTCJc+J2uEQGxNt5J4KMs+s5ditf8a7bQcIOCqoI95a5M1nEd9fFzC+IvOeaka3tiS1GqAKijaBXJWW4By4EXHrLuHhTO1SYalSfC0w1d0Dj2vmkXxGKNMHwU7hRwuPaPnfLylSKEGxlx0vo5kxrbQIu5YE5gqxuPMcPMGfdOaveJXpgttZADM7Q4KBvErXCb2+dmKt+23G4U32vK62+NvSW3tiH9loH/Ft/sb9Juai6unDIXcDvHsWA3KBfZQepJPM9Jrdr4/sVP8Az1/9dSTC9ONxETUkREBERAREQEREBERAREQEREBERA6B2Vt464/Ch+JnRwZzHswe1Wt+RfgTOi0sSpJAIuN4nPLt0x6bc+gzyDAkLVnXnRffUNpRdqZ2xxutrMPTP3Tn+BpkPTYb9tLee0LTsrreQaauUVq96FzBJAudkE8QJsrLFhw75CZnfKYKWQmVhlKxZXFtcKzV8W/EKSgHIKbfO598r1fDMpsROjawaAdK5rKpdGbasoLFSbbQsM7ZXv1M8YjV79oK90jILWd3Uqt8rkK1ix6AW6zp8RZyj+zHBMcQ9W3hRNkn8TkWHopnWhukXoPRFPDUxTQdWY+07HezdZ901penh0NSo1gNw4seAA4mY2cJEvPl5yrGdo1Ut+7poq/iJYkdbWtLVqjrOMUGUjZdbEqDcEHcw/ThBtY8TgkqCzorcri9vLlGG0eiG6oAefG3K82UmRY217piU3tf/wCip/5y/wAlSXNDKR2wt/ZKQ/xh/I8RmXTjsRE1BERAREQEREBERAREQEREBERAREQLh2dNatUH4D8DIfCaXqUcQawJJ2jti+TC+YP0m5qJX2cUo4MrL9Z50/oru8Q62yY7S+TZzL2qdOu4HEh0WopuGAI94mwDK5qTUJwyKfs3X3Am0sQM410j1Ptp42p6Uw1lQTMqzGk2EEvFNYmpz53czmeCZbGJjYTj+vWMevijSB8NO4UcLgXY+dxb0nYXnLdYtCOmKarbwM20rm2zna6sb7739xiMqhMhBsZc+zKgxxTONy0yCerMth8D6T7pnV7bdVoeNjbwqCLcySfs/iNhL7qpoBcLS2d7t4nbmeQ/COE2skTqz2DNbFYpKal3YKoFySbADqZSsd2jUFYqiPUA+1kqnyvn8Jjdugo0ovbA39noD/EJ9EP6ye1f05TxKbaHoynep5GVrthqfu8MnNnPoFH1iGXTlURE1BERAREQEREBERAREQEREBERARF4gbOBxJp1FqLvUg/rOoVqFPG0kqKbNbJhvHMGcmk/qtpepRqBVzVvaX6jrJyn1WPenUtB4IUaa0wb248ycyZJyP0bjkqJtIf+Oh99pvqZzdEPp3TlPDBWcnxGwAFybb7dJvaK0ilZBUQ3B9xB5EHcZRO0a/fUfyOR+aw+O6aepuku6xCoCNip4TmMmGata9yb5eRlevCfbl1pWmyjTTQ/18vpMynL+ucYtrMWngvIjTem0wybbnM5Ko9pjfcJz6tr5iWJKqii1wD4jaxNzmMshwG+Wnbq955emCM/6vb9JUdTNaDigyOArpYm3ssDbMX3bjl5S4J+nzgeEw6jcAPIAcTnlPTmwn1f69TPFTd/XK8Ncm1+0y9ascOm1sIbMBezPvN+g/WUuXPGYIjFvtDMOSL5EhjcFeVyd469JoaY0M3eXprtbZFlAOZO+0rSU12U372ry2Vvyvc2+s2e2Gp48MnJHPqVH0ln1O0EuGpAfbazOd/ituHQSgdpuOFTGlQbimqp782b5zIXpT4iISREQEREBERAREQEREBERAREQERED7JnC0tgrz3mRmDW7qOssD0+k5eS/Hfw473Ulh670XFWkcmzI4HmDyMueiNMJWW4NmHtKd4/4lAwWL2fCRdeI5eU3DQIIq0WNxmCu8dCOInL207ZY75ie150catIVFF2pna6lT7XyB90oGHqOrK12yZTv5EW+M6HojTq1f3dSyvu6P5dekxVNVqZqK4JChg2xwuMwByF51xrhlit2HbwibDNlNWibCbBzEqMrjmtuNeti3AY+C6IL8BvsOpv8JXagYeEk25Z29JddO6BdMSawUmmW2gQCbbVyQ3LM+hE+Y7QDV2BpL4mttXBCL12tx3bhnL+Is5eezHDscS7j2Vp2J6uy2H+1vSdZWQerWhkwtIIubHN24s30HACTW3MVIyXnhzNXFY9EG07qg5sQJA4rW+iLimHqH8Asv8AqNpPtFetSuM0fTc3dbkbjcg+omJKNGkNoBVt9onh5mVp9MYysdmmipfcAC7/AKCa9bDInjxNQ1qnBC11U9bZX6CTfJPjpj4be0ppzW1KaMKPiexs32R16zk1aozMXYksSSSd5JzJlh0oGqBtnLp5cBK1aXjdxy8uOrqPkREpyIiICIiAiIgIiICIiAiIgIiICIiBmwz2cHkRLYQHUON3HoZTZOaJx5XrlYg7mE5eTHfLv4ctcM9amQdpd/znvDYoqfCSp4ib4RHF0Of3DvHO3OaWIwvAixHuM4/69P5jcfFo48aeLKzrkb85N6J09s2R3214MfbH5ufnKayMu43HXf6zx+0W3gj+uc2S/E5WXt12hilYXUgjmDN2m9xOP0NIumaVCPI/TdNttP4k5d83u2R8hLl05+sdTrFRmxAHMyIxWsWGp3HeKx+6njPot5zevinfN3Z/zEt8DM2H0jVTJGC+Sr+ke9bMIuL62u2VHDuer+EeguTMLNpCvvLIp4U02Bb87Z/GVs6exP8A5XHkSPlMbY2q/tOzZ8TfL3zLcquY4xYhq+inbrVaYPN6m2/ou0Zk77CU8gXqEcFGwnrmxHpKuA182AzO9hf03zbweDqv7CE8yfCoA4kmRVzj4lcTph3BSmoRT9lBYnzbefeZoHDH7RzPDl5yTw2GCDNttvwiyD6t78prV3W5VrnmQPhMtdZjtq1MOVRdrZBNyLEE2623SJ0hooONtcmte3AySqqgHgDdb2+kzUadsjwUfGXjlY5Z4TLiqK6EEgixG+eJPawYUZVF8m+hkDPRjdzbw54+t0RETUEREBERAREQEREBERAREQEREBPSOQbieYgSeFxV+YI5SWpaUa1nAcdd/rK5hyQdocM5MYVkbMjzANj6/wDE45yR6fHbYkg9J9zFTe2YuJ8bAbQ8LI3Kxt85kp6E7wXw9VWb7j+B+tiMm+G6aWK0fWpf3lN04XI8PXxDL4zlNf27WWdx8fQ5P2fSx+U+f/hPyb4zzSqsclbhwN7TZtVzzbdN3Z9ZJL8faegmPF/T9RNhdXn/AB+gt8pis+d2O4Wz8rz0EfMbR4Wz9Znsv1/DbTVz7zW/NUQfAG82U0RhkHjqKx+6odz/ALrCaZp2NmcDMW2mC5cd5mXD4miovt3NyQEVnJytkQNn1ImbqpjJ3dN9O4T+7pXyvtOcst9lWw9SZnO298/Ct8slQADjwEjVxBZRs0rfjqNc2FyP3a7s7Z7RmZ8E1UXqVCyjPZJCID0Qb/fcybb94XjJ8m3x67sCtEZbi/Ddbw/e856QBF2TnzJGZMlNG6OrMLUlZhuuB4B5schN46Mo0bNiWDv7Qpocv4iN/uk7dP3UHhNHFwapXZppmeG0eAE03HiPXM/STWltJs4CWCr9imuQ9/QSGxFO1gDdjmZuOW2ZY6m72idLKO5c+VvO8qMtesbhU7rjvbz4CVSevx9Pm+f+REROjgREQEREBERAREQEREBERAREQEREDe0fS2tpeOzce7OeqAIbI2iJzy7r0ePqJXDMWF13jIjiN0mcFrDXp2BbbW+5s8uQM+xPNnI9UutNptJ4Kr/f4VQcyXQAH1W15iOjdGv7NWtT42JLAetvnETOZO27l+Pp1bw5vs4vIfe2xv3X2WMxroOguRrUXv8AeaqbeXh/WImTPJdwxnTLQ0FhxurYcdT3l/5M5J0tH4cIEOKpEX3pTZmHHeSLRE3K0xjZpnA0rg16rE5HY2UB5i42j8Z4TT2HUjucKt87M5NRrjo2Q9IiPhO22dMYqqu0W7umApuTsKueYJNgBbkJDnGAts0Qah41GB2RnfK+bfLrPkThu3dr1TGY3UZqeCO0Tm7neeQ6ncompjMUlLNSHqcx7C7tx4nPfETr45uuPmysih6UxW22+/EnmZHxE984j4+VtvJERNSREQEREBERA//Z'}}
          style={{ width: 400, height: 200}}
        />

<Text style={{color: '#e66a1e', fontSize: 30, margin: 15}}> Pense um nº de 0 a 10</Text>

      <Text style={{color: 'black', fontSize: 30, margin: 15}}> O nº pensado foi: {this.state.res}</Text>

      <Pressable style={styles.botao} onPress={this.descobrir}>
        <Text style={styles.textoBotao}>Descobrir</Text>
      </Pressable>

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
