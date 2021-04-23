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
            debugger
        })
    }
}