import React from 'react';
import {  Text, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
	PrincipalContainer,
	ScrollViewSection,
	ImageUser,
	CardPerson,
	TextName,
	ContainerData,
	TextContainer,
	TextEmail
} from './styles';

import listUsers from '../../services/list';

class ListUsers extends React.Component {
	state = {
		loading: false,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		this.fetchData()
	}

	fetchData = async () => {
		this.setState({
			loading: true,
			error: null,
		})
		try {
			const data = await listUsers.users.list();
			this.setState({ data: data, loading: false })
		} catch (error) {
			this.setState({ loading: false, error: error })
			console.error(error)
		}
	}

	render(){
		const { loading, data } = this.state;
		if(loading === true || data === undefined){
			return <Text>Cargando...</Text>
		}
	
		return(
			<SafeAreaView>
				<ScrollViewSection>
					<PrincipalContainer>
					{data.data.map(item => (
						<CardPerson>
							<ImageUser source={{ uri: item.avatar}} />
							<ContainerData>
								<TextContainer>
									<TextName>{item.first_name} </TextName>
									<TextName>{item.last_name}</TextName>
								</TextContainer>
								<TextEmail>{item.email}</TextEmail>
							</ContainerData>
						</CardPerson>
					))}
					</PrincipalContainer>
				</ScrollViewSection>
			</SafeAreaView>
		)
	}
}

export default ListUsers;