import axios from 'axios';

const Api = axios.create({
	baseURL: 'http://localhost:3030/api',
});

export const saveTodo = todo => Api.post('/todos', todo);

export const loadTodos = () => Api.get('/todos');
