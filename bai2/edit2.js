let a = Number(prompt("Nhập bán kính của hình tròn:"));
let b = 0;
let c = 0;
function dientich() {
    b = a * a * 3.14;
    document.getElementById("htdientich").innerHTML = ` Diện tích của hình tròn có bán kính ${a} là ${b}`;
}
function chuvi() {
    c = a * 2 * 3.14;
    document.getElementById("htchuvi").innerHTML = ` Chu vi của hình tròn có bán kính ${a} là ${c}`;
}