import React from "react";
import { View, StyleSheet, Text } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Configurações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    texto: {
        fontSize: 18,
    }
});