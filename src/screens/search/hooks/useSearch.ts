import { Animals, getAnimals } from '@/utils/animals'
import { useEffect, useRef, useState } from 'react'

export function useSearch(value: string) {
  const [loading, setLoading] = useState(true)
  const [animals, setAnimals] = useState<Animals[]>([])
  const [searchValue, setSearchValue] = useState(value || '')
  const [animal, setAnimal] = useState<Animals | null>(null)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (searchValue.length) {
      debounceTimeout.current = setTimeout(() => {
        setAnimal(null)
          setLoading(true)
          getAnimals(searchValue)
            .then((data) => setAnimals(data))
            .finally(() => setLoading(false))
      }, 600)
    }
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    }
  }, [searchValue])

  return {
    loading,
    animal,
    animals,
    setAnimal,
    searchValue,
    setSearchValue
  }
}