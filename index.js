var customerName = 'bob';
var bestCustomer ;
const leastFavoriteCustomer = 'Annie';

function upperCaseCustomerName() {
    customerName =  customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer;
}

changeLeastFavoriteCustomer();
