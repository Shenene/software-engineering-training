import { getAllProducts } from "../services/productServices.js";

// ---------------------------------------------------------- //
export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    // 500 - internal server error
    res.status(500).json({
      error: "Failed to fetch products",
    });
  }
}
