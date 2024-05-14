import { Nav, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Nav className='justify-content-center m-5' activeKey='/home'>
      <Nav.Item>
        <Nav.Link href='/'>Coffee</Nav.Link>
      </Nav.Item>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Want to Add to the list!</Dropdown.Toggle>
        <Dropdown.Menu>
          <Link to='/addshop'>
            <Dropdown.Item as='a'>Add</Dropdown.Item>
          </Link>
          <Dropdown.Item as='a'>Vote</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
};

export default Header;
