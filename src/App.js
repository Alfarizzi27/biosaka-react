import './App.css';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import "./style/landingPage.css"
import { KontenKiri, KontenKanan } from './components/Isi';
import CardSlider from './components/CardSlider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';



function App() {
  return (
            <div className='body'>
      <NavigationBar />
      <Content />
            <div className='slider'>
            <h1 className='judul'> MEDIA TERBARU </h1> 
            <div className='slide-track'>
      <CardSlider />
            </div>
            </div>
      <Container>
            <Row className='content'>
            <Col md={6} className='mt-2 kiri'>
      <KontenKiri />
            </Col> 
            <Col md={6} className='mt-2 kanan'>
      <KontenKanan />
            </Col>
            </Row>
            </Container>
    </div>
  );
}

export default App;
