import './App.css';
import Home from './component/Home';
import Edit from './component/Edit';
import Post from './component/Post';
import Step from './component/Step';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/post' element={< Post />}></Route>
          <Route exact path='/edit' element={< Edit />}></Route>
          <Route exact path='/step' element={< Step />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
