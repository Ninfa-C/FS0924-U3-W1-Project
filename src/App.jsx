import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHome from "./components/NetflixHome";
import { Component } from "react";

class App extends Component {
  state = {
    query: "",
  };

  change = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <header>
          <NetflixNav searchSubmit={this.change} />
        </header>
        <main>
          {/*Come per U3-W1-D2/3 per aggiornare un componente è necessario passargli una 
          key perchè aggiornando la key si aggiorna il componente perchè è come se fosse diverso */}
          <NetflixHome key={this.state.query} query={this.state.query} />
        </main>
        <footer>
          <NetflixFooter />
        </footer>
      </>
    );
  }
}

export default App;
