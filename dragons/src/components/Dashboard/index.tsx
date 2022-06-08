//Componentes
import { Card } from '../Card'

//Icons
import { ListDragons } from '../ListDragons'
import { FaSignOutAlt } from 'react-icons/fa'
//Style
import { Container } from './styles'

//auth
import { useAuth } from '../../hooks/auth'

export function Dashboard() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Card />
      <ListDragons />
      <button onClick={signOut}>
        <span>Sair</span>
        <FaSignOutAlt size={20} />
      </button>
    </Container>
  )
}
