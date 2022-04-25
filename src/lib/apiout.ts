import StatusCodes from './status-codes';
import { Response } from 'express';
import { ApplicationErrorDef } from './utils';

class Apiout extends StatusCodes {
  public success(res: Response, statusCode?: number, data?: any): Response {
    const out: any = {
      status: 'success',
      statusCode: statusCode || this.SUCCESS,
      data: data || {},
    };
    return res.status(statusCode || this.SUCCESS).json(out);
  }

  public error(res: Response, statusCode?: number, error?: string, data?: any): Response {
    const out: any = {
      status: 'failure',
      statusCode: statusCode || this.INTERNALERR,
      error: error || 'internal server error',
      data: data || {},
    };
    return res.status(statusCode || this.INTERNALERR).json(out);
  }

  public handle(err: any, res: Response, data?: any, code?: number) {
    if (err) {
      if (err instanceof ApplicationErrorDef) {
        return this.error(res, err.code, err.message, err.data);
      } else {
        let errMessage;
        if (typeof err === 'string') errMessage = err;
        else errMessage = err.message || 'undefined error';
        return this.error(res, code || this.INTERNALERR, errMessage, data);
      }
    } else {
      return this.success(res, code, data);
    }
  }
}

const out = new Apiout();

export default out;
