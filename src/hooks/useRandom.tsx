import { useQuery } from "@tanstack/react-query";
import { useApi } from "./useApi";

const getRandomNumberFromApi = async (): Promise<number> => {
	const { get } = useApi();
	const resp = await get("/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new").catch((err) => {
		throw new Error(err);
	});
	return +resp;
};

export const useRandom = () => {
	const query = useQuery({
		queryKey: ["randomNumber"],
		queryFn: getRandomNumberFromApi,
	});

	return query;
};
