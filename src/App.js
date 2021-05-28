import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//import logo from './logo.svg';
import './App.css';
import './Header.css';
//import Cards from './component/Cards'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import News from './component/News';
import Services from './component/Services';
import Forms from './component/Forms';
import EditStudent from './component/EditStudent';
import MoreNews from './component/MoreNews';
// Any word before equal sign is variable to be called in the function
// const IconImage =styled.div`
// text-align: center;
// display: block;
// align-items: center;
// margin: auto;
// margin-top:2%;
// width: 20%;
// `
// const TextSection =styled.div`
// text-align: center;
// align-items: center;
// margin: auto;
// font-size:30px;
// color:#fff;
// font-weight:bold;
// `
// const Button =styled.div`
// background: blue;
// color: white;
// font-size: 20px;
// border-radius: 5px;
// border: none;
// padding:10px;
// margin: auto;
// cursor: pointer;
// justify-content: center;
// align-items: center;
// width:20%;
// text-align:center;
// margin-top:2%;
// `
function App() {
return (
  
<div>
          <Router>
            <Nav />
            <Route path="/" exact>
              <Home />
            </Route> 
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/add">
                <Forms />
            </Route> 
            <Route path="/editStudent">
                <EditStudent />
            </Route>
            <Route path="/morenews"><MoreNews /></Route>
          </Router>
</div>

);
}
export default App;