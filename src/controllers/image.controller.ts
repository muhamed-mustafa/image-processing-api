import sharp from 'sharp';
import fs from 'fs';
import { Request, Response } from 'express';
import { fullPath, thumbPath } from '../paths';

const imageController = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;

  const existingImage = fs.existsSync(thumbPath(String(filename)));

  if (existingImage) {
    res.status(200).sendFile(thumbPath(String(filename)));
  }

  sharp(fullPath(String(filename)))
    .resize(Number(width), Number(height))
    .toFormat('jpg')
    .toFile(
      `./public/assets/images/thumb/${filename}-thumb(${width}x${height}).jpg`,
      (err) => {
        if (err) {
          res.send(err);
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(
          `<img src="../../../assets/images/thumb/${filename}-thumb(${width}x${height}).jpg" />`
        );
      }
    );
};

export { imageController };
