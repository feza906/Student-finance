import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Calculate } from './pages/Calculate';
import { Header } from './pages/components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/calculate' element={<Calculate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
