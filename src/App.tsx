import './App.css';
import Contact from './components/Contact/Contact';
import Developer from './components/Developer/Developer';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Developer />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
