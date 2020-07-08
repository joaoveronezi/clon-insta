import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Post from './components/Post';

const App = () => {
  const comments = [
    {
      nickname: 'joana',
      comment: ' excelente foto amigo',
    },
    {
      nickname: 'Rafael',
      comment: ' Que coisa mais linda amigo!',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header />
      <Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
    </View>
  );
};

export default App;
