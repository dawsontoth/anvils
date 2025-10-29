import type {RequestTarget} from 'harperdb/resources/RequestTarget.js';
import type {Review} from '../types/schema.js';
import {ReviewTable, type User} from '../types/tables.ts';

export class review extends ReviewTable {
	static loadAsInstance = false;

	allowRead(user: User, target: RequestTarget) {
		return true;
	}

	allowCreate(user: User, newData: Review, target: RequestTarget) {
		return true;
	}

	allowUpdate(user: User, updatedData: Review, target: RequestTarget) {
		return true;
	}

	allowDelete(user: User, target: RequestTarget) {
		return true;
	}
}
