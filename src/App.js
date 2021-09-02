import NavExample from './components/NavExample'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import Container from  "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import './index.css'


function App() {
  return (
    <div>
     <NavExample/>
     <Container fluid>
      <Row>
        <PageOne id="pageone"></PageOne>
        <PageTwo id="pagetwo"></PageTwo>
        <PageThree id="pagethree"></PageThree>
      </Row>
     </Container>
     </div>
  );
}

export default App;
