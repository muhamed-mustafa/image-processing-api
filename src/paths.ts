import path from 'path';

export const fullPath = (filename: string) => {
  return path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
    'full',
    `${filename}.jpg`
  );
};

export const thumbPath = (filename: string) => {
  return path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
    'thumb',
    `${filename}.jpg`
  );
};
