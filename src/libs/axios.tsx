import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
	baseURL: "https://www.random.org", // Cambia esto por la URL base de tu API
	timeout: 5000, // Cambia esto por el tiempo de espera deseado en milisegundos
	headers: {
		"Content-Type": "application/json",
		// Agrega aquí cualquier encabezado adicional que necesites
	},
});
/*
// Opcionalmente, puedes agregar interceptores para manejar errores o modificar las solicitudes y respuestas
api.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// Aquí puedes modificar la configuración de la solicitud antes de enviarla
		return config;
	},
	(error) => {
		// Aquí puedes manejar errores de solicitud
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		// Aquí puedes modificar la respuesta antes de que se devuelva
		return response;
	},
	(error) => {
		// Aquí puedes manejar errores de respuesta
		return Promise.reject(error);
	}
); */

export default api;