import { schema } from 'normalizr';

const movieImages = new schema.Entity('movieImages', undefined, {
  idAttribute: value => value.file_path
});

export const movieImagesListSchema = [ movieImages ];


