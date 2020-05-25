import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { ContainerLoader } from './styles';

import theme from '../../themes';
function Loader() {
	return (
		<ContainerLoader>
			<ActivityIndicator size="large" color={theme.color.pink} />
		</ContainerLoader>
	);
}

export default Loader;
