function add(value1, value2) {
    return (value1 + value2);
}
function subtract(value1, value2) {
    return (value1 - value2);
}
function multiply(value1, value2) {
    return (value1 * value2);
}
function divide(value1, value2) {
    return (value1 / value2);
}
function increment(value) {
    value++
    return (value);
}
function decrement(value) {
    value--
    return (value);
}
function makeInt(value) {
    const parsedInt = parseInt(value, 10);
    return (parsedInt)
}
function preserveDecimal(value) {
    const preservedDecimal = parseFloat(value);
    return preservedDecimal
}
