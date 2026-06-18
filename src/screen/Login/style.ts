
import { Dimensions, StyleSheet } from "react-native";
import { themas } from "./themas";

export { themas };

export const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: themas.colors.bgScreen,
    alignItems: "center",
    justifyContent: "flex-start",

  },
  boxTop: {
    height: Dimensions.get('window').height * 0.35,
    width: "100%",
    //backgroundColor: "#F7C5D0",
    alignItems:"center",
    justifyContent:"flex-end",
    paddingBottom: 20,
  },
  boxMid: {
    width: "100%",
    paddingHorizontal: 37,
    paddingVertical: 20,
  },
  boxBottom: {
    height: Dimensions.get('window').height/3,
    width: "100%",
    //backgroundColor: "#D4B8E0",
    alignItems:"center",
    justifyContent:"center",
  },

  text:{
    fontWeight:'bold',
    marginTop:40,
    fontSize:18,
    color: themas.colors.secundary,

  },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20,


  },
  BoxInput:{
    width:'100%',
    height:45,
    borderWidth:1,
    borderRadius:40,
    marginTop:10,
    flexDirection:"row",
    alignItems:'center',
    paddingHorizontal: 15,
  },
  input:{
    flex: 1,
    color:'black',
    paddingLeft:5,
  },
  button:{
    width:250,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: themas.colors.primary,
    borderRadius:40,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
  },
    textButton:{

    fontSize:16,
    color:'#FFFF',
    fontWeight:'bold'

    
    },
        textBotton:{

fontSize:16,
color:themas.colors.gray

 },


})
