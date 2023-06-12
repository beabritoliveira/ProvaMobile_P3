import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    caixa:{
        width: "96%",
        borderRadius: 20,
        flexDirection: "row",
        textAlign: "center",
        backgroundColor: "#d8d8c0",
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
        fontFamily: "Georgia"
    },
    descricao:{
        fontSize:"16px",
        textAlign: "justify",
        padding: 10, 
        fontFamily: "Cambria"
    },
    btn:{
        paddingBottom: 10,
        paddingTop: 10
    },    
    btn:{
        margin: 15,
        backgroundColor:'#7a8370',
        borderRadius: 10,
        padding: 10
    },
    viewLink:{
        marginTop: 10,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    link:{
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white'
    }
});

export default estilo;