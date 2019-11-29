import { User } from "../models/user";
import * as userData from "../data/users.json";
import { UserDTO } from "../data/models/user";
import { MapUserDtoToUser } from "../mappers/userMapper";
class UserService {
    private static instance: UserService;

    public getGambler = (accountId: string): User => {
        var userDto: UserDTO | undefined = userData.users.find(x => x.accountId === accountId);
        if (!userDto) {
            throw new Error(`User not found for id: ${accountId}`);
        }
        return MapUserDtoToUser(userDto);
    }
    /**
     * Start Bonus = 20
     * @param {number} startBalance
     * @return {User}
     */
    public createGambler = (startBalance: number, birthDate: Date, firstName: string, lastName: string, niss: string): User => {
        const userDto: UserDTO = {
            accountId: `00${userData.users.length + 1}`,
            balance: startBalance + 20,
            birthDate: birthDate.toISOString(),
            firstName: firstName,
            lastName: lastName,
            niss: niss
        }
        userData.users.push(userDto);
        return MapUserDtoToUser(userDto);
    }
    /**
     * @return {Number} New balance
     */
    public addMoney = (accountId: string, amount: number): number => {
        var userDto: UserDTO | undefined = userData.users.find(x => x.accountId === accountId);
        if (!userDto) {
            throw new Error(`User not found for id: ${accountId}`);
        }
        userDto.balance += amount;
        return userDto.balance;
    }
    public getAverageTimeBetweenBets = (accountId: string): Number => {
        return 10;
    }
    static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }
}

export const UserServiceInstance = UserService.getInstance();
