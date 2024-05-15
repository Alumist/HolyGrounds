import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
// import Shops from './components/Shops';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
