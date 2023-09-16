import axios from "axios";
import { ToastAlert } from "src/utils/alerts/sweetalerts";

export async function viaCEP(value) {
    const url = `https://viacep.com.br/ws/${value}/json/`;
    try {
        let resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        ToastAlert("error");
    }
}