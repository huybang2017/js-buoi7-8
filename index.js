function getElement(selector) {
    return document.querySelectorAll(selector);
}
// function mở form
function openForm(compareVar) {
    for (let i = 1; i < formEl.length; i++) {
        if (i === compareVar) {
            formEl[i].classList.toggle("d-block");
        } else {
            formEl[i].classList.remove("d-block");
        }
    }
}
let formEl = getElement("form");
let numArray = [];

// INPUT
function addAll() {
    let input__num = +document.getElementById("input__num").value;
    numArray.push(input__num);
    let input__alert = document.getElementById("input__alert");
    input__alert.innerHTML = `${numArray}`;
}
// SUM
function sum() {
    openForm(1);
    document.getElementById("sum__btn").onclick = function () {
        let sum = 0;
        let sum__alert = document.getElementById("sum__alert");
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] >= 0) {
                sum += numArray[i];
            }
        }
        sum__alert.innerHTML = `Tổng số dương: ${sum}`;
    }
}
// COUNT
function count() {
    openForm(2)
    document.getElementById("count__btn").onclick = function () {
        let count = 0;
        let count__alert = document.getElementById("count__alert");
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > 0) {
                count++;
            }
        }
        count__alert.innerHTML = `số dương: ${count}`;
    }
}
// tìm số nhỏ nhất
function findMin() {
    openForm(3)
    document.getElementById("findMin__btn").onclick = function () {
        let findMin__alert = document.getElementById("findMin__alert");
        let min = numArray[0];
        for (let i = 1; i < numArray.length; i++) {
            if (min > numArray[i]) {
                min = numArray[i];
            }
        }
        findMin__alert.innerHTML = `số nhỏ nhất là: ${min}`;
    }
}
// tìm số dương nhỏ nhất
function findMinPositive() {
    openForm(4);
    document.getElementById("findMinPositive__btn").onclick = function () {
        let findMinPositive__alert = document.getElementById("findMinPositive__alert");
        let minPositive = numArray[0];
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > 0) {
                if (minPositive > numArray[i]) {
                    minPositive = numArray[i];
                }
            }
        }
        findMinPositive__alert.innerHTML = `số dương nhỏ nhất là: ${minPositive}`;
    }
}
// số chẵn cuối cùng
function numEven() {
    openForm(5);
    document.getElementById("numEven__btn").onclick = function () {
        let varArchive = 0;
        let numEven__alert = document.getElementById("numEven__alert");
        for (i = (numArray.length - 1); i >= 0; i--) {
            if (numArray[i] % 2 === 0) {
                varArchive = numArray[i];
                break;
            }else{
                varArchive = -1;
            }
        }
        numEven__alert.innerHTML = `số chẵn cuối cùng là: ${varArchive}`
    }
}

// Đổi chỗ

function translocate() {
    openForm(6);
    document.getElementById("translocate__btn").onclick = function () {
        let translocate__num1 = +document.getElementById("translocate__num1").value
        let translocate__num2 = +document.getElementById("translocate__num2").value
        let translocate__alert = document.getElementById("translocate__alert");
        let temp = 0;
        for (let i = 0; i < numArray.length; i++) {
            temp = numArray[translocate__num1];
            numArray[translocate__num1] = numArray[translocate__num2];
            numArray[translocate__num2] = temp;
        }

        translocate__alert.innerHTML = `mảng sau khi đổi: `
        for (let i = 0; i < numArray.length; i++) {
            translocate__alert.innerHTML += `${numArray[i]}, `;
        }
    }
}

// Sắp xếp
function arrange() {
    openForm(7);
    document.getElementById("arrange__btn").onclick = function () {
        let arrange__alert = document.getElementById("arrange__alert");
        let temp = 0;
        for (let i = 0; i < (numArray.length - 1); i++) {
            for (let j = i + 1; j < numArray.length; j++) {
                if (numArray[i] > numArray[j]) {
                    temp = numArray[i];
                    numArray[i] = numArray[j];
                    numArray[j] = temp;
                }
            }
        }
        arrange__alert.innerHTML = `mảng sau khi sắp xếp: `
        for (let i = 0; i < numArray.length; i++) {
            arrange__alert.innerHTML += `${numArray[i]}, `;
        }
    }
}
// tìm số nguyên tố đầu tiên
// hàm kiểm tra số nguyên tố
function checkPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
function Prime() {
    openForm(8);
    document.getElementById("Prime__btn").onclick = function () {
        let Prime__alert = document.getElementById("Prime__alert");
        for (let i = 0; i < numArray.length; i++) {
            if (checkPrime(numArray[i]) === true) {
                Prime__alert.innerHTML = `${numArray[i]}`;
                break;
            }else{
                Prime__alert.innerHTML = `-1`;
            }
        }
    }
}
// đếm số nguyên
function countIntegers() {
    openForm(9);
    let arrayCountIntegers = [];
    let countIntegers__alert = document.getElementById("countIntegers__alert");
    document.getElementById("addNum__btn").onclick = function () {
        let addNum = +document.getElementById("addNum").value;
        arrayCountIntegers.push(addNum);
        let addNum__alert = document.getElementById("addNum__alert");
        addNum__alert.innerHTML = `${arrayCountIntegers}`;
    }
    // console.log(arrayCountIntegers);
    document.getElementById("countIntegers__btn").onclick = function () {
        let countIntegers = 0;
        for (let i = 0; i < arrayCountIntegers.length; i++) {
            if ((Number.isInteger(arrayCountIntegers[i])) === true) {
                countIntegers++;
            }
        }
        console.log(countIntegers);
        countIntegers__alert.innerHTML = `Số nguyên: ${countIntegers}`;
    }
}

// so sánh số âm số dương
function compare() {
    openForm(10);
    document.getElementById("compare__btn").onclick = function () {
        let countPositive = 0;
        let countNegative = 0;
        let compare__alert = document.getElementById("compare__alert");
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > 0) {
                countPositive++;
            }else if(numArray[i] < 0){
                countNegative++;
            }
        }
        if(countNegative > countPositive){
            compare__alert.innerHTML = `số âm > số dương`;
        }else if(countPositive > countNegative){
            compare__alert.innerHTML = `số dương > số âm`;
        }else{
            compare__alert.innerHTML = `số dương = số âm`;
        }
    }
}
