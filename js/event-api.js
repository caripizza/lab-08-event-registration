
let eventFormItems = [];

function saveFormItems() {
    localStorage.setItem('formItems', JSON.stringify(eventFormItems));
}

const eventFormItemsApi = {
    add(item) {
        // add to array
        eventFormItems.push(item);
        // save array to localStorage
        saveFormItems();
    }
};

export default eventFormItemsApi;