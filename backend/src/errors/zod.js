function parseZodErrors({ errors }) {
    const parsedErrors = {};
    for (let i = 0; i < errors.length; i++) {
      parsedErrors[errors[i].path[0]] = errors[i].message;
    }
    return parsedErrors;
}

module.exports = parseZodErrors;