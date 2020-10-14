import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function Submit(){

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6){
      alert("Você está abaixo do peso! " + imc.toFixed(2));
      
    } else if (imc >= 18.6 && imc < 24.9){
      alert("Peso ideal! " + imc.toFixed(2));

    } else if (imc >= 24.9 && imc <34.9){
      alert("Levemente acima do peso! " +imc.toFixed(2));
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Calcule aqui seu IMC</Text>
      
      <Image source = {require('./assets/imcimg.png')} style={styles.imagem}/>
  
      <TextInput
      style={styles.input}
      value = {peso}
      onChangeText = {(peso) => setPeso(peso)}
      placeholder='Peso (kg)'
      keyboardType = 'numeric'
      />

      <TextInput
      style={styles.input}
      value = {altura}
      onChangeText = {(altura) => setAltura(altura)}
      placeholder='Altura (cm)'
      keyboardType = 'numeric'
      />
  
      <TouchableOpacity
      style={styles.button}
      onPress = {Submit}
      >
        <Text style = {styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',
    alignItems: 'center',
    justifyContent: 'center',
        
  },

  title: {
     textAlign: 'center',
     fontSize: 35,
     fontWeight: 'bold',
     color: 'black'
     
  },

  input: {
    backgroundColor:'white',
    borderRadius: 10,
    margin: 15,
    padding: 10,
        
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FF4500',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#000ff",
    fontSize: 20,
    borderRadius: 10,
  },

  imagem: {
    width: 360,
    height: 140,
    borderRadius: 10,
        
  },

});



