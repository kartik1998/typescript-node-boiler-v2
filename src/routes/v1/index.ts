import express from 'express';
import UrlRoutes from './url';

const router = express.Router();

router.use('/url', UrlRoutes);

export default router;
