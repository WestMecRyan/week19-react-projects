const g = JSON.parse(sessionStorage.getItem("groceries"));
const cl = console.log;

function filtByCat(items, cat) {
    return items.filter(i => i.category.toLowerCase() === cat.toLowerCase());
}

const fruits = filtByCat(g, 'fruits');
cl(fruits);

