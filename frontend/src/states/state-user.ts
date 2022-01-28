import { atom } from 'recoil'
import { User } from '~/core/entities/user'

export const stateUser = atom<User | null>({
  key: 'state-user',
  default: null
})
