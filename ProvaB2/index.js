import { Link } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import estilo from "./style";




export default function Card(props){

    return(
        <View style={estilo.caixa}> 
            <View style={estilo.I}>
                <Image  source={{uri: props.c.img}}  style={estilo.img}/>
            </View>

            <View style={estilo.D}>
                <Text style={estilo.nome}>{props.c.nome}</Text>
                <Text style={estilo.descricao}>{props.c.desc}</Text>
                <View style ={estilo.btn}>
                    <Link style ={estilo.link} to = {{screen: "LoginPage"}} >Fazer Troca</Link>
                </View>  
            </View>

        </View>
    );
}

