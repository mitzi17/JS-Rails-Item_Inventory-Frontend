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
}