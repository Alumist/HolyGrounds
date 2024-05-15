import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/button.css';

const Shops = ({ shop }) => {
  return (
    <Card className='m-1' border='dark' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={shop.image} />
      <Link to={`/shop/${shop._id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Card.Body>
          <Card.Title as='h3'>
            <strong>{shop.name}</strong>
          </Card.Title>
          <Card.Text as='div'>{shop.description}</Card.Text>
        </Card.Body>
      </Link>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Link to={shop.socials} target='_blank' style={{ textDecoration: 'none' }}>
          <Button className='mt-3' variant='primary'>
            Socials
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default Shops;
