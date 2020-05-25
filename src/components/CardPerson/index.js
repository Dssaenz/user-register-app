import React from 'react'
import PropTypes from 'prop-types';

import {
	Card,
	ImageUser,
	TextName,
	ContainerData,
	TextContainer,
	TextEmail
} from './styles';

function CardPerson({
	avatar,
	first_name,
	last_name,
	email,
}) {
	return(
		<Card>
			<ImageUser source={{ uri: avatar }} />
			<ContainerData>
				<TextContainer>
					<TextName>{first_name} </TextName>
					<TextName>{last_name}</TextName>
				</TextContainer>
				<TextEmail>{email}</TextEmail>
			</ContainerData>
		</Card>
	)
}

CardPerson.propTypes = {
	avatar: PropTypes.string,
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	email: PropTypes.string,
}

export default CardPerson;