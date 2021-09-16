import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    icon: {
        color: 'white'
    },
    menuItems:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,

    },
    menuTextBox:{
        flexGrow:1,
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    menuText: {
        color: 'white',
        fontSize:16,
        fontWeight: "bold",
        marginLeft:15,
        textTransform:"uppercase"

    },
    arrowIcon: {
        color: '#4D4D4E',
    },
    subTitle: {
      color: 'grey',
      fontSize:14,
      marginLeft:15  
    }
})


export default styles;