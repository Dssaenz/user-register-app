import React from 'react';
import {  Text  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
	PrincipalContainer,
	ScrollViewSection,
} from './styles';

import { CardPerson, Loader } from '../../components';
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
			return <Loader />
		}
	
		return(
			<SafeAreaView>
				<ScrollViewSection>
					<PrincipalContainer>
						{data.data.map(item => (
							<CardPerson 
								avatar={item.avatar}
								first_name={item.first_name}
								last_name={item.last_name}
								email={item.email}
							/> 
						))}
					</PrincipalContainer>
				</ScrollViewSection>
			</SafeAreaView>
		)
	}
}

export default ListUsers;