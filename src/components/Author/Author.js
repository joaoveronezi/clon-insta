import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Gravatar from 'react-native-gravatar';

const Author = (props) => {
  return (
    <View style={styles.container}>
      <Gravatar
        options={{email: props.email, secure: true}}
        style={styles.avatar}
      />
      <Text style={styles.nickname}> {props.nickname} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default Author;
//test
