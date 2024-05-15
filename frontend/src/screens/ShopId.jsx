import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
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
      <Row>
        <Col md={6}>
          <Shops shop={shop} />
        </Col>
      </Row>
    </>
  );
};

export default ShopId;
