import { Row, Col } from 'react-bootstrap';
import Shops from '../components/Shops';
import { useGetShopsQuery } from '../slices/shopsApiSlice';

const HomeScreen = () => {
  //The useGetShopsQuery hook is used to fetch the shops data from the API.
  const { data: shops, isLoading, error } = useGetShopsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Shops!</h1>
          <Row
            style={{
              backgroundColor: '#c7a691',
              padding: '50px',
              borderRadius: '20px',
            }}
          >
            {shops.map((shop) => (
              <Col key={shop._id} sm={12} md={6} lg={4} xl={3}>
                <Shops shop={shop} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
