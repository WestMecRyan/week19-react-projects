// create a function that will filter our groceries array
// by only those items whose organic property is true

const g = JSON.parse(sessionStorage.getItem("groceries"));
const cl = console.log;

function filtByOrganic(items) {
    return items.filter(i=>i.organic);
}

const filteredArr = someFunc();
cl(filteredArr);
