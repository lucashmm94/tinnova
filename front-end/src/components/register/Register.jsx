import React, { useState } from 'react';
import './index.css';
import * as api from '../../api/api-service'

export default function Register() {
  const [nome, setNome] = useState('');
  const [ano, setAno] = useState(2022);
  const [marca, setMarca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [isVendido, setIsVendido] = useState(false);


 

  const handleChangeNome = ({ target }) => {
    setNome(target.value);
  }
  const handleChangeMarca = ({ target }) => {
    setMarca(target.value);
  };
  const handleChangeAno = ({ target }) => {
    setAno(target.value);
  };
  const handleChangeDescricao = ({ target }) => {
    setDescricao(target.value);
  };
  const handleChangeVendido = ({ target }) => {
    target.value === 'true'? setIsVendido(target.value) : setIsVendido(false)
    
  }

  const handleSave = () =>{
    api.saveCar(
      {
        nome,
        marca,
        ano,
        descricao,
        isVendido,
      }
    )
  }


  return (
    <>
      <h2 className="center">Cadastro</h2>
      <div className="row">
        <div className="input-field col s4">
          <input
            onChange={handleChangeNome}
            id="nome"
            type="text"
            value={nome}
            autoFocus
          />
          <label htmlFor="nome" className="active">
            Nome
          </label>
        </div>
        <div className="input-field col s4">
          <select onChange={handleChangeMarca} className="browser-default" id="marca" >
            <option value="Audi" defaultValue>Audi</option>
            <option value="BMW">BMW 2</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Renault">Renault</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen">Volkswagen</option>
          </select>
          <label htmlFor="marca" className="active">
            Marca
          </label>
        </div>
        <div className="input-field col s3">
          <input
            onChange={handleChangeAno}
            id="ano"
            type="number"
            value={ano}
            min="1900"
            max="2022"
            step="1"
          />
          <label htmlFor="ano" className="active">
            Ano
          </label>
        </div>
        <div className="input-field col s8">
          <input
            onChange={handleChangeDescricao}
            id="descricao"
            type="text"
            value={descricao}

          />
          <label htmlFor="descricao" className="active">
            Descrição
          </label>
        </div>
        <div className="input-field col s4">
          <select onChange={handleChangeVendido} className="browser-default" id="isVendido" >
            <option value="false" defaultValue>Não</option>
            <option value="true">Sim</option>
          </select>
          <label htmlFor="isVendido" className="active">
            Vendido
          </label>
        </div>
        <div className="input-field col s12 center">
            <a className="waves-effect waves-light btn" onClick={handleSave} >Salvar Veículo</a>
            <a className="waves-effect red btn ">Cancelar</a>
        </div>

      </div>



    </>
  )
}
