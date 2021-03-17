function binhphuong() {
    let a = Number(prompt("Nhập số cần tính bình phương:"));
    let b = a * a;
    document.getElementById("hienthi").innerHTML = ` Bình phương của ${a} là ${b}`;
}