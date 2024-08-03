import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Layout from '../components/Layout';
import { Table, Button } from 'react-bootstrap';
import Link from 'next/link';

const AsignaturasPage = () => {
  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    const fetchAsignaturas = async () => {
      try {
        const response = await axios.get('/asignaturas');
        setAsignaturas(response.data);
      } catch (error) {
        console.error('Error fetching asignaturas:', error);
      }
    };
    fetchAsignaturas();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1>Asignaturas</h1>
        <Link href="/asignaturas/nuevo">
          <Button variant="primary" className="mb-3">Agregar Asignatura</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Profesor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {asignaturas.map(asignatura => (
              <tr key={asignatura.id}>
                <td>{asignatura.id}</td>
                <td>{asignatura.nombre}</td>
                <td>{asignatura.profesorNombre}</td>
                <td>
                  <Link href={`/asignaturas/${asignatura.id}`}>
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

export default AsignaturasPage;
