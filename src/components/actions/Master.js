export const onErrorOccured = (err, stack) => {
        return {
                didSomethingWentWrong: true,
                errorDetails: err || "error"
        };
}