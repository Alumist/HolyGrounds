import { Row, Col } from 'react-bootstrap';
import { useGetShopVotesQuery } from '../slices/shopsApiSlice';
import ShopVote from '../components/NewShops';

const Vote = () => {
  const { data: vote, isLoading, error } = useGetShopVotesQuery();

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
          {vote.map((shop) => (
            <Col key={vote._id} sm={12} md={6} lg={4} xl={3}>
              <ShopVote shop={shop} />
            </Col>
          ))}
        </Row>
      </>
    )}
  </>
  );
};
export default Vote;
