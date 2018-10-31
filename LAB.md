# Event Registration

Build an event registration form!


## User Stories

* Can register for event
    * Name, Pronoun, Email
    * Meal Selection

## Project Structure

* `assets`
    * _any media assets (images, etc)_
* `css`
    * `registration-form.css` - _css specific to form component_
    * `styles.css` - _shared css_
* `js`
    * `app.js` - _main entry point_
    * STRETCH: `attendees.js` - _component for display attendees_
    * `event-api.js` - _methods for data_
    * STRETCH: `html.js` - _helper function for making templates_
    * `registration-form.js` - _component for form_
* `.eslintrc` - _class eslint with `source-type: "module"`_
* `.travis.yml` - _run linting on travis_
* `index.html` - _html document_
* `README.md` - _info about project_

## Stretch Goals

### Attendee Report

* Create another component that shows below the form on the page
* Display a list of attendees and info. (`<ul>`? `<table>`?)

## Rubric

* App Component inits children and orchestrates **1pt**
* Form Layout and Design **2pts**
* Form Control selection and use **2pt**
* Make Data Object from Form **3pts**
* Save registration to events via api to localStorage **1pt**
* Project organization, clean code **1pt**