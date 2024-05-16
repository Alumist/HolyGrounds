//errors middleware, if the route is not found, then return a 404 error message and status code 404 and if there is an error, then return a 500 error message and status code 500

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
//if 200 return status/ 500 else return status code
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //check for mongoose bad object id error
  //check for the kind, which i want it to be ObjectId
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = 'Resource not found';
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.Node_ENV === 'production' ? '🥞' : err.stack,
  });
};

export { notFound, errorHandler };
