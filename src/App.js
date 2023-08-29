import "./App.scss";
import Navbar from "./component/navbar";
import About from "./component/about";
import Footer from "./component/footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
