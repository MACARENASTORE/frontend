import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Layout from '../components/Layout';
import { Table, Button } from 'react-bootstrap';
import Link from 'next/link';

const CalificacionesPage = () => {
  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    const fetchCalificaciones = async () => {
      try {
        const response = await axios.get('/calificaciones');
        setCalificaciones(response.data);
      } catch (error) {
        console.error('Error fetching calificaciones:', error);
      }
    };
    fetchCalificaciones();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1>Calificaciones</h1>
        <Link href="/calificaciones/nuevo">
          <Button variant="primary" className="mb-3">Agregar Calificación</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Estudiante</th>
              <th>Asignatura</th>
              <th>Nota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {calificaciones.map(calificacion => (
              <tr key={calificacion.id}>
                <td>{calificacion.id}</td>
                <td>{calificacion.estudianteNombre}</td>
                <td>{calificacion.asignaturaNombre}</td>
                <td>{calificacion.nota}</td>
                <td>
                  <Link href={`/calificaciones/${calificacion.id}`}>
                    <Button variant="info" className="me-2">Editar</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CalificacionesPage;
