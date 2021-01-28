import { useQuery, gql } from '@apollo/client';


const GET_DOGS = gql`
query GetDogs {
  dogs {
    id 
    breed
  }
}
`
function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (loading) return <div>Loading</div>
  if (error) return <div>Whoooops</div>
  return (
    <select name="dog" onChange={onDogSelected} >
      {
        data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))
      }

    </select>
  )
}

export default Dogs;
