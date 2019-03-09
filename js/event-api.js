
let eventFormItems = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(eventFormItems));
}

const eventFormItemsApi = {
    add(item) {
        // add to array
        eventFormItems.push(item);
        // save array to localStorage
        saveItems();
    },
    getAll() {
        return eventFormItems;
    }
};

export default eventFormItemsApi;
