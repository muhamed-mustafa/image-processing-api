import { Request, Response, NextFunction } from 'express';

const missingFile = (req: Request, res: Response, next: NextFunction) => {
  const { filename, width, height } = req.query;

  if (!filename || !width || !height) {
    return res.status(400).send({ error: 'Input file is missing' });
  }

  next();
};

export { missingFile };
