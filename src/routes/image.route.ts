import express from 'express';
import { missingFile } from '../middleware/missingFile.middleware';
import { imageController } from '../controllers/image.controller';

const router = express.Router();

router.get('/images', missingFile, imageController);

export { router as imageRoute };
