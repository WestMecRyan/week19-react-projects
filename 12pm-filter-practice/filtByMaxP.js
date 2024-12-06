const g = JSON.parse(sessionStorage.getItem("groceries"));
const cl = console.log;

function filtByMaxP(items, price) {
    return items.filter(i => i.price <= 1 );
}

const dollarGeneralStuff = filtByMaxP(g, 1);
cl(dollarGeneralStuff);

