class basket {
    constructor(items) {
        this._items = items;
        this._currItem = items[items.length - 1];
        this._nextitemID = this._currItem.parseInt(this._currItem[this._currItem.length - 1]) + 1;
        this._capacity = 12;
    }

    addItem(item) {
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

    largerCapacity() {
        this._capacity = 20;
        return 'Baskets now have a capacity of 20 items';
    }
}

module.exports = basket;

