const BASE_URL = 'https://api.github.com';

export async function fetchUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);
  if (!response.ok) {
    const error = new Error('Usuário não encontrado');
    error.status = response.status;
    throw error;
  }
  return await response.json();
}

export { BASE_URL };

export async function fetchUserRepos(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10`);
  if (!response.ok) {
    throw new Error ('Repositórios não encontrados')  
  }
  return await response.json();
}