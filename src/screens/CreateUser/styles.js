import styled from  'styled-components/native'

export const ScrollViewSection = styled.ScrollView`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
`;

export const PrincipalContainer = styled.View`
	width: 100%;
	height: 100%;
	background-color: #f0f0f0;
	margin-vertical: 5%;
	padding-top: 10%;
	padding-horizontal: 10%;
`;

export const ContentTitle = styled.View`
	flex-direction: row;
`;
export const Title = styled.Text`
	font-weight: bold;
	font-size: 25px;
`;
export const TitleStrong = styled.Text`
	font-weight: bold;
	font-size: 25px;
	color: #FA4D61;
	margin-left: 3%;
`;
export const Text = styled.Text`
	font-size: 16px;
	color: #b3b1b1;
	margin-top: 4%;
	margin-bottom: 10%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
	background-color: #FA4D61;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
	border-radius: 10px;
	elevation: 5;
`;

export const TextButton = styled.Text`
	color: #FFFFFF;
	font-size: 17px;
	font-weight: bold;
`;

export const TitleText = styled.Text`
	font-size: 16px;
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
	margin-top: 4%;
	margin-bottom: 20%;

`;

export const ContainerLabel = styled.View`
	margin-left: 6%;
	border-left-width: 1px;
	padding-left: 4%;
	border-color: #b3b1b1;
`;