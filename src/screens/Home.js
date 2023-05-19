import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonOpacity}
                onPress={() => navigation.navigate('Tabnav')}
            >
                <Text style={styles.buttonText}>Vá para o Dashboard</Text>
            </TouchableOpacity>
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
    buttonOpacity: {
        backgroundColor: '#2296f3',
        padding: 22,
        borderRadius: 30,
        elevation: 10,
        width: '80%',
       alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default Home;
