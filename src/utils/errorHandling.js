<<<<<<< HEAD
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return next(new Error(err, { cause: 500 }));
    });
  };
};
=======
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      return next(new Error(err, { cause: 500 }));
    });
  };
};
>>>>>>> 77642607d29753be27e090e9057fa53c784eddb1
