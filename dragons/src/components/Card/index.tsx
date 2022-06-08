import { Container } from './styles'

import { useDragons } from '../../hooks/useDragons'

import { GiSeaDragon } from 'react-icons/gi'

export function Card() {
  const { dragons } = useDragons()

  return (
    <Container>
      <div>
        <header>
          <p>Quantidade</p>
          <GiSeaDragon size={50} color="white" />
        </header>
        <strong>{dragons.length} dragons</strong>
      </div>
    </Container>
  )
}
