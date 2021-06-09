## Monorepo 2FA
- Criei a aplicação utilizando o conceito de arquitetura monorepo, tinha feito nessa linha primeiramente pela facilidade de compartilhar itens, tinha pensando em fazer com typescript assim compartilharia as interfaces, porem com a correria acabei fazendo com js sem types mesmo.
- Neste projeto utilizei para a parte de backend o framework express, assim facilitando bastante o controle de rotas, middlewares e status. Lá criei uma arquitetura de controllers consumindo a carga de dados de um user.json, poderia ter adicionado uma camada de service/repository assim deixando mais desacoplado, porem como tinhamos poucos endpoints acabei deixando essa estrutura mais simples.
- No frontend utilizei react como core, utilizei um framework que gosto para a crição de componentes styledcomponent, do resto foi normal o projeto, acabei dividindo as pastas em containers e pages, assim tentando deixar todas as pages/components sem responsabilidades, deixando somente o container encarregado de chamar os servies e etc.
- Eu poderia ter feito alguns pontos a +, tais como testes, utilização de banco de dados, register e etc, porem com o pouco tempo para realizar o teste acabei seguindo a linha mais simples.

## Rodar o projeto
- Acesse a pasta `packages/api`, e rode `npm install`
- Acesse a pasta `packages/frontend`, e rode `npm install`
- Volte para a raiz do projeto, rode `npm run build` e depois `npm run start`
- Acesse: [http://localhost:8000](http://localhost:8000 "http://localhost:8000")/

## Dados para acesso
- Link Heroku: **[https://monorepo-2fa.herokuapp.com/](https://monorepo-2fa.herokuapp.com/ "https://monorepo-2fa.herokuapp.com/")**
- Email: **tiagovmatos@gmail.com**
- Password: **teste123**
- Secret 2FA: **NBNMADTAE4QIZXPN5YSA44QC3TRX725Y**

![](https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=otpauth://totp/Monorepo-2fa%3Atiagovmatos%40gmail.com%3Fsecret=NBNMADTAE4QIZXPN5YSA44QC3TRX725Y%26issuer=Monorepo-2fa)
