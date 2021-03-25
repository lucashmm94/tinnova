import React, { useEffect, useState } from 'react'
import * as api from '../../api/api-service'

const Report = () => {


  const [dadosVeiculos, setDadosVeiculos] = useState([]);

  useEffect(() => {
    findAll();
  }, [])


  const findAll = () => {
    api.findAll().then(response => {
      setDadosVeiculos(response);
    })
  }

  function isIntervalo(comeco, fim) {
    return (veiculo) => {
      var resultado = false;
      if (veiculo.ano) {
        resultado = veiculo.ano >= comeco && veiculo.ano <= fim
      }
      return resultado;
    }
  }
  const diferencaDias = (data1, data2) => {
    const umDia = 1000 * 60 * 60 * 24;

    var date1Ms = data1.getTime();
    var date2Ms = data2.getTime();

    var diferencaMilisegundos = date2Ms - date1Ms;

    return Math.round(diferencaMilisegundos / umDia);
  }

  const isMenosUmaSemana = (veiculo) => {
    var result = false;
    if (veiculo.criado) {
      if (diferencaDias(new Date(veiculo.criado), new Date()) <= 7)
        result = true;
    }
    return result;
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col s3">
          Veículos não vendidos: {dadosVeiculos &&
            dadosVeiculos.filter((car => !car.isVendido)).reduce((accumulator, current) => {
              return ++accumulator;
            }, 0)
          }
        </div>
        <div className="col s3">
          <ul>
            {dadosVeiculos &&
              <li>Ford: {dadosVeiculos.filter((car => car.marca === 'Ford')).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Fiat: {dadosVeiculos.filter((car => car.marca === 'Fiat')).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Honda: {dadosVeiculos.filter((car => car.marca === 'Honda')).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Volkswagen: {dadosVeiculos.filter((car => car.marca === 'Volkswagen')).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
          </ul>
        </div>
        <div className="col s3">
          <ul>
            {dadosVeiculos &&
              <li>Decáda 1990:{dadosVeiculos.filter(isIntervalo(1990, 1999)).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Decáda 2000:{dadosVeiculos.filter((car => 2010 > car.ano > 1999)).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Decáda 2010:{dadosVeiculos.filter((car => 2020 > car.ano > 2009)).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
            {dadosVeiculos &&
              <li>Decáda 2020:{dadosVeiculos.filter(isIntervalo(2020, 2029)).reduce((accumulator, current) => {
                return ++accumulator;
              }, 0) + ' veículos'
              }</li>
            }
          </ul>
        </div>
        <div className="col s3">
          Carros registrados na última semana: {dadosVeiculos &&
            dadosVeiculos.filter(veiculo =>isMenosUmaSemana(veiculo)).reduce((accumulator, current) => {
              return ++accumulator;
            }, 0)
          }
        </div>
      </div>
    </div>
  )
}

export default Report