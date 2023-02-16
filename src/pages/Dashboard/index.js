import { useContext } from 'react'
import {AuthContext} from '../../contexts/auth'

import Header from '../../components/Header'

export default function Dashboard(){
  const { logout } = useContext(AuthContext);

  async function handleLogout(){
    await logout();
  }

  return(
    <div>
      <Header/>

      <h1>Pagina Dashboard</h1>
      <button onClick={handleLogout}>Sair da conta</button>

      <div>
      <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="email@email.com"
            value={""}
            
          />

          <input 
            type="password" 
            placeholder="********"
            value={""}
            
          />
    </div>

    </div>

  )
}