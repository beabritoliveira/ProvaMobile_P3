import { Text, View, Image , TouchableOpacity} from "react-native";
import { TextInput } from "react-native";
import estilo from "./style";
import { Link } from "@react-navigation/native";

export default function ForgotPasswordPage(){
    return(
        <View style = {estilo.container}>
            <Image style={estilo.imgLogo} source={{uri: 'https://img.freepik.com/vetores-gratis/emblemas-coloridos-de-cinema_1284-34048.jpg?w=2000'}}/>
            <TextInput style = {estilo.email} placeholder="E-mail"/>
            <TouchableOpacity>
                    <View style = {estilo.btn}>
                       <Text style = {estilo.tBtn}>Enviar Email</Text>
                    </View>
                </TouchableOpacity>
            <View style ={estilo.viewLink}>
                <Link style ={estilo.link} to = {{screen: "RegisterPage"}} > Não possuo cadastro </Link>
            </View>  
        
        </View>
    );
}