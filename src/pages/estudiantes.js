import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { Button, Form, Table, Container } from 'react-bootstrap';
import Layout from '../components/Layout'; // Importa el Layout

const EstudiantesPage = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEstudiantes();
  }, []);

  const fetchEstudiantes = async () => {
    try {
      const response = await axios.get('/estudiantes');
      setEstudiantes(response.data);
    } catch (error) {
      console.error('Error fetching estudiantes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/estudiantes/${editingId}`, { nombre });
      } else {
        await axios.post('/estudiantes', { nombre });
      }
      fetchEstudiantes();
      setNombre('');
      setEditingId(null);
    } catch (error) {
      console.error('Error creating/updating estudiante:', error);
    }
  };

  const handleEdit = (estudiante) => {
    setNombre(estudiante.nombre);
    setEditingId(estudiante.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/estudiantes/${id}`);
      fetchEstudiantes();
    } catch (error) {
      console.error('Error deleting estudiante:', error);
    }
  };

  return (
    <>
      <Container>
        <h1>Estudiantes</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {editingId ? 'Actualizar' : 'Agregar'}
          </Button>
        </Form>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.id}>
                <td>{estudiante.id}</td>
                <td>{estudiante.nombre}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(estudiante)}>
                    Editar
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(estudiante.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EstudiantesPage;
