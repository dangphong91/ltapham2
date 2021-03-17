let a = Number(prompt("Nhập vào kí tự cần kiểm tra:"));
function kiemtra() {
    if (a == parseInt(a) && a > 0) {
        document.getElementById("hienthi").innerHTML = "True";
    } else {
        document.getElementById("hienthi").innerHTML = "False";
    }
}