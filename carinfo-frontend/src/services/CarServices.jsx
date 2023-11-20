import axios from 'axios';

// SPRING BOOT URL
const API_URL = 'http://localhost:8080';

const CarService = {
  getAllCars: async () => {
    try {
      const response = await axios.get(`${API_URL}/getAllCars`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching all cars:', error);
    }
  },

  getCarByName: async (name) => {
    try {
      const response = await axios.get(`${API_URL}/getCar/${name}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching car by name ${name}:`, error);
    }
  },

  getCarsByModel: async (model) => {
    try {
      const response = await axios.get(`${API_URL}/getModel/${model}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching cars by model ${model}:`, error);
    }
  },

  getCarsByMake: async (make) => {
    try {
      const response = await axios.get(`${API_URL}/getMake/${make}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching cars by make ${make}:`, error);
    }
  },
};

export default CarService;
