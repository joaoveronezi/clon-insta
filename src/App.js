import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Post from './components/Post';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Post image={require('../assets/imgs/fence.jpg')} />
    </View>
  );
};

export default App;
