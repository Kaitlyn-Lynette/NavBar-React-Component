import Navbar from './components/Navbar'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import './index.css'


function App() {
  return (
  <div className="container">
     <Navbar/>
     <PageOne 
      id="pageone"/>
     <PageTwo 
      id="pagetwo"/>
     <PageThree 
      id="pagethree"/>
  </div>
  );
}

export default App;
