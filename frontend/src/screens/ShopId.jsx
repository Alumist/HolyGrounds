import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <Card.Img src={shop.image} style={{ width: '350px' }} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
              height: '100%',
              fontSize: '20px',
            }}
          >
            <Card.Text as='div'>{shop.description}</Card.Text>
          </div>
          <Card.Text as='h2'>{shop.location}</Card.Text>
          <Card.Text as='div'>{shop.address}</Card.Text>
        </Card.Body>
      </Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link
          to={shop.socials}
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          <Button className='mt-3' variant='primary' size='lg'>
            Socials
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ShopId;
