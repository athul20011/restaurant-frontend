import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Viewrest from './Components/Viewrest';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<Viewrest/>}/>
        </Routes>
      </section>
<footer>
  <Footer/>
</footer>
    </div>
  );
}

export default App;
