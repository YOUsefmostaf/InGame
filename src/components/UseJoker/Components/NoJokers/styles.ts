import {StyleSheet} from 'react-native';
import { w } from '../../../../values/Dimensions';

export const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        padding:w*.1
    },
    noJokers:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
    },
    text:{
        color:'grey',
        fontSize:15,
        textAlign:'center'
    }
});
