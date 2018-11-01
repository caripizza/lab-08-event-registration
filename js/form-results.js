import html from './html.js';

const tableBody = document.getElementById('form-submission-table');

function makeRow(userData) {
    return html`<tr id="column-headings">
        <td>${userData.name}</td>
        <td>${userData.email}</td>
        <td>${userData.pronoun}</td>
        <td>${userData.guests}</td>
        <td>${userData.meal}</td>
        <td>${userData.shirt}</td>
    </tr>`;
}

const userDataTable = {
    init: function(userData) {
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