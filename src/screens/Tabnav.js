import { StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './Home';
import Settings from './Settings';
import Dashborad from './Dashboard';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabnav() {
    return (
        <Tab.Navigator
            initialRouteName='Dashboard'
            barStyle={{ backgroundColor: '#2296f3' }}
            inactiveColor="#fff"
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Dashboard'
                component={Dashborad}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='view-dashboard' color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account-cog' color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
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
        fontSize: 22,
    },
    botao: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 42,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Tabnav;
