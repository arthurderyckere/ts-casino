import { NapoleonGames } from "./models/napoleonGames";
import { User } from "./models/user";

function init() {
    console.log("=====started=====");
    var localCasino = new NapoleonGames();
    var user: User | undefined = localCasino.register("Michael", "Malin", "223.45-09.1993", new Date(1990, 5, 9));
    if (user) {
        console.log("Successfully registered");
        console.log("Allowed in: " + localCasino.isAllowedEntry(user.accountId));
        console.log("Add Money: " + localCasino.addMoneyToGamblerAccount(user.accountId, 10));
        console.log("Current balance: " + localCasino.getBalanceByAccountId(user.accountId));
        console.log("Gambling...")
        localCasino.gamble(user.accountId, user.balance / 2);
        console.log("Current balance: " + localCasino.getBalanceByAccountId(user.accountId));
    }
}
init();