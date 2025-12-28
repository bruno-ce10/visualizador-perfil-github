# Visualizador de Perfil GitHub

Aplicação web simples para buscar perfis e repositórios do GitHub.

Funcionalidades
- Buscar usuário pelo nome de usuário do GitHub.
- Exibir informações do perfil (avatar, nome, bio, seguidores, seguindo).
- Mostrar até 10 repositórios do usuário com stars, forks, watchers e linguagem.

Endpoints utilizados
- Perfil: `GET https://api.github.com/users/:username`
- Repositórios: `GET https://api.github.com/users/:username/repos?per_page=10`

Como usar (desenvolvimento)
1. Abra o arquivo `index.html` no navegador ou sirva o projeto com um servidor estático.

Exemplos rápidos para servir localmente:

Python 3:
```bash
python -m http.server 8000
```

Node (serve):
```bash
npx serve .
```

Estrutura do projeto
- `index.html` — página principal
- `src/js/` — scripts JavaScript (`api.js`, `dom.js`, `index.js`, `render.js`)
- `src/css/` — estilos

Notas de desenvolvimento
- Ao digitar um nome de usuário e clicar em pesquisar (ou pressionar Enter) o app busca os dados na API do GitHub.
- Caso o usuário não exista, é exibido um alerta.

Contribuições
- Sugestões e PRs são bem-vindos.

Licença
- Projeto sem licença explícita.