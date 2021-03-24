import axios from 'axios';

const baseUrl = 'http://localhost:8080/veiculos';


const saveCar = (car) => {
  axios.post(`${baseUrl}`,car).then((response)=>{
    console.log(response)
  }).catch((error)=>console.log(error))
};

const getLsCars = async () => {
  const response = await axios(`${baseUrl}`);
  console.table(response.data);
  return response.data;
}

const deleteById = async (idVeiculo) => {
  const response = await axios.delete(`${baseUrl}`, { params: idVeiculo });
  return response.data;
}

const findById = async(idVeiculo) =>{
  const response = await axios.get(`${baseUrl}`, { params: idVeiculo });
  return response.data;
}



export { saveCar,getLsCars,deleteById ,findById};
