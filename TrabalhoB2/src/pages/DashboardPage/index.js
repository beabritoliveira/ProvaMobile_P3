import { Text , View} from "react-native";
import estilo from "./style";
export default function DashboardPage(){
    return(
        <View style = {estilo.container}>
        <Text style= {estilo.texto}> DASHBOARD  PAGE </Text>
        </View>
    );
}
