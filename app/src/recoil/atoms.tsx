import { atom } from 'recoil'
import { Perfil } from 'types'

export const currentPerfilState = atom<Perfil | null>({
  key: 'currentPerfilState', // unique ID (with respect to other atoms/selectors)
  default: null // default value (aka initial value)
})

export const followersState = atom<Perfil[] | []>({
  key: 'followersState', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
})
