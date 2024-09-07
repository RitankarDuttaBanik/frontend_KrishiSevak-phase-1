import axios from 'axios';
const API_BASE_URL ='http://localhost:8000';

export const pingServer = async() =>{
    const response = await axios.get(`${API_BASE_URL}/ping`);
    return response.data;
};

export const predictPlantDisease = async(file,lang) =>{
    const formData = new FormData();
    FormData.append('file',file);
    return await axios.post(`${API_BASE_URL}/predict`, {
        params: {
          lang: lang
        },
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
}