export default class CommentInteractor {
	constructor (deps = {}) {
		this.Entity = deps.Entity || require('./Entity').default
	}

	create(inputMessage) {
		let commentEntity = new this.Entity

		return commentEntity.validate(inputMessage)
			.then(outputMessage => {
				return commentEntity.create(outputMessage)
			})
	}
}