import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Header from './Components/Header';
import VideoRow from './Components/VideoRow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Artist from './Components/Artist';
import MessageIcon from './Components/MessageIcon';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Header/>
      <Switch>
      <Route exact path="/">
      <Banner/>
      <MessageIcon/>
      <VideoRow/>
      <Footer/>
      </Route>
      <Route path="/Artist">
            <Artist/>
            <MessageIcon/>
      </Route>
    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
