import Header from './component/Header';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './component/Footer';
import Content from './component/Content';
import Portfolio from './component/Portfolio';
import About from './component/About';
import './Portfolio.css';


function App1() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Content/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App1;
