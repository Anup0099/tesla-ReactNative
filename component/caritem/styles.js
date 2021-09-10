import{StyleSheet} from "react-native";



const styles = StyleSheet.create({
    carContainer:{
        width: "100%",
        height: "100%",
        backgroundColor:"orange",

    },
    header: {
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom:10

    },
    headerTitle:{
        color: 'white',
        fontSize:16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',


    },
    icon:{
        color: 'white',

        
    },
    backgroundImage:{
        width:'100%',
        height:'100%',
        resizeMode:"cover",
        position:'absolute',
    },
    batterySection:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",

    },
    battery: {
        width:70,
        height: 26,
        marginRight:12,
    },
    batteryText: {
            color: 'white',
            fontSize:35,


    },
    status:{
      alignItems:'center',
     

    },
    statusbar:{
        fontSize:20,
        color: 'white',
        fontWeight:'bold',
        

    }


})

export default styles;