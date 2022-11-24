import { useState, useEffect, useRef } from 'react';
import { Usuario, ReqRespUsers } from '../interfaces/reqResp';
import { reqRespApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const pagRef = useRef(1);

    const cargarUsuarios = async () => {
        const res = await reqRespApi.get<ReqRespUsers>('/users', {
            params: {
                page: pagRef.current
            }
        })
        if (res.data.data.length > 0) {
            setUsuarios(res.data.data)
        } else {
            pagRef.current--;
            alert('No hay mas usuarios')
        }
    }

    const pagSig = () => {
        pagRef.current++;
        cargarUsuarios();
    }

    const pagAnt = () => {
        if (pagRef.current > 1) {
            pagRef.current--;
            cargarUsuarios();
            return;
        }
        alert('No hay anteriores')

    }

    return ({
        usuarios,
        pagSig,
        pagAnt
    })
}