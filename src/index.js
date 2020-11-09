//src/index.js
function reverse(word) {
    if (word == null) return "input error";
    return word.split("").reverse().join("");
}