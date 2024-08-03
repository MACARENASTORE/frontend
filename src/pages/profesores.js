import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { Button, Form, Table, Container } from 'react-bootstrap';

const ProfesoresPage = () => {
  const [profesores, setProfesores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProfesores();
  }, []);

  const fetchProfesores = async () => {
    try {
      const response = await axios.get('/profesores');
      setProfesores(response.data);
    } catch (error) {
      console.error('Error fetching profesores:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/profesores/${editingId}`, { nombre, apellidos, email });
      } else {
        await axios.post('/profesores', { nombre, apellidos, email });
      }
      fetchProfesores();
      setNombre('');
      setApellidos('');
      setEmail('');
      setEditingId(null);
    } catch (error) {
      console.error('Error creating/updating profesor:', error);
    }
  };

  const handleEdit = (profesor) => {
    setNombre(profesor.nombre);
    setApellidos(profesor.apellidos);
    setEmail(profesor.email);
    setEditingId(profesor.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/profesores/${id}`);
      fetchProfesores();
    } catch (error) {
      console.error('Error deleting profesor:', error);
    }
  };

  return (
    <Container>
      <h1>Profesores</h1>
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
        <Form.Group controlId="formApellidos">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese los apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese el email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {profesores.map((profesor) => (
            <tr key={profesor.id}>
              <td>{profesor.nombre}</td>
              <td>{profesor.apellidos}</td>
              <td>{profesor.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(profesor)}>
                  Editar
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(profesor.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProfesoresPage;
