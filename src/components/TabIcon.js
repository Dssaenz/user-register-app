import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../themes/index';

export default function TabIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
