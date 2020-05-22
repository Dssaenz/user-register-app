import React from 'react';
import {  Text, ScrollView  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { 
	PrincipalContainer,
	ImageUser,
	CardPerson,
	TextName,
	ContainerData,
	TextContainer,
	TextLastName,
	TextEmail
} from './styles';

import api from '../../services/api';

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
			const data = await api.users.list();
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
				<ScrollView>
					<PrincipalContainer>
					{data.data.map(item => (
						<CardPerson>
							<ImageUser source={{ uri: item.avatar}} />
							<ContainerData>
								<TextContainer>
									<TextName>{item.first_name}</TextName>
									<TextLastName>{item.last_name}</TextLastName>
								</TextContainer>
								<TextEmail>{item.email}</TextEmail>
							</ContainerData>
						</CardPerson>
					))}
					</PrincipalContainer>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

export default ListUsers;