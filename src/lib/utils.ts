/* Application Error handling */
function ApplicationError(err: any, code: number, data?: any): ApplicationErrorDef {
  if (err instanceof ApplicationErrorDef) return err;
  const error = new ApplicationErrorDef(err, code, data);
  return error;
}

class ApplicationErrorDef extends Error {
  public code: number;
  public data?: any;

  constructor(err: any, code: number, data?: any) {
    if (err) {
      super(typeof err === 'string' ? err : err.message || 'undefined error');
    } else {
      super('undefined error');
    }
    this.code = code;
    this.data = data;
  }
}
/* Application Error handling */

async function handlePromise(promise: Promise<any>): Promise<[any, any]> {
  try {
    const result = await promise;
    return [null, result];
  } catch (err) {
    return [err, null];
  }
}

export { ApplicationErrorDef, ApplicationError, handlePromise };
