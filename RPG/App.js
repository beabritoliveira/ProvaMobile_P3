import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';

const cartao = [
  {
    img: "https://i.pinimg.com/550x/96/ca/11/96ca11fc678bca3d428d04fae9cfb6ea.jpg ",
    nome: "Mochila Infinita",
    desc: "A mochila tem a capacidade de armazenar infinitos elementos possíveis, como algo sem fundo; util em todos os momentos já que pode armazenar itens de qualquer tamanho e carrega-lá sem com que haja sobrepeso ou dificuldade",
  },
  {
    img: "https://pm1.narvii.com/7084/83173ddfb4aa0987a37ffef9ecaa44966bb45d09r1-403-604v2_uhq.jpg",
    nome: "Poção Estrelar",
    desc: "Esse é um elixir que permite com que quem o consuma passe a conseguir se navegar pelas estrelas, ideal para casos do personagem estar perdido e não tiver um mapa a sua disposição. Porém o efeito é pasageiro, dura apenas um dia",
  },
  {
    img: "https://i.pinimg.com/736x/5e/97/3a/5e973a0ad5f130295c14500ab03f2626.jpg",
    nome: "Espada de gelo",
    desc: "É um item compacto; quando não está se utilizando-a ela se assemelha a um punhal normal, no entanto ao utiliza-la em combate ela se expande e sua pona é feita de gelo",
  },
]




export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Itens de troca RPG</Text>
      {cartao.map (num => <Card c={num}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFDFBB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho:{
      paddingTop: 30,
      fontSize:"26px",
      fontWeight: "bold",
      color:"#57180B",
      fontFamily: "Georgia",
      paddingBottom: 20
  }
});
