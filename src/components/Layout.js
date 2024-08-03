// src/components/Layout.js
import Navbar from './Navbar'; // Asegúrate de importar correctamente
import PropTypes from 'prop-types';

const Layout = ({ children, footer = true }) => {
  return (
    <>
      <Navbar /> {/* Renderiza el Navbar aquí */}
      <main>{children}</main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Colegio XYZ</h1>
            <p>2024 - {new Date().getFullYear()}</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.bool,
};

export default Layout;
