import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width * 0.9;
const SCREEN_HEIGHT = Dimensions.get('window').height * 0.87;
const SW_Img = Dimensions.get('window').width * 0.7;
const SH_Img = Dimensions.get('window').height * 0.4;

const estilo = StyleSheet.create({
    caixa:{
        width: SCREEN_WIDTH,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: "#44749d",
        margin: 10,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
    },
    I:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: "center",
        justifyContent: 'center'
    },
    img:{
        width: SW_Img,
        height: SH_Img,
        borderRadius: 30
    },
    nome:{
        paddingTop: 20,
        paddingBottom: 10,
        fontSize:"24px",
        fontWeight: "bold",
        color:'#ffffff', 
        textAlign: 'center'
    },
    descricao:{
        fontSize:"16px",
        textAlign: "justify",
        fontFamily: "Arial",
        color: "#F5F5F5",
        marginHorizontal: 40,
        marginTop: 20
    },
    btn:{
        margin: 15,
        backgroundColor:'#F5F5F5',
        borderRadius: 10,
        padding: 10
    },
    tBtn:{
        color: "#44749d",
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: "Arial"
    }
});

export default estilo;
