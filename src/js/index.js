import { inputSearch, btnSearch, profileResults } from './dom.js';
import { fetchUser } from './api.js';
import { renderLoading, clear, renderProfile } from './render.js';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert('Por favor, digite um nome de usuário no GitHub');
        return;
    }

    renderLoading(profileResults);

    try {
        const userData = await fetchUser(userName);
        renderProfile(profileResults, userData);
    } catch (error) {
        if (error.status === 404) {
            alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
        } else {
            console.error('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
        }
        clear(profileResults);
    }
});

