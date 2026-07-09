import axios from "axios";

// -------------------------------------------------------- //

const FAKE_STORE_API_URL = "https://fakestoreapi.com/products";

export async function getAllProducts() {
  const response = await axios.get(FAKE_STORE_API_URL);

  return response.data;
}
