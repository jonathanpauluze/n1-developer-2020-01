# E-commerce N1 #
Projeto criado como desafio para posição de Desenvolvedor Front-End na [Agência N1](https://agencian1.com.br)

### Necessário para rodar o projeto ###
- [Git](https://git-scm.com/)
- [NodeJS e NPM](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Como rodar o projeto ###
Faça um clone do repositório
```
git clone https://github.com/jonathanpauluze/ecommerce-n1
cd ecommerce-n1
```

Na raiz do projeto, acesse a pasta `backend` e instale as dependências
```
cd backend
yarn
```

Em seguida, inicie o servidor backend local (o servidor fica na porta 3333)
```
yarn dev
```

Retorne na raiz do projeto, acesse a pasta `frontend` e inicie um servidor local
```
cd ../frontend
npx http-server ./
```

Agora basta acessar a URL descrita no console.


## Funcionalidades ##
- **Menu hamburguer do header**: abre um menu
- **Botão "contato" do header**: abre um modal de formulário
- **Botão de enviar do modal formulário**: mostra uma confirmação e fecha o modal
- **Botões do slider**: alternam os slides
- **Botão "comprar"**: abre um modal e aumenta a quantidade de produtos no carrinho do header



