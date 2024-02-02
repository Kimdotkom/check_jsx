import './App.css';
import Navigation from './components/Navigation';
import {Card, Button} from 'react-bootstrap'
import Price from './components/Price';
import Description from './components/Description';
import Name from './components/Name';
import Image from './components/Image';
import { IoCartOutline } from "react-icons/io5";

function App() {
  let firstName = "Ahmed"
  return (
    <div className="App">
        <Navigation />

        <h2 style={{textAlign: 'center'}}>
          { firstName ? `Hello ${firstName}` : 'Hello There !' }
        </h2>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '3%'}}>
      <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title> <Price /> </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Card.Footer></Card.Footer>
        <h3>
          <Name />
        </h3>
        <Button variant="outline-success">Buy now  <IoCartOutline size={25} /></Button>
      </Card.Body>
    </Card>
      </div>

    </div>
  );
}

export default App;
