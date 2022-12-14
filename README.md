# 🚀 Bem vindo ao projeto Desafio Frontend BIT !

## Introdução

O desafio consiste em implementar uma aplicação client-side, que rode de forma consistente nos navegadores mais recentes e que seja responsiva para melhor visualização em dispositivos móveis.


<p>Resultado do projeto abaixo: </p>
<p float="left">
<img width="45%" src="https://github.com/jonatasqueirozlima/b2w-challenge-front-BIT/blob/master/assets/b2w-challenge-img1.png"/>
<img width="45%" src="https://github.com/jonatasqueirozlima/b2w-challenge-front-BIT/blob/master/assets/b2w-challenge-img2.png"/>
</p>   
  
<details>
<summary><strong> Regras </strong></summary>

Baseado no Layout, desenvolva uma página web que exibe informações de usuários.

**Premissas:**

1. Ao carregar a página, as informações exibidas devem ser as suas próprias informações pessoais.
2. Ao clicar no botão 'try the next one', a página deve chamar uma API (disponível no link abaixo) que retorna dados de usuários randômicos e exibi-los na tela.
3. Ao clicar no botão 'Follow' a página deve armazenar essa informação. Caso o mesmo usuário seja exibido novamente o botão deve aparecer como 'Following' e com cor diferente
4. Ao seguir um usuário, deverá ser exibido um link na parte superior direita da página ([Layout](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_following.jpg))
5. Ao clicar no link, uma lista com os usuários seguidos deve ser exibida ([Layout](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_followers-list.jpg))
6. Ao navegar entre os usuários (via 'try the next one'), os usuários que NÃO forem seguidos devem aparecer na lista de sugestões ([Exemplo com 1](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-1.png)) ([Exemplo com vários](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-5.png)). Guarde essas informações no Browser, para que quando a página for acessada novamente ou recarregada, já exista sugestões iniciais.

- Note que o Layout e as premissas não deixam claro todas as situações possíveis para os dados do usuário. Você pode interpretar como quiser o que não foi definido como premissa e melhorar a funcionalidade da página, caso ache necessário.

Recomendações:

Utilize a versão mais recente do Angular (https://angular.io/)
Utilize a versão mais recente do Bootstrap (https://getbootstrap.com/)
Atente-se a resposividade da tela (principalmente no formato mobile)

</details>

<details>
<summary><strong> Links do layout e API </strong></summary>

[Layout 1](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about.jpg)
[Layout 2](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_following.jpg)
[Layout 3](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_followers-list.jpg)
[Layout 4](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_sugestions-list-5.png)

Link da [API](https://randomuser.me/api/).

\*a Api pode demorar pra responder ou ficar fora do ar em alguns momentos (pense nisso quando for desenvolver).

</details>

---

## 👨‍💻 Rodando o projeto👨

  
1. Clone o repositório com o comando: <br/>
  `git clone git@github.com:jonatasqueirozlima/b2w-challenge-front-BIT.git`;
2. Entre na pasta do repositório: <br/>
  `cd b2w-challenge-front-BIT`
2. Inicie a aplicação com o comando:
 - `docker-compose up -d --build`
3. Acessar a seguinte URL: <br/>
  http://localhost:3000/


---

## 💥 Defafios que enfrentei

- 🗡️ Problemas em componentes que precisavam da informação do perfil mas a requisição ainda não havia terminado para prover esse dado. E os componentes 'quebravam'
- 🛡️ Background com duas cores em apenas uma linha de CSS.
- 🥊 Deixar idêntico ao layout proposto.
- ⚔️ Usar Tailwind sem deixar as tags longas com muitas classes.

---

## ✍️ Considerações finais

<p>Desafiador e divertido quando o desafio já tem um layout e design proposto e é para segui-lo </p>
<p>Gostei do desafio, foi legal desenvolver o sistema de <code>seguidores</code> e <code>sugestão de seguidores</code> e renderizar informações de um usuário de uma API que é focada em retornar perfil de usuários </p>

---

## 🥷 Próximos passos</h2>

- Testes unitários e integração de Frontend
- Refatorar código para melhorar a componentização
- Usar Styled Components com Tailwind para melhorar a leitura do componente no <code>return </code>
