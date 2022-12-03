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
      <footer className='mt-16 text-center bg-blue-400 py-4 text-white text-xl'>Copyrights Reserved</footer>
    </div>
  );
}

export default App;
