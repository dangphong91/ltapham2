let arr = [];
let x = 0;
for (let i = 0; i < 10; i++) {
    arr[i] = Number(prompt(` Nhập vào giá trị thứ ${i} của mảng:`))
}
function kiemtra() {
    let b = Number(prompt(` Nhập vào giá trị cần kiểm tra:`))
    let c = arr.indexOf(b);
    if (c >=0) {
        let arr2 = arr.filter(el => el == b);
        document.getElementById("hienthi").innerHTML = ` Giá trị ${b} xuất hiện ${arr2.length} lần`;
    } else {
        document.getElementById("hienthi").innerHTML = ` Giá trị ${b} không có.`;
    }
}