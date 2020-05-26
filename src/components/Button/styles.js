import styled from 'styled-components/native'

export const SectionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
	background-color: ${props => props.theme.color.pink};
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
	border-radius: 10px;
	elevation: 5;
`;

export const TextButton = styled.Text`
	color: ${props => props.theme.color.snow};
	font-size: ${props => props.theme.size.p};
	font-weight: bold;
`;