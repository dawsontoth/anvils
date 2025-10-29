import type {RequestTarget} from 'harperdb/resources/RequestTarget';
import {ProductTable, type User} from '../types/tables.ts';

export class product extends ProductTable {
	static loadAsInstance = false;

	async allowRead(user: User, target: RequestTarget) {
		if (target.id) {
			const entity = await this.get({ ...target, checkPermission: false } as RequestTarget);
			return entity && entity.price <= 100;

		}
		return true;
	}

	allowCreate(user, data, context) {
		return true;
	}

	allowUpdate(user, data, context) {
		return true;
	}

	allowDelete(user, target) {
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
