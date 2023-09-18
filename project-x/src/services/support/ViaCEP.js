import axios from "axios";

export async function viaCEP(value) {
  const url = `https://viacep.com.br/ws/${value}/json/`;
  try {
    let resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    console.error(e);
  }
}
