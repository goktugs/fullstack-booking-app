export const createError = (status, message) => {
  const err = new Error();
  err.status = 401;
  err.message = 'wtf not found';
  return err;
};
