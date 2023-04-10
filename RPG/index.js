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
                <View style={estilo.btn}>
                    <Button  title = "PROPOR TROCA" color="#7A2210"/>
                </View>
            </View>

        </View>
    );
}


