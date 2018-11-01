import eventFormItemsApi from './event-api.js';
// import userDataTable from '../js/form-results.js';
import eventFormItems from './registration-form.js';

eventFormItems.init(function(item) {
    eventFormItemsApi.add(item);
});

