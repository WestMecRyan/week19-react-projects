const g = JSON.parse(sessionStorage.getItem("groceries"));
cl = console.log;

function filtByMinPrice(items, minPrice) {
    return items.filter(i => i.price >= minPrice);
}

const filteredArr = filtByMinPrice(g, 1.50)

cl(filteredArr);