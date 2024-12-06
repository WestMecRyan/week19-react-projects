// create a function to return a filtered array where the items are organic
function filtByOrganic(items) {
    return items.filter(i=>i.organic);
}

function filtByNonOrganic(items) {
    return items.filter(i=>!i.organic);
}