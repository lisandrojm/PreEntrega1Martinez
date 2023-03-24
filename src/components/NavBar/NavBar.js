import CartWidget from '../CartWidget/CartWidget';
import Button from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    <nav>
      <h3>Freelo Ecommerce</h3>
      <div>
        <Button variant="primary" className="m-2 ps-4 pe-4 rounded-pill">
          Procesadores
        </Button>
        <Button variant="primary" className="m-2 ps-4 pe-4 rounded-pill">
          Mothers
        </Button>
        <Button variant="primary" className="m-2 ps-4 pe-4 rounded-pill">
          Placas de Video
        </Button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
