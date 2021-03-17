let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Number(prompt(` Nhập vào giá trị thứ ${i} của mảng:`))
}
function daonguoc() {
    arr.reverse();
    document.getElementById("hienthi").innerHTML = arr;
}