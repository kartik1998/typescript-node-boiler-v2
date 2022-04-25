import out from '@lib/apiout';
import { ApplicationError } from '@lib/utils';

export async function generateUrl() {
  throw ApplicationError('generate url service not available', out.INTERNALERR);
}
