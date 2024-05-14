import { Row, Col } from 'react-bootstrap';
import shops from '../Shops';
import Shops from '../components/Shops';

const HomeScreen = () => {
  return (
    <>
      <h1>Shops!</h1>
      <Row>
        {shops.map((shop) => (
          <Col key={shop._id} sm={12} md={6} lg={4} xl={3}>
            <Shops shop={shop} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;