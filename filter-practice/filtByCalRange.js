const g = JSON.parse(sessionStorage.getItem("groceries"));
cl = console.log;

minimum = 1;
maximum = 10;
target = 5;
minimum <= target <= maximum;
function filtByCalRange(items, min, max) {
  return items.filter(i => min <= i.calories_per_100g <= max);
}

const fileeredArr = filtByCalRange();

cl(filteredArr);
