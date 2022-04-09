import { Request, Response, NextFunction } from 'express';

const missingFile = (req: Request, res: Response, next: NextFunction) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || !width || !height) {
    return res.status(400).send({ error: 'Input file is missing' });
  }

  next();
};

export { missingFile };
