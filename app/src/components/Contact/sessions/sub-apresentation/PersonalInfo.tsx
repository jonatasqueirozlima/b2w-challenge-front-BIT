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
        <li className="li-before-content">born at: {nat}</li>
        <li className="li-before-content">age: {age} years old</li>
        <li className="li-before-content">birth of date: {date}</li>
        <li className="li-before-content">gender: {gender}</li>
        <li className="li-before-content">
          address: {`${street.name} ${street.number}`}
        </li>
        <li className="li-before-content">city: {city}</li>
        <li className="li-before-content">state: {state}</li>
        <li className="li-before-content">country: {country}</li>
        <li className="li-before-content">postcode: {postcode}</li>
        <li className="li-before-content">{`coordinates: ${coordinates?.latitude}, ${coordinates?.longitude}`}</li>
      </ul>
      <section className="mt-2 pt-3 border-t-2 border-gray-500">
        <button className="bg-gray-200 px-4 py-2" onClick={handleContainer}>
          See more
        </button>
      </section>
    </section>
  )
}

export default PersonalInfo
