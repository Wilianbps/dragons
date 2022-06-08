import { FormEvent, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDragon } from 'react-icons/fa'
import { Container } from './styles'
import Modal from 'react-modal'
import { useDragons } from '../../hooks/useDragons'

Modal.setAppElement('#root')

interface AddDragonModalProps {
  newDragon: boolean
  onRequestClose: () => void
}

export function AddDragonModal({
  newDragon,
  onRequestClose
}: AddDragonModalProps) {
  const { addDragon } = useDragons()

  const [name, setName] = useState('')
  const [type, setType] = useState('')

  async function handleAddNewDragon(event: FormEvent) {
    event.preventDefault()

    await addDragon({
      name,
      type
    })

    setName('')
    setType('')
    onRequestClose()
  }

  return (
    <Modal
      isOpen={newDragon}
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
      <Container onSubmit={handleAddNewDragon}>
        <header>
          <FaDragon size={80} color="var(--orange)" />
          <h2>Cadastrar Dragão</h2>
        </header>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Tipo"
          value={type}
          onChange={event => setType(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
