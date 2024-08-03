import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <>
      <div className="container mt-4">
        <h1>Bienvenido al Sistema Escolar</h1>
        <p>Gestiona profesores, estudiantes, asignaturas y calificaciones fácilmente.</p>
        <div className="mt-4">
          <a href="/profesores" className="btn btn-primary me-2">Ver Profesores</a>
          <a href="/estudiantes" className="btn btn-secondary me-2">Ver Estudiantes</a>
          <a href="/asignaturas" className="btn btn-success me-2">Ver Asignaturas</a>
          <a href="/calificaciones" className="btn btn-warning">Ver Calificaciones</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
