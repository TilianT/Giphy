import axios from "axios";
import { KEY, API } from "./constant";

export const getTrending = () => {
	return axios.get(`${API}/trending?api_key=${KEY}&limit=25&rating=G`)
		.then(res => res.data)
		.catch( error => console.log(error))
};
