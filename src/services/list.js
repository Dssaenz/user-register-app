const BASE_URL = 'https://reqres.in/api';

async function callApi(endpoint) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const listUsers = {
  users: {
    list() {
      return callApi('/users');
    },
  },
};

export default listUsers;