import styled from 'styled-components/native'

export const PrincipalContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: #FBFBFB;
	margin-vertical: 7%;
	align-items: center;
`;

export const ImageUser = styled.Image`
	width: 70px;
	height: 70px;
	border-radius: 10px;
`;

export const CardPerson = styled.View`
	width: 80%;
	margin-bottom: 4%;
	background-color: #FFFFFF;
	padding-vertical: 3%;
	padding-horizontal: 3%;
	flex-direction: row;
	border-radius: 10px;
	/* Shadow */
  elevation: 1;
	shadow-color: #000;
  shadow-offset: {
    height: 0;
    width: 3;
  }
  shadow-opacity: 0.29;
  shadow-radius: 4.65;
  /* Shadow */
`;

export const TextName = styled.Text`
`;


export const TextLastName = styled.Text`
`;

export const ContainerData = styled.View`
`;

export const TextContainer = styled.View`
	margin-left: 6%;
	flex-direction: row;
`;

export const TextEmail = styled.Text`
	margin-left: 6%;
`;