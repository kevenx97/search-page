import { AnimalModule, faker } from '@faker-js/faker'

export interface Animals {
  type: keyof AnimalModule
  id: number
  url: string
  title: string
  description: string
  image: string
}

const getImage = () => faker.image.animals(644, 362, true)
const getType = () => faker.animal.type() as keyof AnimalModule
const getUrl = () => faker.internet.url()
const getText = () => faker.lorem.sentences()
const getTitle = (type: keyof AnimalModule) => faker.animal[type]()

const data = [...new Array(100)].map((_, index) => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  }
})

const getAnimals = async (value: string): Promise<Animals[]> => {
  return new Promise((resolve) => {
    const type = value.toLowerCase()
    setTimeout(() => {
      const animals = data.filter((animal) => animal.type === type)
      resolve(animals)
    }, 1000)
  })
}

export { getAnimals }
