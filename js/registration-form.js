const eventForm = document.getElementById('event-form');
const formResponse = document.getElementById('submit-message-response');

const eventFormItems = {
    init(onAdd) {

        eventForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // collect the form events
            const elements = eventForm.elements;
            // console.log(elements); // SPIT OUT SUBMITTED FORM ELEMENTS TO CONSOLE

            // data object
            const userData = {};

            // gather data
            userData.name = elements.name.value;
            userData.email = elements.email.value;
            userData.pronoun = elements.pronoun.value;
            userData.guests = elements.guests.value;
            userData.meal = elements.meal.value;
            userData.shirt = elements.shirt.value;

            // call the callback function
            onAdd(userData);

            // onscreen message
            formResponse.textContent = 'Thank you for signing up! We will be in touch as soon as possible.';

            eventForm.reset();

        });
    }
};

export default eventFormItems;