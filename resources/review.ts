import type {RequestTarget, User} from 'harperdb';
import type {Review} from '../types/schema.js';
import {ReviewTable} from '../types/tables.ts';

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
