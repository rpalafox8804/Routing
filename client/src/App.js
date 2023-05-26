import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Welcome from './components/Welcome';
import Number from './components/Number';
import ColorWord from './components/ColorWord';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
            <Route path="/home" element={<Welcome />} />
            <Route path="/:param/:color1/:color2" element={<ColorWord/>} />
            <Route path='/:param' element={<Number/>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
