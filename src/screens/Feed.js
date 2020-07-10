import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Rafael Camarada',
        email: 'rafaelcabuloso@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John Shelby',
            comment: 'WOW YANKEE WITH NO BRIM',
          },
          {
            nickname: 'Stanley Hipkis',
            comment: 'Linda senhora',
          },
          {
            nickname: 'George Harrison',
            comment: 'they where the best for me!',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Renata Church',
        email: 'renatinha123@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: [
          {
            nickname: 'Jeff',
            comment: 'u know, i was an horse back day',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
