import React from "react";
import Dashboard from "../../pages/dashboard/index";
import { getUser, logout } from "../../services/auth";

export default (props) => {
  const logoutUser = () => {
    logout();
    props.history.push("/login");
  };

  return (
    <Dashboard
      user={getUser()}
      github={"https://github.com/tiago1994/monorepo-2fa"}
      monorepo={
        "Criei a aplicação utilizando o conceito de arquitetura monorepo, tinha feito nessa linha primeiramente pela facilidade de compartilhar itens, tinha pensando em fazer com typescript assim compartilharia as interfaces, porem com a correria acabei fazendo com js sem types mesmo."
      }
      backend={
        "Neste projeto utilizei para a parte de backend o framework express, assim facilitando bastante o controle de rotas, middlewares e status. Lá criei uma arquitetura de controllers consumindo a carga de dados de um user.json, poderia ter adicionado uma camada de service/repository assim deixando mais desacoplado, porem como tinhamos poucos endpoints acabei deixando essa estrutura mais simples."
      }
      frontend={
        "No frontend utilizei react como core, utilizei um framework que gosto para a crição de componentes styledcomponent, do resto foi normal o projeto, acabei dividindo as pastas em containers e pages, assim tentando deixar todas as pages/components sem responsabilidades, deixando somente o container encarregado de chamar os servies e etc."
      }
      message={
        "Eu poderia ter feito alguns pontos a +, tais como testes, utilização de banco de dados, register e etc, porem com o pouco tempo para realizar o teste acabei seguindo a linha mais simples."
      }
      logout={() => logoutUser()}
    />
  );
};
