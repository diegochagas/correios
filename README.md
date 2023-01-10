# Tests

Web app that searchs for an Brazilian zipcode and returns its address. Besides that, it shows the location of this address on the map.

## Used technologies

- React
- Redux
- Redux-Saga
- Jest
- Enzyme
- Axios
- Git Hooks
- HTML
- CSS
- JavaScript

## Installation

Use the [node package manager (npm)](https://nodejs.org/en/) to install correios.

```
npm i
```

## Usage

After install the dependencies, inside the project folder, run the command: 
```
npm start
```
Whe you run the application, you only need to insert the Brazilian Zipcode (called CEP in Portuguese) on the search field, and click enter on your keyboard or on the magnifying glass
 icon.

## Tests

Tests were created to verify the functionality and consistency of the components. To execute the tests, you need to run the command:
```
npm test
```
The application will execute tests for the SearchZipCode and MapContainer components, and execuute a integration tests to the sagas made with [Redux](https://redux.js.org/).

---

# Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me." - John 14:6
