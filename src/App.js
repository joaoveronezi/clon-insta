import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header';
import Post from './components/Post';

const App = () => {
  const comments = [
    {
      nickname: 'Gabriela',
      comment: 'Excelente foto amigo',
    },
    {
      nickname: 'Rafael',
      comment: 'Que coisa mais linda amigo!',
    },
    {
      nickname: 'Joao',
      comment: 'Uma verdadeira obra de arte, igual sua mãe',
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
