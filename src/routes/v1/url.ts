import express from 'express';
import * as UrlController from '@app/url/url.controller';

const router = express.Router();

router.post('/', UrlController.generateUrl);

export default router;
