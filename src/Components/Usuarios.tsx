
import { Usuario } from '../interfaces/reqResp';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, pagAnt, pagSig } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        const { first_name, last_name, email, avatar } = usuario;
        return (
            <tr className='text-center' key={usuario.id.toString()}>
                <td> <img style={{ width: 50, borderRadius: 100 }} src={avatar} alt={first_name} /></td>
                <td> {first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h1 className="m-3">Usuarios</h1>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={pagAnt}> <strong>&lt;-</strong></button>
                &nbsp;
                <button className='btn btn-primary' onClick={pagSig}> <strong>-&gt;</strong></button>
            </div>
        </>
    )
}
