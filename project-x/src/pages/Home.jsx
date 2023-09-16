import React from "react";
import * as Icon from "@phosphor-icons/react";

function Home() {
  const iconStyle = {
    size: 20,
    className: "mx-3",
    cursor: "pointer",
    color: "#EAFFDA",
  };
  const icons = [
    {
      name: "Linkedin",
      icon: <Icon.LinkedinLogo {...iconStyle} />,
      link: "https://www.linkedin.com/in/davitorelli/",
    },
    {
      name: "GitHub",
      icon: <Icon.GithubLogo {...iconStyle} />,
      link: "https://github.com/DaviTorelli",
    },
  ];
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Project X</h1>
          <p className="lead">
            Seja muito bem vindo(a) ao projeto que tem como objetivo resolver
            alguns problemas ao dar uma festinha.
          </p>
          <hr className="my-4" />
          <p>
            O Project X é sim uma referência ao filme de 2012 do diretor Nima
            Nourizadeh, mas ao contrário dos personagens, quero deixar o evento
            mais organizado.
          </p>
          <p>
            A ideia do projeto é a criação de festas com facildade, gerenciando
            lugares, convidados e gerenciando a previsão do tempo para a data
            marcada com poucos cliques e muita facilidade. Além de enviar
            mensagens instantâneas aos convidados.
          </p>
          <h3>Requisitos Iniciais:</h3>
          <ul>
            <li>
              Previsão do Tempo em Tempo Real com a Weather API da Meteomatics.
            </li>
            <li>Gerenciamento de Convidados simples.</li>
          </ul>
          <h3>Futuramente:</h3>
          <p>
            Estes são apenas os recursos iniciais do Project X, mas em breve
            quero implementar diversos elementos nos quais tenho dificuldade
            atualmente, como por exemplo a confirmação dos convidados.
          </p>
          <h4>Contato:</h4>
          <ul>
            {icons.map((item) => (
              <li>
                <a
                  style={{ textDecoration: "none" }}
                  href={item.link}
                  target="_blank"
                >
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
