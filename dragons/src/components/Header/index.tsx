import { Container, Content } from './styles'

//Icons
import { GiSpikedDragonHead } from 'react-icons/gi'

interface HeaderProps {
  onOpenAddDragonModal: () => void
}

export function Header({ onOpenAddDragonModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logo">
          <GiSpikedDragonHead size={60} color="var(--orange)" />
          <span>wb dragon</span>
        </div>
        <button type="button" onClick={onOpenAddDragonModal}>
          Adicionar Dragão
        </button>
      </Content>
    </Container>
  )
}
