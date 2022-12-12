type Registered = {
  age: number
  date: string
}

type DateOfBirth = {
  age: number
  date: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}

type Name = {
  first: string
  last: string
  title: string
}

type Street = {
  name: string
  number: number
}

type Coordinate = {
  latitude: string
  longitude: string
}

type Location = {
  city: string
  coordinates?: Coordinate
  country: string
  postcode: number
  state: string
  street: Street
}

export type Perfil = {
  dob: DateOfBirth
  cell: string
  gender: string
  email: string
  phone: string
  id?: any
  name: Name
  location: Location
  login?: any
  nat: string
  picture: Picture
  registered: Registered
}
