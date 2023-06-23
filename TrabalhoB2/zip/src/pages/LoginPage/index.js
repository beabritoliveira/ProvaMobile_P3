import { Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import estilo from "./style";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


export default function LoginPage(){

    const {signIn} = useContext(AuthContext);

    return(
        <View style = {estilo.container}>
            <Image style={estilo.imgLogo} source={{uri: 'https://img.freepik.com/vetores-gratis/emblemas-coloridos-de-cinema_1284-34048.jpg?w=2000'}}/>
            <TextInput style = {estilo.email} placeholder="E-mail"/>
            <TextInput style = {estilo.senha} placeholder="Senha" secureTextEntry={true} passwordRules={true}/>
            <TouchableOpacity onPress={() => signIn()}>
                    <View style = {estilo.btn}>
                        <Text style ={estilo.tBtn}> Entrar </Text>
                    </View>
            </TouchableOpacity>

            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "RegisterPage"}} > Cadastrar </Link>
                <Link style ={estilo.link} to = {{screen: "ForgotPasswordPage"}}> Esqueceu a senha </Link>
            </View>
        </View>
    );
}