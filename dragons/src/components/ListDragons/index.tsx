import { useDragons } from '../../hooks/useDragons'

import { Container } from './styles'

import { UpdateOrRemoveDragonModal } from '../../components/UpdateOrRemoveDragonModal'
import { useState } from 'react'

interface dataDragon {
  id: string
  name: string
  type: string
  createdAt: string
}

export function ListDragons() {
  const { dragons } = useDragons()

  const [isUpdateOrRemoveDragonModalOpen, setIsUpdateOrRemoveDragonModalOpen] =
    useState(false)

  const [getDragon, setGetDragon] = useState<dataDragon>({} as dataDragon)

  function handleGetDragon(dragon: dataDragon) {
    setGetDragon(dragon)
    setIsUpdateOrRemoveDragonModalOpen(true)
  }

  function handleCloseUpdateOrRemoveDragonModal() {
    setIsUpdateOrRemoveDragonModalOpen(false)
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {dragons?.map(dragon => {
            return (
              <tr key={dragon?.id} onClick={() => handleGetDragon(dragon)}>
                <td>{dragon?.name}</td>
                <td>{dragon?.type}</td>
                <td>{new Date(dragon?.createdAt).toLocaleDateString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <UpdateOrRemoveDragonModal
        selectedDragon={getDragon}
        onModalUpdateOrRemoveDragonOpen={isUpdateOrRemoveDragonModalOpen}
        onRequestClose={handleCloseUpdateOrRemoveDragonModal}
      />
    </Container>
  )
}
