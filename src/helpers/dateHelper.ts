class DateHelper {
    /**
     * Get age by birthdate
     * @param {Date} birthDate
     * @returns {number}
     */
    public getAgeByBirthDate = (birthDate: Date): number => {
        var ageDifMs = Date.now() - birthDate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

export const DateHelperInstance = new DateHelper();