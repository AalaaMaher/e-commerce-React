import { NavLink ,Nav,NavItem } from "react-bootstrap"
import { Route, Link } from "react-router-dom";
const Header =()=>{
    return<>

<Nav fill variant="tabs" defaultActiveKey="/Home">
  <Nav.Item>
    <Nav.Link href="/product">Product</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/catogary"> Catogary</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/cart">Cart</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>


    </>

}

export default Header





