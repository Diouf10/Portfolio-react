import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

/**
 * La barre de navigation.
 * @return {jsx}
 */
  function NavigationBar() {
    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand><Nav.Link as={NavLink} to={'/'}>MWD
            </Nav.Link></Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to={'/'}>Acceuil</Nav.Link>
              <Nav.Link as ={NavLink} to={'/about'}>À propos</Nav.Link>
              <Nav.Link as ={NavLink} to={'/skills'}>Compétences</Nav.Link>     
              <Nav.Link as ={NavLink} to={'/projets'}>Mes Projets</Nav.Link>    
              <Nav.Link as ={NavLink} to={'/Contact'}>Contact</Nav.Link>  
            </Nav>
          </Container>
        </Navbar>
      );
    }

    export default NavigationBar;
