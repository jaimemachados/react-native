import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const colorGitHub = '#010409';
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'colorGitHub'} barStyle='light-content'/>
        <View>
          <Text style={style.text}>Hello Word!</Text>
        </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor:'colorGitHub',
    flex:1,//Expandir para a tela inteira
  },
  text:{
    fontSize:50,
    fontWeight: 'bold',
    color:'black',
  }
});
