import { Casino } from "./casino";
import { UserServiceInstance } from "../services/user";
import { DateHelperInstance } from "../helpers/dateHelper";
import { LoggingServiceInstance } from "../services/logging";
import { User } from "./user";

export class NapoleonGames extends Casino {
    constructor() {
        super();
    }
    /**
     * Check if Napoleon Games can allow entry for gambler
     * @param {string} gamblerId
     * @returns {boolean}
     */
    public isAllowedEntry = (gamblerId: string): boolean => {
        try {
            var gambler = UserServiceInstance.getGambler(gamblerId);
            if (gambler && gambler != null) {
                return this.gamblerHasAccess(DateHelperInstance.getAgeByBirthDate(gambler.birthDate), gambler.niss);
            }
        } catch (e) {
            LoggingServiceInstance.logError(e);
        }
        return false;
    }
    /**
     * Get balance for a gambler
     * @param {string} gamblerId
     * @returns {number}
     */
    public getBalanceByAccountId = (gamblerId: string): number => {
        try {
            var gambler = UserServiceInstance.getGambler(gamblerId);
            if (gambler && gambler != null) {
                return gambler.balance;
            }
        } catch (e) {
            LoggingServiceInstance.logError(e);
        }
        return NaN;
    }
    /** Returns boolean wheter the gambler is considered 'frequent' gambler
     * @param {string} gamblerId
     * @returns {boolean}
     */
    public isFrequentPlayer = (gamblerId: string): boolean => {
        try {
            var atbb = UserServiceInstance.getAverageTimeBetweenBets(gamblerId);
            return atbb < 5;

        } catch (e) {
            return true;
        }
    }

    /**
     * Play the casino game, you can win or lose money
     * @param {string} gamblerId
     * @param {number} amount
     * @returns {number}
     */
    public gamble = (gamblerId: string, amount: number): number => {
        try {
            var gamble: number = 0;
            if (!this.isAllowedEntry(gamblerId)) {
                throw new Error("User not allowed in casino");
            }
            var gambler = UserServiceInstance.getGambler(gamblerId);
            if (amount > gambler.balance) {
                throw new Error("Can't gamble money you don't have.");
            }
            this.addMoneyToGamblerAccount(gamblerId, amount * -1);
            return this.addMoneyToGamblerAccount(gamblerId, amount * (Math.random() * 2));
        } catch (e) {
            LoggingServiceInstance.logError(e);
            return amount;
        }
    }
    public addMoneyToGamblerAccount = (gamblerId: string, amount: number): number => {
        try {
            if (!this.isAllowedEntry(gamblerId)) {
                throw new Error("User not allowed in casino");
            }
            return UserServiceInstance.addMoney(gamblerId, amount);
        } catch (e) {
            LoggingServiceInstance.logError(e);
        }
        return NaN;
    }
    public register = (firstName: string, lastName: string, niss: string, birthDate: Date): User | undefined => {
        try {
            if (!this.gamblerHasAccess(DateHelperInstance.getAgeByBirthDate(birthDate), niss)) {
                throw new Error("Access denied");
            }
            return UserServiceInstance.createGambler(0, birthDate, firstName, lastName, niss);
        } catch (e) {
            LoggingServiceInstance.logError(e);
        }
    }
}