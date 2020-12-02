import "./App.css";
import Header from "./Header";
import PostControl from "./PostControl";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
          <Header />
        <br></br>
        <br></br>
          <PostControl />
      </div>
    </div>
  );
}

export default App;
