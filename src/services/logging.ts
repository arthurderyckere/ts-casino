class LoggingService {
    private static instance: LoggingService;
    /**
     * Log error to console or logging server
     * @param {Error} error
     */
    public logError = (error: Error): void => {
        console.log(error.message);
    }
    static getInstance() {
        if (!LoggingService.instance) {
            LoggingService.instance = new LoggingService();
        }
        return LoggingService.instance;
    }
}

export const LoggingServiceInstance = LoggingService.getInstance();
