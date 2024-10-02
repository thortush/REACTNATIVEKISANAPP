import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    return (<View><Text>HomeScreen</Text></View>);
};

const AboutScreen = () => {
    return (<View><Text>AboutScreen</Text></View>);
};

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Home" 
      component={HomeScreen} 
      options={ { 
        title: 'My Dashboard', 
        drawerLabel:'Dashboard Menu',
        drawerActiveBackgroundColor: 'lightblue',
        drawerActiveTintColor:'#333',
        drawerContentStyle: {
              backgroundColor: '#c6cbef'
        }}}/>
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
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