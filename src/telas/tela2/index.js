import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet, TextBase} from 'react-native';
import {useNavigation} from '@react-navigation/native';



export default function tela2(){

    const navegacao = useNavigation();

    function navegarParaTela4(){
        navegacao.navigate('tela4');
    }
    function navegarParaTela5(){
        navegacao.navigate('tela5');
    }

    const dados = [
        {key: 'Joao da silva '},
        {key1: '81 98688-5044'},
        {key: 'Irineu de Carvalho'},
        {key1: '81 98652-5694'},
        {key: 'Claurus Matheins'},
        {key1: '81 98594-7564'},
        {key: 'Kroteui del Pinhas'},
        {key1: '81 98558-1248'},
        
    ]

    




    return(
      

            
       
        
        <View style={styles.container}>
            
            <TouchableOpacity onPress={navegarParaTela4}>
                <Text style={styles.textoCabecalho}>Lista de Contatos + </Text>
                 
                 
            </TouchableOpacity>
            
            <FlatList  
                   
                     data={dados}
                     renderItem= {({item})=> <Text onPress={navegarParaTela5} style={styles.textoItem}>{item.key} + {item.key1}</Text>} 
                     
                                      
                />
            
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textoItem: {
        fontSize: 30,
        color: '#34495e',
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
 
    },
    textoCabecalho: {
        backgroundColor: 'blue',
        color: 'white',
        padding: 5,
        borderBottomWidth: 1,
        fontSize: 30,
    }
});