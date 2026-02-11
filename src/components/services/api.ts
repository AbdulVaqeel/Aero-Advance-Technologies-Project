import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://aatc-backend.vercel.app/api/", // FastAPI base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// POST method for contact form
export const submitContactForm = async (formData: {
  full_name: string;
  email: string;
  phone_number?: string;
  message: string;
}) => {
  try {
    const response = await api.post("/contactform/", formData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || "Failed to submit form");
  }
};

export default api;