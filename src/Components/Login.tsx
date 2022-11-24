import React, { useReducer, useEffect } from 'react'
interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}
const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}
type LoginPayload = {
  username: string,
  nombre: string
}
type AuthAction =
  | { type: "logout" }
  | { type: "login", payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        nombre: ''
      }

    case 'login':
      const { username, nombre } = action.payload;
      return {
        validando: false,
        token: 'ADC666',
        username,
        nombre
      }

      break;

    default:
      return state;
  }

}

export const Login = () => {

  const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500)
  }, []);

  const login = () => {
    dispatch({
      type: 'login', payload: { username: 'Lui', nombre: 'Luisz' }
    })
  }
  const logout = () => {
    dispatch({
      type: 'logout'
    })
  }

  if (validando) {
    return (
      <>
        <div className='alert alert-info'>
          Validando...
        </div>
      </>
    )
  }


  return (
    <div>

      {
        (token) ?
          <div className='alert alert-success'>
            Autenticado como {nombre}
          </div> :
          <div className='alert alert-danger'>
            No autenticado
          </div>
      }







      <div className='card text-center p-3'>
        <h3>Login</h3>
        <hr />
        <div className='d-grid gap-2 col-3 mx-auto'>
          {
            (token) ?
              <button className='btn btn-danger' onClick={logout}> Logout </button> :
              <button className='btn btn-small btn-primary' onClick={login}> Login </button>
          }

        </div>
      </div>



    </div>
  )
}
