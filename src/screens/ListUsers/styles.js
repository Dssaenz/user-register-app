import styled from 'styled-components/native'

export const PrincipalContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	margin-vertical: 5%;
	align-items: center;
`;

export const ScrollViewSection = styled.ScrollView`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
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
    width: 1;
  }
  shadow-opacity: 0.10;
  shadow-radius: 3.65;
  /* Shadow */
`;

export const TextName = styled.Text`
	font-size: 20px;
`;

export const ContainerData = styled.View`
`;

export const TextContainer = styled.View`
	margin-left: 6%;
	flex-direction: row;
`;

export const TextEmail = styled.Text`
	margin-left: 6%;
	font-size: 14px;
	color: #b5b5b5;
`;