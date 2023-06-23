import { View , Text, Image, TouchableOpacity} from "react-native";
import estilo from "./style";
import { Link } from "@react-navigation/native";


export default function MoviesDetaisPage({ route }){
    
  const { props } = route.params;
  const baseURL = 'https://api.otaviolube.com' + props.attributes.poster.data.attributes.url

  return(
       <View> 
          <Text style={estilo.nome} >{props.attributes.titulo}</Text>
          <Image style = {estilo.img} source={{uri: baseURL }}/>
          <Text style={estilo.descricao}>{props.attributes.sinopse}</Text>
          <TouchableOpacity>
               <View style = {estilo.btn}>
                  <Link style ={estilo.tBtn} to = {{screen: "LoginPage"}}>Comprar Ingresso</Link>
               </View>
           </TouchableOpacity>
       </View>
    );
}