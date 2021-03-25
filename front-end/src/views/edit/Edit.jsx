import React, { useEffect, useState } from 'react'
import * as api from '../../api/api-service'
import { useHistory } from 'react-router-dom'
import M from "materialize-css";

const Edit = ({ match }) => {

  const { params: id } = match;
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [ano, setAno] = useState(2022);
  const [marca, setMarca] = useState('');
  const [descricao, setDescricao] = useState('');
  const [isVendido, setIsVendido] = useState('');

  useEffect(() => {
    findById(id);

  }, [])

  const findById = async () => {
    api.findById(id).then(response => {
      iniciarEstadoComponente(response);
    }).catch(erro => console.error(erro))

  }

  const iniciarEstadoComponente = ({ nome, marca, ano, descricao, isVendido, }) => {
    setNome(nome);
    setMarca(marca);
    setAno(ano)
    setDescricao(descricao)
    setIsVendido(isVendido);
    M.AutoInit();
  }

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
    target.value === 'true' ? setIsVendido(target.value) : setIsVendido(false)

  }

  const handleUpdate = async () => {
    await api.update(
      id,
      {
        nome,
        marca,
        ano,
        descricao,
        isVendido,
      }
    )
    showMessageCreated();
    returnSearch();
  }

  const showMessageCreated = () => {
    M.toast({ html: 'Informações alteradas com sucesso!', classes: 'rounded' });
  }
  const returnSearch = () => {
    history.push('/pesquisar');
  }

  return (
    <>
      <h2 className="center">Editar</h2>
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
          {marca &&
            <select onChange={handleChangeMarca} id="marca" >
              <option value={marca} defaultValue>{marca}</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Fiat">Fiat</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Volkswagen">Volkswagen</option>
            </select>
          }
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

          <select onChange={handleChangeVendido} id="isVendido" >
            <option value="{isVendido}">{isVendido ? 'Sim' : 'Não'}</option>
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>

          <label htmlFor="isVendido" className="active">
            Vendido
          </label>
        </div>
        <div className="input-field col s12 center ">
          <a className="waves-effect waves-light btn" onClick={handleUpdate} >Atualizar Veículo</a>
          <a className="waves-effect red btn" onClick={returnSearch}>Cancelar</a>
        </div>

      </div>



    </>

  )
}

export default Edit