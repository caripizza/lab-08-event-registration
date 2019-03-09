import eventFormItemsApi from './event-api.js';
import userDataTable from '../js/form-results.js';
import eventFormItems from './registration-form.js';

const formData = eventFormItemsApi.getAll();

userDataTable.init(formData);

eventFormItems.init(function(item) {
    eventFormItemsApi.add(item);
    userDataTable.update(formData);
});

