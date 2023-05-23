import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Dashborad() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Bem vindo ao Dashboart
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    texto: {
        fontSize: 18,
    }
});

export default Dashborad;
