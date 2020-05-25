import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { ListUsers, CreateUser } from '../screens';

import theme from '../themes';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Users') {
              iconName = focused ? 'md-list-box' : 'md-list-box';
            } else if (route.name === 'Create user') {
              iconName = focused ? 'md-person-add' : 'md-person-add';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
				})}
				
        tabBarOptions={{
          activeTintColor: theme.color.pink,
          inactiveTintColor: theme.color.darkGrey,
        }}
      >
        <Tab.Screen name="Users" component={ListUsers} />
        <Tab.Screen name="Create user" component={CreateUser} />
      </Tab.Navigator>
  );
}

export default TabNavigation;