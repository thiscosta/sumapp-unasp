import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite dois numeros abaixo para somá-los!</Text>
      <View>
        <View style={styles.inputsContainer}>
          <TextInput keyboardType="numeric" style={styles.input} value={firstNumber.toString()} onChangeText={text => setFirstNumber(Number(text))} />
          <TextInput keyboardType="numeric" style={styles.input} value={secondNumber.toString()} onChangeText={text => setSecondNumber(Number(text))} />
        </View>
        <Button title="Somar" onPress={() => setValue(firstNumber + secondNumber)} />
        <Text style={styles.result}>Resultado: {value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    fontSize: 20,
    marginBottom: 25
  },
  inputsContainer: {
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  result: {
    flex: 1, 
    textAlign: 'center',
    margin: 20,
  }
});
