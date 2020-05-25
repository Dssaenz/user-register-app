import React from 'react'
import PropTypes from 'prop-types';
import {
	SectionButton,
	TextButton,
} from './styles';

function Button({
	onPress,
	text,
}) {
	return(
		<SectionButton onPress={onPress}>
			<TextButton>{text}</TextButton>
		</SectionButton>
	)
}

Button.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
}

export default Button;