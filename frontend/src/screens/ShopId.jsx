import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetShopIndividualQuery } from '../slices/shopsApiSlice';

//match?
const ShopId = () => {
  const { id: shopId } = useParams();

  const { data: shop, isLoading, error } = useGetShopIndividualQuery(shopId);

  return (
    <>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button className='mt-3' variant='primary' as='a' href='/'>
          Go Back
        </Button>
      </Link>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
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
      )}
    </>
  );
};

export default ShopId;
