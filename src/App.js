import 'bootstrap/dist/css/bootstrap.min.css';
// Put any other imports below so that CSS from your
import './App.css';
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
import BookNow from './component/BookNow';
import MoreDetails from './component/MoreDetails';
import House from './component/House';
import Apartment from './component/Apartment';
import Plots from './component/Plots';
import Flat from './component/Flat';
import Land from './component/Land';
import Agent from './component/Agent';
import Blog from './component/Blog';
function App() {
return (
  
<div className="App">
          <Router>
            <Nav />
            <Route path="/" exact><Home /></Route> 
            <Route path="/about"><About /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/news"><News /></Route>
            <Route path="/services"><Services /></Route>
            <Route path="/add"><Forms /></Route> 
            <Route path="/editStudent"><EditStudent /></Route>
            <Route path="/morenews"><MoreNews /></Route>
            <Route path="/bookNow"><BookNow /></Route>
            <Route path="/more"><MoreDetails /></Route>
            <Route path="/houses"><House /></Route>
            <Route path="/apartments"><Apartment /></Route>
            <Route path="/plots"><Plots /></Route>
            <Route path="/flat"><Flat /></Route>
            <Route path="/land"><Land /></Route>
            <Route path="/agents"><Agent /></Route>
            <Route path="/blog"><Blog /></Route>
          </Router>
</div>

);
}
export default App;