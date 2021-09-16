import Navbar from './FrontEnd/Navbar';
import Home from './FrontEnd/Home';
import background1 from './FrontEnd/Images/background1.png';
import Section2 from './FrontEnd/Section2';
import Section3 from './FrontEnd/Section3';
import Section4 from './FrontEnd/Section4';
import Section5 from './FrontEnd/Section5';
import Section6 from './FrontEnd/Section6';
import Footer from './FrontEnd/Footer';
function App() {
  return (
    
    <div className="App" style={{ backgroundImage: `url(${background1})`,backgroundSize:'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat :'none'}}>
      <Navbar/>
      <div className="content" >
       <Home/>
      </div>
      <div>
      <Section2/>
      </div>
      <div>
        <Section3/>
      </div>
      <div>
        <Section4/>
      </div>
      <div>
        <Section5/>
      </div>
      <div>
        <Section6/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
