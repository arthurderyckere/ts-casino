export class MinimumAge {
    private minimumAge: number;
    constructor(minimumAge: number) {
        this.minimumAge = minimumAge;
    };
    protected setMinimumAge = (age: number): void => {
        this.minimumAge = age > 0 ? age : 0;
    }
    /**
     * Returns minimum age
     * @returns {Number}
     */
    public getMinimumAge = (): Number => this.minimumAge;
}

