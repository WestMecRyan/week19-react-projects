## create a file for each of the following

```js
// Create a filter for items by a minimum price

// create a filter for items in a range of calories
// the property is calories_per_100g
// so the comparison would be lower boundary <= range <= upper boundary

// create a filter for NON organic items

// create a filter to return an array sorted by price from lowest to highest
```





```js
// Create a filter for items by a minimum price
function filtByMinPrice(items, minPrice) {
    return items.filter(i => i.price >= minPrice);
}
const expensiveStuff = filtByMinPrice(g, 1)
// create a filter for items in a range of calories
// the property is calories_per_100g
// so the comparison would be lower boundary <= range <= upper boundary
function filtByCalRange(items, min, max ) {
    return items.filter(i => min <= i.calories_per_100g <= max);
}

// create a filter for NON organic items
function filtByOrganic(items) {
    return items.filter(i=>!i.organic);
}
// create a filter to return an array sorted by price from lowest to highest
function sortLowToHigh(items) {
   return items.sort((a,b)=>a.price - b.price);
}
```

```js
// Create a filter for items by a minimum price


function filtByMinPrice(items, minPrice) {
    return items.filter(i => i.price >= minPrice);
}
const expensiveStuff = filtByMinPrice(g, 1)
// create a filter for items in a range of calories
// the property is calories_per_100g
// so the comparison would be lower boundary <= range <= upper boundary
function filtByCalRange(items, min, max ) {
    return items.filter(i => min <= i.calories_per_100g <= max);
}

// create a filter for NON organic items
function filtByOrganic(items) {
    return items.filter(i=>!i.organic);
}
// create a filter to return an array sorted by price from lowest to highest
function sortLowToHigh(items) {
   return items.sort((a,b)=>a.price - b.price);
}



/ create a file for each of  the following

// Create a filter for items by a minimum price
function filtByMinPrice(items, minPrice) {
    return items.filter(i => i.price >= minPrice);
}
const expensiveStuff = filtByMinPrice(g, 1)
// create a filter for items in a range of calories
// the property is calories_per_100g
// so the comparison would be lower boundary <= range <= upper boundary
function filtByCalRange(items, min, max ) {
    return items.filter(i => min <= i.calories_per_100g <= max);
}

// create a filter for NON organic items
function filtByOrganic(items) {
    return items.filter(i=>!i.organic);
}
// create a filter to return an array sorted by price from lowest to highest
function sortLowToHigh(items) {
   return items.sort((a,b)=>a.price - b.price);
}
```
