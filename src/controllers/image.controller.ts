import sharp from 'sharp';
import { Request, Response } from 'express';
import { fullPath, thumbPath } from '../paths';

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo> => {
  return sharp(fullPath(String(filename)))
    .resize(width, height)
    .toFile(
      `./public/assets/images/thumb/${filename}-thumb(${width}x${height}).jpg`
    );
};

const imageController = async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query;
  await resizeImage(String(filename), Number(width), Number(height));

  res
    .status(200)
    .sendFile(thumbPath(`${filename}-thumb(${width}x${height}).jpg`));
};

export { imageController };
