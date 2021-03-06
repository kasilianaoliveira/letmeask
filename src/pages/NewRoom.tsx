import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import "../styles/auth.scss";
// import { useAuth } from "../hooks/useAuth";

export const NewRoom: FC = () => {
  // const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
