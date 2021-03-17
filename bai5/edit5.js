let a = Number(prompt("Nhập vào số nguyên đầu tiên:"));
let b = Number(prompt("Nhập vào số nguyên thứ hai:"));
let c = Number(prompt("Nhập vào số nguyên cuối cùng:"));
let min = 0;
function kiemtra() {
    min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    document.getElementById("hienthi").innerHTML = ` Giá trị nhỏ nhất là ${min}`;
}