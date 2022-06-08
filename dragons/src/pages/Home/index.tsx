import { useState } from 'react'
import { Dashboard } from '../../components/Dashboard'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { AddDragonModal } from '../../components/AddDragonModal'


export function Home() {
  const [isAddNewDragonModalOpen, setIsAddNewDragonModalOpen] = useState(false)

  function handleOpenToAddNewDragonModal() {
    setIsAddNewDragonModalOpen(true)
  }

  function handleCloseNewDragonModal() {
    setIsAddNewDragonModalOpen(false)
  }

  return (
    <Container>
      <Header onOpenAddDragonModal={handleOpenToAddNewDragonModal} />
      <Dashboard />

      <AddDragonModal
        newDragon={isAddNewDragonModalOpen}
        onRequestClose={handleCloseNewDragonModal}
      />


    </Container>
  )
}
