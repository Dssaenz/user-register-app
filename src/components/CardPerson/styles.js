import styled from 'styled-components/native'

export const Card = styled.View`
	width: 80%;
	margin-bottom: ${props => props.theme.margin.marginMedium};
	background-color: ${props => props.theme.color.snow};
	padding-vertical: ${props => props.theme.padding.paddingStandard};
	padding-horizontal: ${props => props.theme.padding.paddingStandard};
	flex-direction: row;
	border-radius: 10px;
	/* Shadow */
  elevation: 1;
	shadow-color: ${props => props.theme.color.dark};
  shadow-offset: {
    height: 0;
    width: 1;
  }
  shadow-opacity: 0.10;
  shadow-radius: 3.65;
  /* Shadow */
`;

export const TextName = styled.Text`
	font-size: ${props => props.theme.size.h2};
`;

export const ContainerData = styled.View`
`;

export const ImageUser = styled.Image`
	width: 70px;
	height: 70px;
	border-radius: 10px;
`;

export const TextContainer = styled.View`
	margin-left: ${props => props.theme.margin.marginXL};
	flex-direction: row;
`;

export const TextEmail = styled.Text`
	margin-left: ${props => props.theme.margin.marginXL};
	font-size: ${props => props.theme.size.pds};
	color: ${props => props.theme.color.darkGrey};
`;