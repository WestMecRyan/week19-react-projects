function filtByCat(items, cat) {
    return items.filter(i=>i.category.toLowerCase() === cat.toLowerCase());
}