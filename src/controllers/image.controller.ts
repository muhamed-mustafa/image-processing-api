import sharp from 'sharp';
import { Request, Response } from 'express';
import { fullPath, thumbPath } from '../paths';

const imageController = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;

  sharp(fullPath(String(filename)))
    .resize(Number(width), Number(height))
    .toFile(
      `./public/assets/images/thumb/${filename}-thumb(${width}x${height}).jpg`,
      (err) => {
        if (err) {
          console.log(err);
        }

        res
          .status(200)
          .sendFile(thumbPath(`${filename}-thumb(${width}x${height}).jpg`));
      }
    );
};

export { imageController };
