import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Card from '../../components/Cartao';



export default function MoviesPage(){
    let [filmes, setFilmes] = useState([]);//condiciona a renderização 

    function vetorizacao(){
      fetch('https://api.otaviolube.com/api/filmes?populate=*') // pega os elementos da api
      .then(resultado => resultado.json()) //pega o resultado e 'filtra' ele para utilização
      .then(objeto => setFilmes(objeto.data)) //carrega o vetor; filmes > 0
    }

    useEffect(vetorizacao); 
  
    return(
        <SafeAreaView>
        <ScrollView horizontal>
          {filmes.length > 0 ? //checa se o vetor tá preenchido
          filmes.map(cinema => 
          <Card props = {cinema} key ={cinema.id}/>)
          :<ActivityIndicator/>}          
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}
