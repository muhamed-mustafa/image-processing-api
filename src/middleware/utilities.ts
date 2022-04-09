import { NextFunction, Request, Response } from 'express';
import { thumbPath } from '../paths';
import fs from 'fs';

const validationImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename, width, height } = req.query;

  const existingImage = fs.existsSync(
    thumbPath(`${filename}-thumb(${width}x${height}).jpg`)
  );

  if (existingImage) {
    return res
      .status(200)
      .sendFile(thumbPath(`${filename}-thumb(${width}x${height}).jpg`));
  }

  next();
};

export { validationImage };
