const BASE_URL = 'https://reqres.in/api';

async function callApi(endpoint) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const api = {
  users: {
    list() {
      return callApi('/users');
    },
    create(user) {
      return callApi(`/users`, {
        method: 'POST',
        body: JSON.stringify(user),
      });
    },
    // read(badgeId) {
    //   return callApi(`/badges/${badgeId}`);
    // },
    // update(badgeId, updates) {
    //   return callApi(`/badges/${badgeId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(updates),
    //   });
    // },
    // remove(badgeId) {
    //   return callApi(`/badges/${badgeId}`, {
    //     method: 'DELETE',
    //   });
    // },
  },
};

export default api;