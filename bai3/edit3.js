let a = Number(prompt("Nhập số cần tính giai thừa:"));
let tich = 1;
function giaithua() {
    for(let i = 1; i <= a; i++) {
        tich = tich * i;
    }
    document.getElementById("hienthi").innerHTML = ` Giai thừa của ${a} là ${tich}`;
}