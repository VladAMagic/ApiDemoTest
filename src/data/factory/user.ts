import { faker } from '@faker-js/faker'
import { getRandomFromEnum } from '../../utils/utils'
import { UserModel } from '../models/user'
import { StatusEnum } from '../enums/status'
import { GenderEnum } from '../enums/gender'
class UserFactory {
    private static defaultUser(): UserModel {
        return {
            email:
                faker.string.alphanumeric(5) +
                faker.internet.email({
                    allowSpecialCharacters: false,
                }),
            name: faker.person.fullName(),
            status: getRandomFromEnum(StatusEnum),
            gender: getRandomFromEnum(GenderEnum),
        }
    }

    static default(overwrites: Partial<UserModel> = {}): UserModel {
        return {
            ...UserFactory.defaultUser(),
            ...overwrites,
        }
    }

    static defaultList(numberOfUsers: number): UserModel[] {
        let listOfUsers: UserModel[] = []
        for (let tranCount = 0; tranCount < numberOfUsers; tranCount++) {
            listOfUsers.push(UserFactory.default())
        }
        return listOfUsers
    }
}

export { UserFactory }
