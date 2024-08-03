import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Sistema Escolar
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/profesores" className="nav-link">
                Profesores
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/estudiantes" className="nav-link">
                Estudiantes
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/asignaturas" className="nav-link">
                Asignaturas
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/calificaciones" className="nav-link">
                Calificaciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
