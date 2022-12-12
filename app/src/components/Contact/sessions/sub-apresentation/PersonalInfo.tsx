import { FC, useState } from 'react'
import { Perfil } from 'types'

type Props = {
  info: Perfil
}

const PersonalInfo: FC<Props> = ({
  info: { gender, location, name, nat, dob }
}) => {
  const [isHidden, setIsHidden] = useState(true)
  const { age, date } = dob
  const { city, country, postcode, state, street, coordinates } = location

  const handleContainer = () => setIsHidden((prev) => !prev)

  return (
    <section>
      <ul className={`${isHidden && 'max-h-14'} overflow-hidden py-2`}>
        <li>born at: {nat}</li>
        <li>age: {age} years old</li>
        <li>birth of date: {date}</li>
        <li>gender: {gender}</li>
        <li>address: {`${street.name} ${street.number}`}</li>
        <li>city: {city}</li>
        <li>state: {state}</li>
        <li>country: {country}</li>
        <li>postcode: {postcode}</li>
        <li>{`coordinates: ${coordinates?.latitude}, ${coordinates?.longitude}`}</li>
      </ul>
      <section className="mt-2 pt-3 border-t-2 border-gray-500">
        <button className="bg-blue-200 px-4 py-2" onClick={handleContainer}>
          See more
        </button>
      </section>
    </section>
  )
}

export default PersonalInfo
