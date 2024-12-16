let inventory = {
    items: ["apple", "banana", "orange"],
    addItem: function(item) {
        this.items.push(item);
    },
    removeItem: function(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            return `${item} removed from inventory.`;
        } else {
            return `${item} not found in inventory.`;
        }
    }
};

inventory.addItem("grape");
console.log(inventory.items);

console.log(inventory.removeItem("banana"));
console.log(inventory.items);