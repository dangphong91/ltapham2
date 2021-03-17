let a = Number(prompt("Nhập vào kí tự cần kiểm tra:"));
function kiemtra() {
    if (Number.isInteger(a)) {
        document.getElementById("hienthi").innerHTML = "True";
    } else {
        document.getElementById("hienthi").innerHTML = "False";
    }
}