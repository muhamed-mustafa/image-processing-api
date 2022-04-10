import { Request, Response, NextFunction } from 'express';
import fs, { promises as fsPromises } from 'fs';

const thumbDirectory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const thumbDirExist = fs.existsSync('./public/assets/images/thumb');

  if (!thumbDirExist) {
    await fsPromises.mkdir('./public/assets/images/thumb');
  }

  next();
};

export { thumbDirectory };
