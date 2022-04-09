import express from 'express';
import { missingFile } from '../middleware/missingFile.middleware';
import { validationImage } from '../middleware/utilities';
import { notFoundImage } from '../middleware/not-found-error';
import { imageController } from '../controllers/image.controller';
import { thumbDirectory } from '../middleware/thumb.middleware';

const router = express.Router();

router.get(
  '/images',
  [missingFile, validationImage, notFoundImage, thumbDirectory],
  imageController
);

export { router as imageRoute };
