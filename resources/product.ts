import type {RequestTarget} from 'harperdb/resources/RequestTarget';
import type {Product} from '../types/schema.ts';
import {ProductTable, type User} from '../types/tables.ts';

export class product extends ProductTable {
	static loadAsInstance = false;

	async allowRead(user: User, target: RequestTarget) {
		if (target.id) {
			const entity = await this.get({ ...target, checkPermission: false } as RequestTarget);
			if (entity && entity.price >= 100) {
				// Only active users can see big ticket products!
				return !!user?.active;
			}
		}
		return true;
	}

	allowCreate(user: User, newData: Product, target: RequestTarget) {
		return true;
	}

	allowUpdate(user: User, updatedData: Product, target: RequestTarget) {
		return true;
	}

	allowDelete(user: User, target: RequestTarget) {
		return true;
	}

	async* search(target: RequestTarget) {
		const results = super.search(target);
		for await (const result of results) {
			result.name += '!';
			yield result;
		}
	}
}
