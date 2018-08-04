import { schema } from 'normalizr';

const movies = new schema.Entity('movies');

export const movieListSchema = [movies];
