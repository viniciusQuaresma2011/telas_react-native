import React from 'react';
import {View, TextInput , Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {useNavigation} from '@react-navigation/native';



export default function tela3(){

    const navegacao = useNavigation();

    function navegarParaTela4(){
        navegacao.navigate('tela4');
    }

    function navegarParaTela1(){
      navegacao.navigate('tela1');
  }
    return(
        <View style={styles.container}>
            
       
            
            <KeyboardAvoidingView style={styles.container}>
              <Text style={styles.textoCabecalho}>Usuario </Text>
                <View style={styles.container}>
                  <Text style={{paddingRight: 150, fontSize: 20}}>Nome</Text>
                  <TextInput  style={styles.textInput} onChangeText={text=>setNome(text)} />

                  <Text style={{paddingRight: 150, fontSize: 20}}>Cpf</Text>
                  <TextInput  style={styles.textInput} onChangeText={text=>setCpf(text)} />

                  <Text style={{paddingRight: 150, fontSize: 20}}>Email</Text>
                  <TextInput  style={styles.textInput} onChangeText={text=>setEmail(text)} />

                  <Text style={{paddingRight: 150, fontSize: 20}}>Senha</Text>
                  <TextInput  style={styles.textInput} onChangeText={text=>setSenha(text)} />
                </View>

                <View style={styles.containerView2} >
                   

                    <TouchableOpacity style={styles.botaoAcessar} onPress={()=>navegarParaTela1()}>
                        <Text style={styles.campoAcessarAcao}>Salvar</Text>
                    </TouchableOpacity>

                    
                </View>
            </KeyboardAvoidingView>
        </View>
    

    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5dc',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    containerView1: {
      flex: 1,
      justifyContent: 'center',
      
    },
    containerView2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%'
    },
   
    botaoAcessar: {
      backgroundColor: '#35AAFF',
      height: 45,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      padding: 7
    },
    campoAcessarAcao: {
      color: '#FFF',
      fontSize: 18,
    },
    botaocontaCriar: {
      marginTop: 10,
    },
    contaCriarAcao: {
      color: '#FFF'
    },
    textInput: {
      width: '300%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 0,
      paddingLeft: 200,
      marginBottom: 5,
      
    },
    textoCabecalho: {
      backgroundColor: 'blue',
      color: 'white',
      padding: 15,
      marginBottom: 5,
      borderBottomWidth: 1,
      fontSize: 30,
      borderRadius: 7,
      marginTop: 10,
      
    }
})
