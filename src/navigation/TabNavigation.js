import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { ListUsers, CreateUser } from '../screens';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ListUsers') {
              iconName = focused ? 'md-list-box' : 'md-list-box';
            } else if (route.name === 'CreateUser') {
              iconName = focused ? 'md-person-add' : 'md-person-add';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
				})}
				
        tabBarOptions={{
          activeTintColor: '#FA4D61',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="ListUsers" component={ListUsers} />
        <Tab.Screen name="CreateUser" component={CreateUser} />
      </Tab.Navigator>
  );
}

export default TabNavigation;