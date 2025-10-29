import {tables} from 'harperdb';
import type {RequestTarget} from 'harperdb/resources/RequestTarget';
import type {Id} from 'harperdb/resources/ResourceInterface.js';
import type {makeTable} from 'harperdb/resources/Table.js';
import type {Product, Review} from './schema.d.ts';

// TODO: Generate these too.
export const ProductTable = tables.Product as any as NarrowedTableType<Product, keyof Product>;
export const ReviewTable = tables.Review as any as NarrowedTableType<Review, keyof Review>;

// TODO: Expand user, allow customization?
export interface User {
	email?: string;

	[record: string]: any;
}

// TODO: This type would be better in core, of course.
// TODO: Why are there conflicts between the get, search etc types?
interface NarrowedTableType<T, F extends keyof T> extends Omit<
	ReturnType<typeof makeTable>,
	'get'|'search'|'put'|'patch'|'delete'|'create'|'post'|'update'
> {
	new(identifier: Id, source: Partial<T>): NarrowedTableType<T, F>;

	get(target?: RequestTarget): Promise<T|void>;

	allowRead(user: User, target: RequestTarget): Promise<boolean>|boolean;

	allowUpdate(user: User, updatedData: T, target: RequestTarget): Promise<boolean>|boolean;

	allowCreate(user: User, newData: T, target: RequestTarget): Promise<boolean>|boolean;

	allowDelete(user: User, target: RequestTarget): Promise<boolean>|boolean;

	update(target: RequestTarget, updates?: Partial<T>): T|{
		set: (property: F, value: T[F]) => void;
		getProperty: (property: F) => T[F];
		getUpdatedTime(): number;
		getExpiresAt(): number;
		addTo(property: F, value: T[F]): void;
		subtractFrom(property: F, value: T[F]): void;
		getRecord(): T;
		setRecord(record: T): void;
		getChanges(): Partial<T>;
	};

	addTo(property: F, value: T[F]): void;

	subtractFrom(property: F, value: T[F]): void;

	getRecord(): T;

	getChanges(): Partial<T>;

	setRecord(record: Partial<T>): void;

	put(target: RequestTarget, record: T): void|Promise<void>;

	create(target: RequestTarget, record: Partial<T>): void|Promise<void>;

	patch(target: RequestTarget, recordUpdate: Partial<T>): void|Promise<void>;

	delete(target: RequestTarget): Promise<boolean>|boolean;

	search(target: RequestTarget): AsyncIterable<T>;

	validate(record: Partial<T>, patch?: true): void;

	validate(record: T, patch?: false): void;

	post(target: RequestTarget, newRecord: Partial<T>): Promise<T>;
}
