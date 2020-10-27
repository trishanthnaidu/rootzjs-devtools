export const windowErrorHandler = (callback, ...args) => {
      window.onerror = (
            message,
            file,
            line,
            column,
            errorObject
      ) => {
            let stack = errorObject ? errorObject.stack : null;
            column = column || (window.event && window.event.errorCharacter);

            //trying to get stack from IE
            if (!stack) {
                  stack = [];
                  let f = args.callee.caller;
                  while (f) {
                        stack.push(f.name);
                        f = f.caller;
                  }
                  errorObject['stack'] = stack;
            }
            callback({
                  message: message,
                  file: file,
                  line: line,
                  column: column,
                  errorStack: stack,
            });
      }
}