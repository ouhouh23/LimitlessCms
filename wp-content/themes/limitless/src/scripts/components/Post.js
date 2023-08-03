export class Post {
	constructor(form) {
		this.form = form
	}

	initPost() {
		const forms = document.querySelectorAll(this.form)

		if (forms.length === 0) {
			return
		}

		forms.forEach(this.initEvents.bind(this))
	}

	initEvents(target) {
		target.addEventListener('submit', this.submitHandler.bind(this))

		if (!target.post_image) {
			return
		}

		target.post_image.addEventListener('input', this.diplayImage.bind(this))
	}

	submitHandler(e) {
		e.preventDefault();

		if (e.target.hasAttribute('data-post-form-create'))  this.create(e)
		if (e.target.hasAttribute('data-post-form-update')) this.update(e)
		if (e.target.hasAttribute('data-post-form-delete')) this.delete(e)

		this.disableSubmit(e)
	}

	async sendRequest(slug, requestMethod, requestBody) {
		try {
			await fetch(externalData.root_url + "/wp-json/wp/v2/posts/" + slug, {
				headers: {
					'X-WP-Nonce' : externalData.nonce
				},
	      method: requestMethod,
	      body: requestBody
    	});
		}
		catch (e) {
      console.error(e)
    }

  	location.reload();
  	location.href = externalData.root_url + '/blog'
	}

	create(e) {
		this.sendRequest('', 'POST', new FormData(e.target))
	}

	update(e) {
		this.sendRequest(e.target.postId.value, 'POST', new FormData(e.target))
	}

	delete(e) {
		this.sendRequest(e.target.postId.value, 'DELETE', '')
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

	disableSubmit(e) {
		const button = e.target.querySelector('button')
		button.disabled = 'disabled'
	}
}