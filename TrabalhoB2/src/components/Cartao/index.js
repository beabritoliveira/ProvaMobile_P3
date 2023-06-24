import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import estilo from "./style";
import { Link } from '@react-navigation/native';

const baseURL = 'https://api.otaviolube.com'

export default function Card({ props }){
    return(
        <View style = {estilo.caixa}>
            <View style ={estilo.I}>
            <Text style ={estilo.nome}>{props.attributes.titulo}</Text>
                <Image style = {estilo.img} source={{uri: baseURL + props.attributes.poster.data.attributes.url}}/>
                <Text style = {estilo.descricao}>
                              {props.attributes.sinopse.length > 200 
                               ? props.attributes.sinopse.substring(0, 200) + "..."
                               : props.attributes.sinopse }</Text>
                <TouchableOpacity>
                    <View style = {estilo.btn}>
                        <Link style = {estilo.tBtn} to={{screen: "DetaisPage", params: {props: props}}} >Saiba mais</Link>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
