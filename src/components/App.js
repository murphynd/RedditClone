import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import PostControl from "./PostControl";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <PostControl />
        </div>
      </div>
    </div>
  );
}

export default App;
