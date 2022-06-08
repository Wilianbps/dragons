import { useDragons } from '../../hooks/useDragons'

import { Container } from './styles'

import { UpdateOrRemoveDragonModal } from '../../components/UpdateOrRemoveDragonModal'
import { useMemo, useState } from 'react'

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
  const [order, setOrder] = useState(1)
  const [colunmOrder, setColunmOrder] = useState('name')

  function handleGetDragon(dragon: dataDragon) {
    setGetDragon(dragon)
    setIsUpdateOrRemoveDragonModalOpen(true)
  }

  function handleCloseUpdateOrRemoveDragonModal() {
    setIsUpdateOrRemoveDragonModalOpen(false)
  }

  const sortedDragonsByName = dragons.sort(( a, b : any) => {
    return a?.name.localeCompare(b?.name)
  })

  console.log(sortedDragonsByName)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th onClick={e => {}}>Nome</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {sortedDragonsByName?.map(dragon => {
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
