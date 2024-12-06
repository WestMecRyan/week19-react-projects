# Filter javascript tutorial

## initial snippet setup

```js
const g = JSON.parse(sessionStorage.getItem("groceries"));
const cl = console.log;
cl("groceries is:", g);
```

### Filter by category

```js
function filtByCat(items, cat) {
  return items.filter(i => i.category.toLowerCase() === cat.toLowerCase());
}
```

- example

```js
const fruits = filtByCat(g, "fruits");
cl("Fruits:", fruits);
```

### Filter by maximum price

```js
function filtByMaxPrice(items, maxPrice) {
  return items.filter(i => i.price <= maxPrice);
}
```

- example

```js
const affordableItems = filtByMaxPrice(g, 2.0);
cl("Items with price <= $2.00:", affordableItems);
```

### Filter organic items

```js
function filtOrganic(items) {
  return items.filter(i => i.organic);
}
```

- example

```js
const organicItems = filtOrganic(g);
cl("Organic items:", organicItems);
```

### Filter by Calories

```js
function filtByCalorieRange(items, minCalories, maxCalories) {
  return items.filter(
    i =>
      i.calories_per_100g >= minCalories && i.calories_per_100g <= maxCalories
  );
}
```

- example

```js
const moderateCalorieItems = filtByCalorieRange(g, 50, 100);
cl("Items with calories between 50 and 100:", moderateCalorieItems);
```

### Filter by substring

```js
function filtByNameContains(items, substring) {
  return items.filter(i =>
    i.name.toLowerCase().includes(substring.toLowerCase())
  );
}
```

- example

```js
const itemsWithBerry = filtByNameContains(g, "berry");
cl('Items with "berry" in the name:', itemsWithBerry);
```

### Filter by Non Organic

```js
function filtNonOrganic(items) {
  return items.filter(i => !i.organic);
}
```

- example

```js
const nonOrganicItems = filtNonOrganic(g);
cl("Non-organic items:", nonOrganicItems);
```

### Filter by multiple categories

```js
function filtByCategories(items, categories) {
  return items.filter(i => categories.includes(i.category.toLowerCase()));
}
```

- example

```js
const categoriesToFilter = ["fruits", "vegetables"];
const fruitsAndVeggies = filtByCategories(g, categoriesToFilter);
cl("Fruits and Vegetables:", fruitsAndVeggies);
```

### Filter by price ascending

```js
function sortByPriceAsc(items) {
  return items.slice().sort((a, b) => a.price - b.price);
}
```

- example

```js
const sortedByPriceAsc = sortByPriceAsc(g);
cl("Items sorted by price (ascending):", sortedByPriceAsc);
```

### Filter by calories descending

```js
function sortByCaloriesDesc(items) {
  return items
    .slice()
    .sort((a, b) => b.calories_per_100g - a.calories_per_100g);
}
```

- example

```js
const sortedByCaloriesDesc = sortByCaloriesDesc(g);
cl("Items sorted by calories per 100g (descending):", sortedByCaloriesDesc);
```

### Filter by price range

```js
function filtByPriceRange(items, minPrice, maxPrice) {
  return items.filter(i => i.price >= minPrice && i.price <= maxPrice);
}
```

- example

```js
const midRangeItems = filtByPriceRange(g, 2.0, 5.0);
cl("Items priced between $2.00 and $5.00:", midRangeItems);
```

### Filter by Exact Name Match

```js
function filtByExactName(items, name) {
  return items.filter(i => i.name.toLowerCase() === name.toLowerCase());
}
```

- example

```js
const apples = filtByExactName(g, "Apple");
cl('Items exactly named "Apple":', apples);
```

### Filter by Names Starting with a Letter

```js
function filtByNameStartsWith(items, letter) {
  return items.filter(i =>
    i.name.toLowerCase().startsWith(letter.toLowerCase())
  );
}
```

- example

```js
const itemsStartingWithB = filtByNameStartsWith(g, "B");
cl('Items starting with "B":', itemsStartingWithB);
```

### Filter by Multiple Conditions

```js
function filtByMultipleConditions(items, conditions) {
  return items.filter(i => {
    return Object.keys(conditions).every(key => {
      if (key === "price") {
        return i.price <= conditions[key];
      } else if (key === "organic") {
        return i.organic === conditions[key];
      } else if (key === "category") {
        return i.category.toLowerCase() === conditions[key].toLowerCase();
      } else {
        return true;
      }
    });
  });
}
```

- example

```js
const conditions = { category: "fruits", price: 2.0, organic: true };
const filteredItems = filtByMultipleConditions(g, conditions);
cl("Organic fruits under $2.00:", filteredItems);
```

### Filter by Calories above a value

```js
function filtByMinCalories(items, minCalories) {
  return items.filter(i => i.calories_per_100g >= minCalories);
}
```

- example

```js
const highCalorieItems = filtByMinCalories(g, 500);
cl("Items with calories per 100g >= 500:", highCalorieItems);
```

### Filter by Availability of Property

```js
function filtByPropertyExistence(items, property) {
  return items.filter(i => i.hasOwnProperty(property));
}
```

- example

```js
const itemsWithOrganicProperty = filtByPropertyExistence(g, "organic");
cl('Items that have the "organic" property:', itemsWithOrganicProperty);
```

### Filter by Excluding a Category

```js
function filtExcludeCategory(items, category) {
  return items.filter(i => i.category.toLowerCase() !== category.toLowerCase());
}
```

- example

```js
const itemsNotInDairy = filtExcludeCategory(g, "dairy");
cl('Items not in the "dairy" category:', itemsNotInDairy);
```

### Filter by price not equal to value

```js
function filtByPriceNotEqual(items, price) {
  return items.filter(i => i.price !== price);
}
```

- example

```js
const itemsNotPricedAt299 = filtByPriceNotEqual(g, 2.99);
cl("Items not priced at $2.99:", itemsNotPricedAt299);
```

### Filter by Name Ending in Certain Letter

```js
function filtByNameEndsWith(items, ending) {
  return items.filter(i => i.name.toLowerCase().endsWith(ending.toLowerCase()));
}
```

- example

```js
const itemsEndingWithNut = filtByNameEndsWith(g, "nut");
cl('Items ending with "nut":', itemsEndingWithNut);
```
