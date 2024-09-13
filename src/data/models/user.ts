import { GenderEnum } from '../enums/gender'

export interface UserModel {
    id?: string
    email?: string
    name?: string
    status?: string
    gender?: GenderEnum
}
