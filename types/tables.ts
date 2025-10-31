import {tables, ResourceInterface} from 'harperdb';
import type {Product, Review} from './schema.d.ts';

// TODO: Generate these too.
export const ProductTable = tables.Product as any as ResourceInterface<Product>;
export const ReviewTable = tables.Review as any as ResourceInterface<Review>;
