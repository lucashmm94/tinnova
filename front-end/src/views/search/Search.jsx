import React, { useState, useEffect } from 'react';
import * as api from '../../api/api-service';
import { useHistory } from 'react-router-dom';
import M from "materialize-css";


export default function Search() {
  const history = useHistory();

  const [dataSearch, setDataSearch] = useState([]);

  const listCars = async () => {
    api.findAll().then((response)=>{
      setDataSearch(response)
    }).catch(erro=>console.error(erro))
  }

  useEffect(() => {
    listCars();
  }, [])


  const handleDelete = (id) => {
    api.deleteById(id).then(response =>{
      showMessageDelete();
      listCars();
    }).catch(erro=>console.error(erro))
  }

  const handleEdit = (id) => {
    history.push(`/editar/${id}`);
  }

  const moveRouterCadastro = () =>{
    history.push(`/cadastrar`);
  }

  const showMessageDelete = () => {
    M.toast({ html: 'Veículo removido', classes: 'rounded' });
  }

  return (
    <div className="container">
      <div>
        <h2 className="center">Pesquisar</h2>
        <button className="smallwaves-effect green btn right" onClick={moveRouterCadastro}>Novo</button>
      </div>
      <div className="row">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Marca</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ano</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {dataSearch && dataSearch.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.marca}</td>
                  <td>{item.nome}</td>
                  <td>{item.descricao}</td>
                  <td>{item.ano}</td>
                  <td>
                    <button className="smallwaves-effect red btn" onClick={() => handleDelete(item.id)} ><i className="fa fa-minus-circle"></i></button>
                    <button className="smallwaves-effect blue-light btn" onClick={() => handleEdit(item.id)} ><i className="fa fa-edit"></i></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
