

function num(a, b) {
    return function () {
        return (a < b) ? b : (a > b) ? a : "Равны";
    }
}

document.write(num(2, 5)());