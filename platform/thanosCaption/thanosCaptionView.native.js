import React  from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height:300,
        width: 150,
        marginLeft: 70,
        marginTop: 70,
    },
    text: {
        marginTop: 10,
        color: '#f5deb3',
        marginLeft: 20,
    }
})

export const ThanosCaptionView = props => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{props.data}</Text>
            <Image source={{uri:"http://www.marvel-cineverse.fr/medias/images/thor-endgameprofile.jpg?fx=r_1000_800"}} style={styles.image}></Image>
        </View>
    )
}