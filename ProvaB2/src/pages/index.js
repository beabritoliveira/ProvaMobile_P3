import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import estilo from "./style";
import { Link } from "@react-navigation/native";


export default function LoginPage(){
    return(
        <View style = {estilo.container}>
            <Image style={estilo.imgLogo} source={{uri: 'https://cdn2.vectorstock.com/i/1000x1000/59/56/rpg-letter-logo-design-on-black-background-vector-42235956.jpgw'}}/>
            <TextInput style = {estilo.email} placeholder="E-mail"/>
            <TextInput style = {estilo.senha} placeholder="Senha" secureTextEntry={true} passwordRules={true}/>
            <TouchableOpacity>
                    <View style = {estilo.btn}>
                        <Link style ={estilo.tBtn} to = {{screen: "DashboardPage"}} > Entrar </Link>
                    </View>
            </TouchableOpacity>

            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "RegisterPage"}} > Cadastrar </Link>
                <Link style ={estilo.link} to = {{screen: "ForgotPasswordPage"}}> Esqueceu a senha </Link>
            </View>
        </View>
    );
}