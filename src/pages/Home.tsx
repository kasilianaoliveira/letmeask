import { FC } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import googleIconImages from "../assets/images/google-icon.svg";
import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import "../styles/auth.scss";

export const Home: FC = () => {
  const history = useNavigate();

  const { user, signInWithGoogle } = useAuth();
  const handleCreateRoom = async () => {
    if (!user) await signInWithGoogle();

    history("/rooms/new");
  };

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImages} alt="" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">
              <img src="" alt="" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};
