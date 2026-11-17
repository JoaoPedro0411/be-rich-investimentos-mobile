import axios from "axios";

const server = process.env.EXPO_PUBLIC_API_URL || "http://localhost:6969";

export async function LocalLogin(data) {
  try {
    const response = await axios.post(`${server}/auth/login`, { ...data });
    return response.data;
  } catch (error) {
    console.error("Erro na requisição de login:", error);
    throw error;
  }
}

export async function Register(data) {
  try {
    const response = await axios.post(`${server}/users/register`, { ...data });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
}

export async function findUser(userId) {
  try {
    const response = await axios.get(`${server}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
    throw error;
  }
}
