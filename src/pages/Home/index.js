import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="profile" alt="profile" />
            <div>
              <h3>Nome do Usuario</h3>
              <span>@Usuario</span>
              <p>Descrição do perfil</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste" description="descrição do item" />
            <ItemList title="Teste" description="descrição do item" />
            <ItemList title="Teste" description="descrição do item" />
            <ItemList title="Teste" description="descrição do item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
