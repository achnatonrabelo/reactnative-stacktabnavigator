import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/screens/Home';
import Tabnav from './src/screens/Tabnav';
import Settings from './src/screens/Settings';
import Dashboard from './src/screens/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen
          name='Tabnav'
          component={Tabnav}
        />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  }
});

export default App;