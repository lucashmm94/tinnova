import React, { useEffect, useState } from 'react'
import * as api from '../../api/api-service'

export default function Edit(matches) {
    const [dados, setDados] = useState({});
    let id = matches.params;
    useEffect(() => {
        const getData = async () => {
            let dados = await api.findById(id);
            setDados(dados);
        };
        getData();
    }, []);


    return (
        <>
            <h2>edit</h2>
            <ul>
                {dados && dados}
            </ul>
        </>

    )
}