import styled from  'styled-components/native'

export const ScrollViewSection = styled.ScrollView`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.color.darkSnow};
`;

export const PrincipalContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.color.darkSnow};
	margin-vertical: ${props => props.theme.margin.marginLarge};
	padding-top: 10%;
	padding-horizontal: 10%;
`;

export const ContentTitle = styled.View`
	flex-direction: row;
`;
export const Title = styled.Text`
	font-weight: bold;
	font-size: ${props => props.theme.size.h1};
`;
export const TitleStrong = styled.Text`
	font-weight: bold;
	font-size: ${props => props.theme.size.h1};
	color: ${props => props.theme.color.pink};
	margin-left: ${props => props.theme.margin.marginStandard};
`;
export const Text = styled.Text`
	font-size: ${props => props.theme.size.pd};
	color: ${props => props.theme.color.grey};
	margin-top: ${props => props.theme.margin.marginMedium};
	margin-bottom: 10%;
`;

export const Button = styled.TouchableOpacity.attrs({
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

export const TitleText = styled.Text`
	font-size: ${props => props.theme.size.pd};
`;

export const SectionForm = styled.View`
	width: 90%;
	flex-direction: row;
	align-items: center;
`;

export const SectionFormTop = styled.View`
	width: 90%;
	flex-direction: row;
	align-items: center;
	margin-top: ${props => props.theme.margin.marginMedium};
	margin-bottom: 20%;

`;

export const ContainerLabel = styled.View`
	margin-left: ${props => props.theme.margin.marginXL};
	border-left-width: 1px;
	padding-left: ${props => props.theme.padding.paddingMedium};
	border-color: ${props => props.theme.color.grey};
`;