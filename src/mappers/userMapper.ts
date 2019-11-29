import { UserDTO } from "../data/models/user";
import { User } from "../models/user";

export const MapUserDtoToUser = (userDto: UserDTO): User => ({
    accountId: userDto.accountId,
    balance: userDto.balance,
    birthDate: new Date(userDto.birthDate),
    firstName: userDto.firstName,
    lastName: userDto.lastName,
    niss: userDto.niss
})

export const MapUserToUserDto = (user: User): UserDTO => ({
    accountId: user.accountId,
    balance: user.balance,
    birthDate: user.birthDate.toISOString(),
    firstName: user.firstName,
    lastName: user.lastName,
    niss: user.niss
})