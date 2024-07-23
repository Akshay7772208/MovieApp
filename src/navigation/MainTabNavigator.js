// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import SearchScreen from '../screens/SearchScreen';

// const Tab = createBottomTabNavigator();

// const MainTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Search" component={SearchScreen} />
//   </Tab.Navigator>
// );

// export default MainTabNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Choose your preferred icon set
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Search') {
          iconName = 'search-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: 'black', // Background color of the tab bar
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      
    }}
   
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

export default MainTabNavigator;

