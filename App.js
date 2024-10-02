import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import StackMenu from './StackMenu';
const Tab = createBottomTabNavigator();
const DashboardScreen = () => {
    return (<View><Text>DashboardScreen</Text></View>);
};

const SettingScreen = () => {
    return (<View><Text>SettingScreen</Text></View>);
};
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={ {
                    tabBarActiveTintColor: 'purple',
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true
                }}
        >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Stack Menu" component={StackMenu} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}