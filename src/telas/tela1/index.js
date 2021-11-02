import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet, Text,Image,  TextInput, TouchableOpacity, NativeAppEventEmitter , KeyboardAvoidingView} from 'react-native';



import {useNavigation} from '@react-navigation/native';

export default function App() {

  


  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
 


  const cadastro = () => {
    if(cadastro != null){
      alert("preencha os campos");
    }
    
  }

  const navegacao = useNavigation();

    function navegarParaTela2(){
        navegacao.navigate('tela2');
    }
    function navegarParaTela3(){
      navegacao.navigate('tela3');
  }


  return (
    
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      <StatusBar hidden />
      <View>
        <Image style={{width: 100, height: 100, borderRadius:  50}}  source={{uri: 'https://th.bing.com/th/id/OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7'}} />
        
      
      </View>
      
      <StatusBar hidden/>
      
      
      <Text style={{paddingRight: 180, fontSize: 20}}>login</Text>
      <TextInput  style={styles.textInput} onChangeText={text=>setNome(text)} />

    

      <Text style={{paddingRight: 180, fontSize: 20}}>senha</Text>
      <TextInput  style={styles.textInput} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity onPress={()=>navegarParaTela2()}>
        <Text style={styles.botaoLogin}>Login</Text>
        
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navegarParaTela3()}>
        <Text style={styles.botaoCadastrar}>Cadastre-se</Text>
        
      </TouchableOpacity>

      

    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffefd5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },

  textInput: {
    width: '75%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 0,
    paddingLeft: 10,
    marginBottom: 5,
    
  },
  botaoLogin:{
    borderRadius: 2,
    margin: 10,
    backgroundColor: '#4169e1',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: 'center',
    fontSize: 30,
    
    
    fontWeight: '500',
    color: 'white',
    borderRadius: 7,
    
  },
  botaoCadastrar: {
    textDecorationColor: 'white',
    borderRadius: 2,
    margin: 10,
    backgroundColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    width: 235,
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
    borderRadius: 7,
  }
  


});

