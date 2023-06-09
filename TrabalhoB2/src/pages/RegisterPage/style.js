import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'center',
        height: '100%'
    },  
    nome:{
        marginTop: 15,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        borderColor: '#44749d',
        borderWidth: 1,
        color:'#4e5861',
        backgroundColor: 'white',
    },
    sobrenome:{
        marginTop: 4,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        borderColor: '#44749d',
        borderWidth: 1,
        color:'#4e5861',
        backgroundColor: 'white',
    },
    email:{
        marginTop: 4,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        borderWidth: 1,
        marginBottom: 20,
        borderColor: '#44749d',
        color:'#4e5861',
        backgroundColor: 'white',
    },
    senha:{
        marginTop: 4,
        width: '70%',
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        padding: 12,
        borderWidth: 1,
        borderColor: '#44749d',
        color:'#4e5861',
        backgroundColor: 'white',
    },
    imgLogo:{
        height: '150px',
        width: '150px'
    },
    titulo:{
        fontSize: '22px',
        fontWeight: 'bold',
        fontFamily: 'Cambria',
        marginTop: 10,
        color: '#44749d'
    },
    btn:{
        margin: 15,
        backgroundColor:'#44749d',
        borderRadius: 10,
        padding: 10
    },
    tBtn:{
        color: "white",
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Cambria'
    },
    viewLink:{
        marginTop: 5,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    link:{
        fontWeight: 'bold',
        fontSize: '16px',
        color:'#4e5861'
    }
});

export default estilo;
