import { Request, Response } from 'express';
import out from '@lib/apiout';
import * as urlService from './url.service';
import { handlePromise as $ } from '@lib/utils';

export async function generateUrl(req: Request, res: Response) {
  const [err, result] = await $(urlService.generateUrl());
  return out.handle(err, res, result);
}
