/** @format */
//import "./Header.scss"
import './App.scss'
import {About} from './components/About/About'
import { Cases } from './components/Cases/Cases';
import { Blog } from './components/Blog/Blog';
import { Team } from './components/Team/Team';
import { Callback } from "./components/Form/Form";
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';


function App() {

  return (
    <div className='body'>
      <Header />
      <Hero/>
      <About />
      <Cases />
      <Blog />
      <Team />
      <Callback />
      <Footer/>
    </div>
  );
}

export default App;
