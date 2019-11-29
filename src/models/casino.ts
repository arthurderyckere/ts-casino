import { MinimumAge } from "./minimumAge";

export class Casino extends MinimumAge {
    constructor() {
        super(22);
    }
    /**
     * Check if minimum requirements to allow casino access are met.
     * @param {number} age 
     * @param {string} niss
     * @returns {boolean}
     */
    public gamblerHasAccess = (age: number, niss: string): boolean => {
        return age > this.getMinimumAge() && !this.isGamblingAddict(niss);
    }
    /**
     * Check if person is considered 'gambling addict'
     * @param {string} niss
     * @returns {boolean}
     */
    protected isGamblingAddict = (niss: string): boolean => {
        return niss.startsWith("1");
    }
}