import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { fullPath } from '../paths';

const notFoundImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const existingImage = fs.existsSync(fullPath(String(req.query.filename)));
  if (!existingImage) {
    res
      .status(404)
      .send({ status: 404, message: 'Image Not Found', success: false });
  }

  next();
};

export { notFoundImage };
