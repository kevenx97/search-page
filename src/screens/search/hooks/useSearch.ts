import { Animals, getAnimals } from '@/utils/animals'
import { useEffect, useState } from 'react'

export function useSearch(value: string) {
  const [loading, setLoading] = useState(true)
  const [animals, setAnimals] = useState<Animals[]>([])
  const [searchValue, setSearchValue] = useState(value || '')
  const [animal, setAnimal] = useState<Animals | null>(null)

  useEffect(() => {
    if (searchValue.length) {
      setAnimal(null)
      setLoading(true)
      getAnimals(searchValue)
        .then((data) => setAnimals(data))
        .finally(() => setLoading(false))
    }
  }, [searchValue])

  return {
    loading,
    animal,
    animals,
    setAnimal,
    searchValue,
    setSearchValue,
  }
}
