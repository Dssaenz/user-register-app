import { Alert } from 'react-native';
const url = 'https://reqres.in/api/users'

const onSubmit = async data => {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(response => {
		Alert.alert('Success', 'User was successfully created')
		console.log('Success:', response)
	})
	.catch(error => {
		Alert.alert('Failure', 'An error occurred while creating the user')
		console.error('Error:', error)
	})
}

export default onSubmit;