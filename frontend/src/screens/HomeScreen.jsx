import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Shops from '../components/Shops';
import axios from 'axios';

const HomeScreen = () => {
  //'shops is the piece of state, and is the data from the backend, and setShops is the function that i use to set the state. I set the state with the data from the backend, and then i can use the shops state to map through the shops, and display them on the screen.
  const [shops, setShops] = useState([]);

  // Fetch shops from backend, and set the state, and the empty array is the dependency array, so it will only run once, when the component mounts, and not on every re-render of the component, as it would if the dependency array was not there. If there is a dependency array, it will run whenever the dependency array changes.
  //What i get, is the response from the backend, and then i set the state with the data from the response. Data is the array of shops that i get from the backend. It is also destructured from the response object.
  useEffect(() => {
    const fetchShops = async () => {
      const { data } = await axios.get('/api/shops');
      setShops(data);
    };
    fetchShops();
  }, []);

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
