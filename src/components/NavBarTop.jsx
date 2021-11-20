import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";


export default function NavBarTop() {
  const { carrito } = useContext(CarritoContext);
  const totalCarrito = carrito.reduce((total, item) => {
		return total + item.cantidad;
	}, 0);



    return (
        <Navbar bg="light" expand="lg" fixed="top">
  <Container>
				<Navbar.Brand>Drinks</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="nav-link" to="/">Inicio</Link>

						
					</Nav>
					<Nav>
						<Link className="nav-link" to="/carrito">
							Carrito
							<Badge badgeContent={totalCarrito} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</Link>

						<Link className="nav-link" to="/carrito">Comprar!</Link>

						
					</Nav>
				</Navbar.Collapse>
			</Container>
</Navbar>
    )
}
