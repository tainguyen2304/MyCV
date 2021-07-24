import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Myprojects from './component/MyProjects';
import About from './component/About';
function App() {
  return (
    <div className='container' style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/my_project'><Myprojects></Myprojects></Route>
          <Route path='/about_me'><About/></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
