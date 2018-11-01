import eventFormItemsApi from './event-api.js';
import eventFormItems from './registration-form.js';

eventFormItems.init(function(item) {
    eventFormItemsApi.add(item);
});