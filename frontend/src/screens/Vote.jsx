import { Row, Col } from 'react-bootstrap';
import { useGetShopVotesQuery } from '../slices/shopsApiSlice';
import ShopVote from '../components/NewShops';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Vote = () => {
  const { data: vote, isLoading, error } = useGetShopVotesQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
      ) : (
        <>
          <h1>Our Voting Page!</h1>
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
