import sharp from 'sharp';

function resizeImage(input) {
  return sharp(input)
    .resize({
      height: 400,
      fit: 'outside',
    });
}

export default resizeImage;
