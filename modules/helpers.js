const helpers = {
	createHeader: function (place, navigation_array, social_media_array) {
		place.innerHTML = ""

		let	header_container = document.createElement("div"),
			logo = document.createElement("div"),
			navigation = document.createElement("nav"),
			social_media = document.createElement("div")

		header_container.classList.add("header-container")
		logo.classList.add("logo")
		navigation.classList.add("navigation")
		social_media.classList.add("social-media")

		for (let item of navigation_array) {
			let a = document.createElement("a")

			a.innerHTML = item.title
			a.href = item.href

			navigation.append(a)
		}

		for (let item of social_media_array) {
			let a = document.createElement("a")
			let img = document.createElement("img")

			a.href = item.href
			img.src = item.src

			a.append(img)
			social_media.append(a)
		}

		place.append(header_container)
		header_container.append(logo, navigation, social_media)
	}
}

export const createHeader = helpers.createHeader
