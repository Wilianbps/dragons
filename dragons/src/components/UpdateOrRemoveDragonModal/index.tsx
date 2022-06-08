import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDragon } from 'react-icons/fa'
import { Container } from './styles'
import Modal from 'react-modal'
import { useDragons } from '../../hooks/useDragons'

Modal.setAppElement('#root')

interface UpdateOrRemoveDragonModalProps {
  onModalUpdateOrRemoveDragonOpen: boolean
  selectedDragon: { name: string; type: string; id: string; createdAt: string }
  onRequestClose: () => void
}

export function UpdateOrRemoveDragonModal({
  selectedDragon,
  onModalUpdateOrRemoveDragonOpen,
  onRequestClose
}: UpdateOrRemoveDragonModalProps) {
  const { deleteDragon, updateDragon } = useDragons()

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    setId(selectedDragon?.id)
    setName(selectedDragon?.name)
    setType(selectedDragon?.type)
  }, [selectedDragon])

  async function handleDeleteDragon() {
    await deleteDragon(id)
      .then()
      .catch(error => alert(error))
    setId('')
    setName('')
    setType('')
    onRequestClose()
  }

  async function handleUpdateDragon() {
    const data = { name, type }
    await updateDragon(id, data)
      .then(() => alert('Alteração feita com sucesso'))
      .catch(error => alert(error))
    setId('')
    setName('')
    setType('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={onModalUpdateOrRemoveDragonOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <AiOutlineClose size={30} color="var(--orange)" />
      </button>
      <Container>
        <header>
          <FaDragon size={80} color="var(--orange)" />
          <h2>Alterar Dragão</h2>
        </header>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          name="type"
          placeholder="Tipo"
          value={type}
          onChange={event => setType(event.target.value)}
        />
        <div
          className="buttons
        "
        >
          <button onClick={handleDeleteDragon}>Remover</button>
          <button onClick={handleUpdateDragon}>Alterar</button>
        </div>
      </Container>
    </Modal>
  )
}
