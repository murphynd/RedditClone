import "./App.css";
import Header from "./Header";
import PostControl from "./PostControl";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="col-12">
          <div className="row">
            <Header />
          </div>
          <br></br>
          <br></br>
          <div className="row">
            <PostControl />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
