import { Text, View, Image } from "react-native";
import { TextInput, TouchableOpacity} from "react-native";
import estilo from "./style";
import { Link } from "@react-navigation/native";

export default function RegisterPage(){
    return(
        <View style = {estilo.container}>
            <Image style={estilo.imgLogo} source={{uri: 'https://cdn2.vectorstock.com/i/1000x1000/59/56/rpg-letter-logo-design-on-black-background-vector-42235956.jpgw'}}/>
            <Text style = {estilo.titulo}>CADASTRO</Text>
            <TextInput style = {estilo.nome} placeholder="Nome"/>
            <TextInput style = {estilo.sobrenome} placeholder="Sobrenome"/>
            <TextInput style = {estilo.email} placeholder="E-mail"/>
            <TextInput style = {estilo.senha} placeholder="Senha" secureTextEntry={true} passwordRules={true}/>
            <TextInput style = {estilo.senha} placeholder="Confirmar Senha"  passwordRules={true}/>
        
            <TouchableOpacity>
                    <View style = {estilo.btn}>
                        <Link style ={estilo.tBtn} to = {{screen: "DashboardPage"}} > Entrar </Link>
                    </View>
                </TouchableOpacity>

            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "LoginPage"}} > Já possuo cadastro </Link>
            </View>            
        </View>
    );
}