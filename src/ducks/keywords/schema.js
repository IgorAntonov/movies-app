import { schema } from 'normalizr';

const keywords = new schema.Entity('keywords');

export const keywordsListSchema = [keywords];
