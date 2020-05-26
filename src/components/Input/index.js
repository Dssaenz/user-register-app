import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

function Input({
	placeholder,
	onChangeText,
}) {
	return(
		<TextInput 
			placeholder={placeholder}
			onChangeText={onChangeText}
		/>
	)
}

Input.propTypes = {
	placeholder: PropTypes.string,
	onChangeText: PropTypes.func,
}

export default Input;