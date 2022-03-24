import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./assets/global.css";
import Dashboard from "./components/Dashboard";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Dashboard />
    </div>
  );
}

export default App;
