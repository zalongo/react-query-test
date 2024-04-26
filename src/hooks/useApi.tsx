import api from "../libs/axios";

export const useApi = () => {
	const getError = (err: any) => {
		    // console.log(err.toJSON());
		switch (true) {
			case err.response:
				console.error("Error en la respuesta", err.response.data);
				return err.response.data;
				break;
			case err.request:
				console.error("Error en la petición", err.response.data);
				return err.request;
				break;
			default:
				console.error("Error", err.message);
				return err.message;
				break;
		}
	};

	const post = async (url: string, data: object): Promise<object> => {
		const resp = await api
			.post(url, data)
			.then((res) => res.data)
			.catch((err) => {
				throw new Error(getError(err));
			});
		return resp;
	};
	const get = async (url: string): Promise<object> => {
		const resp = await api
			.get(url)
			.then((res) => res.data)
			.catch((err) => {
				throw new Error(getError(err));
			});
		return resp;
	};
	const put = async (url: string, data: object): Promise<object> => {
		const resp = await api
			.put(url, data)
			.then((res) => res.data)
			.catch((err) => {
				throw new Error(getError(err));
			});
		return resp;
	};
	const del = async (url: string): Promise<object> => {
		const resp = await api
			.delete(url)
			.then((res) => res.data)
			.catch((err) => {
				throw new Error(getError(err));
			});
		return resp;
	};
	return { post, get, put, del };
};
