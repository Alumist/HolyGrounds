import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Shops from '../components/Shops';
import axios from 'axios';

const ShopId = ({ match }) => {
  const [shop, setShop] = useState({});

  const { id: shopId } = useParams();

  useEffect(() => {
    const fetchShop = async () => {
      const { data } = await axios.get(`/api/shops/${shopId}`);
      setShop(data);
    };

    fetchShop();
  }, [shopId]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title as='h2'>
            <strong>{shop.name}</strong>
          </Card.Title>
          <Card.Text as='div'>{shop.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShopId;
