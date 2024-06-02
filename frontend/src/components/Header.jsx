import { Nav, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Nav className='justify-content-center m-5' activeKey='/home'>
            <Nav.Item>
              <Nav.Link href='/' style={{ color: 'black', fontSize: '40px' }}>
                HolyGrounds
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col
          className='d-flex justify-content-center'
          style={{ marginBottom: '30px' }}
        >
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle as={Nav.Link} style={{ color: 'black' }}>
              Want to Add to the list!
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to='/addshop' style={{ textDecoration: 'none' }}>
                <Dropdown.Item as='a'>Add</Dropdown.Item>
              </Link>
              <Link to='/vote' style={{ textDecoration: 'none' }}>
              <Dropdown.Item as='a'>Vote</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
