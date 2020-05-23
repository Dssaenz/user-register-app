//--- With Hooks ---//
import React, { useEffect } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import {
	ContentTitle,
	Title,
	TitleStrong,
	Text,
	PrincipalContainer,
	ScrollViewSection,
	Button,
	TextButton,
	TitleText,
	SectionForm,
	ContainerLabel,
	SectionFormTop,
}
from './styles';

import onSubmit from '../../services/create';

function CreateUser() {
	
	const { handleSubmit, register, setValue } = useForm();

	useEffect(() => {
		register('name'),
		register('job')
	}, [register])

	return(
		<SafeAreaView>
			<ScrollViewSection>
				<PrincipalContainer>
					<ContentTitle>
						<Title>Time to</Title>
						<TitleStrong>Create Users</TitleStrong>
					</ContentTitle>
					<Text>Just type in the information and you can easily create an user.</Text>
						<SectionForm>
							<MaterialIcons name="person-pin" size={32} color="black" />
							<ContainerLabel>
								<TitleText>Name</TitleText>
								<TextInput placeholder='Darwin Sáenz' onChangeText={text => {
									setValue('name', text)
								}} />
							</ContainerLabel>
						</SectionForm>
						
						<SectionFormTop>
							<AntDesign name="rocket1" size={32} color="black" />
							<ContainerLabel>
								<TitleText>Job</TitleText>
								<TextInput placeholder='Frontend Developer' onChangeText={text => {
									setValue('job', text)
								}} />
							</ContainerLabel>
						</SectionFormTop>
						
						<Button onPress={handleSubmit(onSubmit)}>
							<TextButton>Create</TextButton>
						</Button>
				</PrincipalContainer>
			</ScrollViewSection>
		</SafeAreaView>
	)
}

export default CreateUser;

//--- With Class Component ---//

// import React from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// class CreateUser extends React.Component {
//   state = {
//     name: '',
//     job: ''
//   }

//   async onSubmit() {
//     const url = 'https://reqres.in/api/users'
// 		const data = {
// 			name: this.state.name,
// 			job: this.state.job,
// 		}
// 		fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers:{
//         'Content-Type': 'application/json'
//       }
// 		})
// 		.then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then(response => console.log('Success:', response));
//   }
//   render(){
//     console.log(this.state.name)  
//     console.log(this.state.job)
//     const { name, job } = this.state;
//     return(
//       <SafeAreaView>
//         <View>
//           <Text>Nombre</Text>
//           <TextInput onChangeText={name => this.setState({name})} value={name} />
//           <Text>Trabajo</Text>
//           <TextInput onChangeText={job => this.setState({job})} value={job} />
//           <Button
//             title='Crear'
//             onPress={() => this.onSubmit()} 
//           />
//         </View>
//       </SafeAreaView>
//     )
//   }
// }

// export default CreateUser;