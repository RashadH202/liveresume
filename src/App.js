import './App.css';
import './index.css';
import About from './componets/about/About';
import Home from './componets/home/Home';
import Portfolio from './componets/portfolio/Portfolio';
import Sidebar from './componets/sidebar/Sidebar';
import Resume from './componets/resume/Resume';
import Contact from './componets/contact/Contact';
function App() {
  return (
    <>
    <Sidebar />
    <div className='main'>
      <Home />
      <About />
      <Portfolio />
      <Resume />
      {/* <Contact /> */}
      

      </div>
    
</>
  );
}

export default App;
