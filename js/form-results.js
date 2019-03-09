import html from './html.js';

const tableBody = document.getElementById('form-submission-table');
// const userData = window.localStorage.getItem('items');
// console.log(userData);

function makeRow(userData) {
    return html`
        <div id="column-headings">
            <td><strong>Name:</strong> ${userData.name}<br/></td>
            <td><strong>Email:</strong> ${userData.email}<br/></td>
            <td><strong>Pronoun:</strong> ${userData.pronoun}<br/></td>
            <td><strong>Guests:</strong> ${userData.guests}<br/></td>
            <td><strong>Meal:</strong> ${userData.meal}<br/></td>
            <td><strong>Shirt size:</strong> ${userData.shirt}<br/></td>
            <td><strong>Shirt color:</strong> ${userData.shirtColor}<br/></td>
        </div>
        <br/>
    `;
}

const userDataTable = {
    init(userData) {
        for(let i = 0; i < userData.length; i++) {
            const tr = makeRow(userData[i]);
            tableBody.appendChild(tr);
        }
    },
    update(userData) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        userDataTable.init(userData);
    }
};

export default userDataTable;
