import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext
} from 'react'

import api from '../services/api'

interface DragonsProviderProps {
  children: ReactNode
}

interface Dragon {
  id: string
  name: string
  type: string
  createdAt: string
}

type DragonInput = Omit<Dragon, 'id' | 'createdAt'>

interface DragonContextData {
  dragons: Dragon[]
  addDragon: (dragonInput: DragonInput) => Promise<void>
  deleteDragon: (id: string) => Promise<void>
  updateDragon: (id: string, updateDragon: any) => Promise<void>
}

const DragonsContext = createContext<DragonContextData>({} as DragonContextData)

export function DragonsProvider({ children }: DragonsProviderProps) {
  const [dragons, setDragons] = useState<Dragon[]>([])

  async function loadDragons() {
    await api
      .get('/dragon')
      .then(response => setDragons(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    loadDragons()
  }, [])

  async function addDragon(dragonInput: DragonInput) {
    const reponse = await api.post('/api/v1/dragon', {
      ...dragonInput,
      createdAt: new Date()
    })

    const dragon = await reponse.data

    setDragons(oldDragons => [...oldDragons, dragon])
  }

  async function deleteDragon(id: string) {
    const filteredDragons = dragons.filter(dragon => dragon.id !== id)

    const res = window.confirm('Deseja mesmo remover da lista?')

    if (res === true) {
      await api.delete(`/api/v1/dragon/${id}`)
      setDragons(filteredDragons)
    }
  }

  const updateDragon = async (id: string, updateDragon: any) => {
    const filteredDragons = dragons.map(dragon =>
      dragon.id === id ? updateDragon : dragon
    )
    setDragons(filteredDragons)
    await api.put(`/api/v1/dragon/${id}`, updateDragon)
  }

  return (
    <DragonsContext.Provider
      value={{
        dragons,
        addDragon,
        deleteDragon,
        updateDragon
      }}
    >
      {children}
    </DragonsContext.Provider>
  )
}

export function useDragons() {
  const context = useContext(DragonsContext)

  return context
}
