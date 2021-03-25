import axios from 'axios';

axios.defaults.headers['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
const baseUrl = 'http://localhost:8080/veiculos';


const saveCar = (car) => {
  axios.post(`${baseUrl}`,car).then((response)=>{
    console.log(response)
  }).catch((error)=>console.log(error))
};

const findAll = async () => {
  const response = await axios(`${baseUrl}`);
  console.table(response.data);
  return response.data;
}

const deleteById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
}

const findById = async({id}) =>{
  const response = await axios(`${baseUrl}/${id}`);
  return response.data;
}

const update = async ({id}, car) => {
  const response = await axios.put(`${baseUrl}/${id}`, car);
  return response.data;
}



export { saveCar,findAll,deleteById ,findById,update};
