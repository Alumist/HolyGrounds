import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shops = ({ shop }) => {
  return (
    <Card className='m-1' border='dark' style={{ width: '18rem' }}>
      <Card.Img variant='top' src={shop.image} />
      <Card.Body>
        <Card.Title as='h3'>
          <strong>{shop.name}</strong>
        </Card.Title>
        <Card.Text as='div'>{shop.description}</Card.Text>
        <Link to={shop.socials} target='_blank'>
          <Button className='mt-3' variant='primary'>
            Socials
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Shops;
