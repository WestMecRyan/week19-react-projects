const g = JSON.parse(sessionStorage.getItem("groceries"));
const cl = console.log;

function filtByAscendingPrice(items) {
  return items.sort((a, b) => a.price - b.price);
}

const filteredArr = filtByAscendingPrice();

cl(filteredArr);
