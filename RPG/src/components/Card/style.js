import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    caixa:{
        width: "96%",
        borderRadius: 20,
        flexDirection: "row",
        textAlign: "center",
        backgroundColor: "#57180B",
        justifyContent: 'flex-start',
        margin: 10,
        alignItems: "center"
    },
    I:{
        width: '30%',
        height: 150,
        paddingRight: 7,
        paddingLeft: 5
    },img:{
        width: '100%',
        height: '100%',
        borderRadius: 30
    },
    D:{
        width: '70%',
        height: '100%',
        paddingRight: 4
    },
    nome:{
        paddingTop: 20,
        fontSize:"22px",
        fontWeight: "bold",
        color:"#F5F5F5",
        fontFamily: "Georgia"
    },
    descricao:{
        fontSize:"16px",
        textAlign: "justify",
        padding: 10, 
        fontFamily: "Cambria",
        color: "#F5F5F5"
    },
    btn:{
        paddingBottom: 10,
        paddingTop: 10
    }
});

export default estilo;
