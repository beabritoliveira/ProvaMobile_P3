import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Cartao';
import { useEffect, useState } from 'react';


export default function App() {

  let [filmes, setFilmes] = useState([]);//condiciona a renderização 

  function vetorizacao(){
    fetch('https://api.otaviolube.com/api/filmes?populate=*') // pega os elementos da api
    .then(resultado => resultado.json()) //pega o resultado e 'filtra' ele para utilização
    .then(objeto => setFilmes(objeto.data)) //carrega o vetor; filmes > 0
  }
  
  useEffect(vetorizacao); 

  //https://jsonviewer.stack.hu/#http://https://api.otaviolube.com/api/filmes?populate=*



  return (
    <SafeAreaView>
      <ScrollView horizontal>
        {filmes.length > 0 ? //checa se o vetor tá preenchido
        filmes.map(cinema => 
        <Card key={cinema.id} props = {cinema}/>)
        :<ActivityIndicator/>}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##ffffff',
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
