//--- With Hooks ---//
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import {
	PrincipalContainer,
	ScrollViewSection,
	ContentTitle,
	Title,
	TitleStrong,
	Text,
	TitleText,
	SectionForm,
	ContainerLabel,
	SectionFormTop,
}
from './styles';

import { Input, Button } from '../../components';
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
								<Input placeholder='Darwin Sáenz' onChangeText={text => {
									setValue('name', text)
								}} />
							</ContainerLabel>
						</SectionForm>
						<SectionFormTop>
							<AntDesign name="rocket1" size={32} color="black" />
							<ContainerLabel>
								<TitleText>Job</TitleText>
								<Input placeholder='Frontend Developer' onChangeText={text => {
									setValue('job', text)
								}} />
							</ContainerLabel>
						</SectionFormTop>
						<Button onPress={handleSubmit(onSubmit)} text='Create' />
				</PrincipalContainer>
			</ScrollViewSection>
		</SafeAreaView>
	)
}

export default CreateUser;