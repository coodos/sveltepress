import { default as Axios } from "axios";
import { BASE_URL } from "$lib/config/config";

export const axios = Axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});
