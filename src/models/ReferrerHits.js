const Joi = require('joi');
const BaseModel = require('./BaseModel');

const schema = {
	referrerId: [ Joi.number().integer().min(0).required().allow(null), Joi.string().regex(/^@/) ],
	date: Joi.date().required(),
	hits: Joi.number().integer().min(0).required(),
};

class ReferrerHits extends BaseModel {
	static get table () {
		return 'referrer_hits';
	}

	static get schema () {
		return schema;
	}

	static get unique () {
		return [ 'referrerId', 'date' ];
	}

	constructor (properties = {}) {
		super();

		/** @type {number} */
		this.referrerId = null;

		/** @type {Date} */
		this.date = null;

		/** @type {number} */
		this.hits = 0;

		Object.assign(this, properties);
		return new Proxy(this, BaseModel.ProxyHandler);
	}
}

module.exports = ReferrerHits;
