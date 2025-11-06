import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',      
        justifyContent: 'center'
    },
    boxTop: {
        width: '100%',
        height: Dimensions.get('window').height/3,
       // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid: {
        width: '100%',
        height: Dimensions.get('window').height/4,
        paddingHorizontal: 17
    },
    boxBottom: {
        width: '100%',
        height: Dimensions.get('window').height/3,
        alignItems: 'center',

    },
    text:{
        fontWeight: 'bold',
        marginTop:-30,
        fontSize: 18
    },
    TitleInput: {
        marginLeft: 5,
        color: themas.colors.gray,
        marginTop:20
    },
    BoxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.lightgray,
        borderColor:themas.colors.lightgray
    },
    input:{
        height: '100%',
        width:'90%',
        borderRadius: 40,
        paddingLeft: 5,
    },
    button: {
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        shadowColor: '#00E6C7',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textbutton: {
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold'
    },
    textbottom: {
        fontSize: 16,
        color: themas.colors.gray
    },
    textbottomcreate: {
        fontSize: 16,
        color: themas.colors.primary
    }
})