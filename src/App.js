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
function App() {
  return (
    <Router>
    <div className="App">
      
      <Header/>
      <Switch>
      <Route exact path="/">
      <Banner/>
      <VideoRow/>
      <Footer/>
      </Route>
      <Route path="/Artist">
            <Artist/>
      </Route>
    </Switch>
    
    </div>
    </Router>
  );
}

export default App;
