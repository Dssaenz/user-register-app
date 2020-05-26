import styled from 'styled-components/native'

export const PrincipalContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.color.darkSnow};
	margin-vertical: ${props => props.theme.margin.marginLarge};
	align-items: center;
`;

export const ScrollViewSection = styled.ScrollView`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.color.darkSnow};
`;