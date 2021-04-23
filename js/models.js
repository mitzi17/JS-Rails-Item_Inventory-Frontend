class Store {
    constructor(name) {
        this.name = name
    }
}

class Item {
    constructor(attributes) {
        let whitelist = ["name", "sku", "price", "location", "sizes", "category"]
        whitelist.forEach(attr => this[attr] = attributes[attr])
    }

    // static container() {
    //     return this.c ||= document.querySelector("#itemContainer")
    // }

    static all() {
        return fetch("http://localhost:3000/items", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.text().then(error => Promise.reject(error))
            }
        })
        .then(itemsArray => {
            this.collection = itemsArray.map(attrs => new Item(attrs))
            debugger
            //let renderedItems = this.collection.map(item => item.render())
            //this.container().render(renderedItems)
            
        })
    }

    render() {
        this.element ||= document.createElement('div')
        this.element.classList.add(..."w-full flex-none text-sm font-medium text-gray-500 mt-2".split(" "))

        this.skuLink ||= document.createElement('p')
        this.skuLink.classList.add("sku")
        this.skuLink.textContent = this.sku

        this.locationLink ||= document.createElement('p')
        this.locationLink.classList.add("location")
        this.locationLink.textContent = this.location

        this.categoryLink ||= document.createElement('p')
        this.categoryLink.classList.add("category")
        this.categoryLink.textContent = this.category

        this.sizesLink ||= document.createElement('p')
        this.sizesLink.classList.add("sizes")
        this.sizesLink.textContent = this.sizes

        this.element.append(this.skuLink, this.locationLink, this.categoryLink, this.sizesLink)
        return this.element
    }
}