export class Post {
	constructor(form) {
		this.form = form
		this.initPost()
	}

	initPost() {
		const forms = document.querySelectorAll(this.form)

		if (forms === null) {
			return
		}

		forms.forEach(form => {
			form.addEventListener('submit', this.submitHandler.bind(this))
		})
	}

	submitHandler(e) {
		e.preventDefault();

		if (e.target.hasAttribute('data-post-create'))  this.create(e)
		if (e.target.hasAttribute('data-post-update')) this.update(e)
		if (e.target.hasAttribute('data-post-delete')) this.delete(e)
	}

	async create(e) {
		try {
			await fetch(externalData.root_url + "/wp-json/wp/v2/posts/", {
				headers: {
					'X-WP-Nonce' : externalData.nonce
				},
	      method: 'POST',
	      body: new FormData(e.target)
    	});
		}
		catch (e) {
      console.error(e)
    }

  	location.reload();
  	location.href = externalData.root_url + '/blog'
	}

	async delete(e) {
		try {
			await fetch(externalData.root_url + "/wp-json/wp/v2/posts/" + e.target.postId.value, {
				headers: {
					'X-WP-Nonce' : externalData.nonce
				},
	      method: 'DELETE'
    	});
		}
		catch (e) {
      console.error(e)
    }

  	location.reload();
  	location.href = externalData.root_url + '/blog'
	}
}