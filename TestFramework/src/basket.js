class basket {
    constructor(items) {
        this._items = items;
        this._capacity = 12;
    }

    addItem(item) {
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].includes(item[0][1])) {
                return `The item you're trying to add has an id of ${item[0][1]}, the basket contains ${item[0][0]} which has this id!`
            }
        }

        if (this._items.length < this._capacity) {
            this._items.push(item);
            return `${item} has been added to the basket`;
        } else {
            return `Basket is full! ${item} has not been added`;
        }
    }

    removeItem(item) {
        if (this._items.includes(item) === true) {
            let itemIndex = this._items.indexOf(item);
            this._items.splice(itemIndex, 1);
            return `${item} has been removed from the basket`;
        } else {
            return `${item} does not exist in the basket!`;
        }
    }

    displayPrice() {

    }

    largerCapacity() {
        this._capacity = 20;
        return 'Baskets now have a capacity of 20 items';
    }
}

module.exports = basket;

