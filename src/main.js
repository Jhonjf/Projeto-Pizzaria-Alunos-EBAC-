const imagemin = require ('imagemin');
const imageminMozjpeg = require ('imagemin-mozjpeg');
const imageminPngquant = require ('imagemin-pngquant');
const imageminSvgo = require ('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');

(async () => {
    await iamgemin (['src/images/*.{jpg,png,svg,gif'], {
        destination: 'dist/images',
        plugins: [
            imageminMozjpeg({ quality: 75 }),
            imageminPngquant({ quality: [0.6, 0.8] }),
            imageminSvgo(),
            imageminGifsicle({ optimizationLevel: 3 })
        ]
    });
    console.log('Minifivação de imagens')
})();
