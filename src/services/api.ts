// // frontend/src/services/api.ts
// import axios from "axios";

// // Create Axios instance
// const api = axios.create({
//   baseURL: "http://localhost:8000/contactform", // FastAPI endpoint
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;

import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000", // FastAPI base URL
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
    const response = await api.post("/contactform", formData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.detail || "Failed to submit form");
  }
};

export default api;