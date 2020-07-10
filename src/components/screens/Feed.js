import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../Header';
import Post from '../Post';

class Feed extends Component {
    state = {
        posts:[{
            id: Math.random(),
            nickname: 'Rafael Camarada',
            email: 'rafaelcabuloso@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Shelby',
                comment: 'WOW YANKEE WITH NO BRIM',
            }, {
                nickname: 'Stanley Hipkis',
                comment: 'Linda senhora',
            }, {
                nickname: 'George Harrison',
                comment: 'they where the best for me!',
            }]
        }, {
            id: Math.random(),
            nickname: 'Renata Church',
            email: 'renatinha123@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}


export default