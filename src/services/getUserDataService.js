import axios from "axios";

export const getUserDataService = async (userId) => {
    const url = `${import.meta.env.VITE_API_URL}/api/users/${userId}`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.log(error)
    }
  
}