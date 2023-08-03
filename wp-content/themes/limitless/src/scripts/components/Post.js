export class Post {
	constructor(form) {
		this.form = form
	}

	initPost() {
		const forms = document.querySelectorAll(this.form)

		if (forms.length === 0) {
			return
		}

		forms.forEach(form => { //shorthand?
			this.initEvents(form)
		})
	}

	initEvents(target) {
		target.addEventListener('submit', this.submitHandler.bind(this))

		if (target.post_image) {
			target.post_image.addEventListener('input', this.diplayImage.bind(this))
		}
	}

	submitHandler(e) {
		e.preventDefault();

		if (e.target.hasAttribute('data-post-form-create'))  this.create(e)
		if (e.target.hasAttribute('data-post-form-update')) this.update(e)
		if (e.target.hasAttribute('data-post-form-delete')) this.delete(e)
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

	async update(e) {
		try {
			await fetch(externalData.root_url + "/wp-json/wp/v2/posts/" + e.target.postId.value, {
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

	diplayImage(e) {
  	const file = event.target.files[0];
		const image = e.target.nextElementSibling

  	const reader = new FileReader();

		if (!image.classList.contains('file__image')) {
			image.classList.add('file__image')
			image.alt = 'Uploaded image.'
		}

  	reader.onload = function(event) {
    	image.src = event.target.result;
  	};

  	reader.readAsDataURL(file);
	}
}