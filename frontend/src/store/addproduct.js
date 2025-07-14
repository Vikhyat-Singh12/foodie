import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAddProductStore = create((set,get) => ({
    products: [],
    getProducts: async () => {
        try {
            const response = await axios.get("/product");
            set({ products: response.data });
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to fetch products");
        }
    },
    addProduct: async (product) => {
        try {
            const response = await axios.post("/product", product);
            set((state) => ({
                products: [...state.products, response.data],
            }));
            toast.success("Product added successfully");
        } catch (error) {
            console.error("Error adding product:", error);
            toast.error("Failed to add product");
        }
    },
    setDiscount: async (productId, discount) => {
        try {
            const response = await axios.put("/product", { id: productId, discountedPrice: discount });
            set((state) => ({
                products: state.products.map((product) =>
                    product.id === productId ? { ...product, price: discount } : product
                ),
            }));
            toast.success("Discount applied successfully");
        } catch (error) {
            console.error("Error applying discount:", error);
            toast.error("Failed to apply discount");
        }
    }
}))
