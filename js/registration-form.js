const eventForm = document.getElementById('event-form');
// const name = document.getElementById('name');
const formResponse = document.getElementById('submit-message-response');

const eventFormItems = {
    init(onAdd) {

        eventForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // collect the form events
            const elements = eventForm.elements;
            console.log(elements); // SPIT OUT SUBMITTED FORM ELEMENTS TO CONSOLE

            // data object
            const userData = {};

            // gather data
            userData.name = elements.name.value;

            // call the callback function
            onAdd(userData);

            // onscreen message
            formResponse.textContent = 'TEST';

            eventForm.reset();

        });
    }
};

export default eventFormItems;