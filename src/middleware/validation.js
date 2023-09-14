const methods = ["body", "params", "query"];

const validation = (schema) => {
  return (req, res, next) => {
    const validationArr = [];

    methods.forEach((key) => {
      if (schema[key]) {
        const validationResult = schema[key].validate(req[key], {
          abortEarly: false,
        });
        if (validationResult.error) {
          validationArr.push(validationResult);
        }
      }
    });

    if (validationArr.length > 0) {
      return res.json({ message: "validation err", validationArr });
    } else {
      return next();
    }
  };
};

export default validation;
