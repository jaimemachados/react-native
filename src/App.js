import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {withSubscription} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const colorGitHub = '#010409';
const ImageProfileGitHub =
  'https://avatars.githubusercontent.com/u/104790097?v=4';
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'colorGitHub'} barStyle="light-content" />
      <View>
        <Image
          accessibilityLabel="Jaime Machado de terno preto e gravata vermelha"
          style={style.avatar}
          source={{uri: ImageProfileGitHub}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'colorGitHub',
    flex: 1, //Expandir para a tela inteira
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});
