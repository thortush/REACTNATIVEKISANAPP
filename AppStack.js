import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createNativeStackNavigator();

const commonStyleForALLlayout = {
  headerStyle: {
    backgroundColor: '#6a51ae'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
  headerRight: () => {
      return (<Pressable onPress={() => { alert('CLICK')}} >
        <Text style={ {color: '#fff'}}>Menu</Text>
      </Pressable>)
  },
  contentStyle: {   // to give color to the route page means home component background
    backgroundColor: '#e8e4'
  } 
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={ commonStyleForALLlayout }>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Welcome home',
            // commonStyleForALLlayout     indivually also we can give same props
           }}
        />
        <Stack.Screen 
          name='About' 
          component={AboutScreen}  
          initialParams={ {name: 'guest'} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
