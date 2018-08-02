import { schema } from 'normalizr';

const movieReviews = new schema.Entity('movieReviews');

export const movieReviewsListSchema = [ movieReviews ];


