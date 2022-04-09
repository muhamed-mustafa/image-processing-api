import path from 'path';

export const fullPath = (imageName: string) => {
  return path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
    'full',
    `${imageName}.jpg`
  );
};

export const thumbPath = (imageName: string) => {
  return path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
    'thumb',
    `${imageName}`
  );
};
