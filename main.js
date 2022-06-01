// bài 1
function bai1() {
    document.getElementById('close1').style.display = 'none'
    document.getElementById('open1').style.display = 'inline-block'
    document.getElementById('close2').style.display = 'inline-block'
    document.getElementById('open2').style.display = 'none'
    document.getElementById('close3').style.display = 'inline-block'
    document.getElementById('open3').style.display = 'none'
    document.getElementById('close4').style.display = 'inline-block'
    document.getElementById('open4').style.display = 'none'
    document.getElementById('close5').style.display = 'inline-block'
    document.getElementById('open5').style.display = 'none'
    document.getElementById('bai1').style.display = 'block'
    document.getElementById('bai2').style.display = 'none'
    document.getElementById('bai3').style.display = 'none'
    document.getElementById('bai4').style.display = 'none'
    document.getElementById('bai5').style.display = 'none'
}
function luongNhanVien() {
    var soNgayLam = Number(document.getElementById('soNgayLam').value)
    var luong1Ngay = 100000
    var luongNhanVien = new Intl.NumberFormat('vn-VN').format(soNgayLam * luong1Ngay);
    
    document.getElementById('luongNhanVien').innerHTML = 'Lương nhân viên bằng: ' + luongNhanVien + ' đ'
}
// Bài 2
function bai2() {
    document.getElementById('close1').style.display = 'inline-block'
    document.getElementById('open1').style.display = 'none'
    document.getElementById('close2').style.display = 'none'
    document.getElementById('open2').style.display = 'inline-block'
    document.getElementById('close3').style.display = 'inline-block'
    document.getElementById('open3').style.display = 'none'
    document.getElementById('close4').style.display = 'inline-block'
    document.getElementById('open4').style.display = 'none'
    document.getElementById('close5').style.display = 'inline-block'
    document.getElementById('open5').style.display = 'none'
    document.getElementById('bai1').style.display = 'none'
    document.getElementById('bai2').style.display = 'block'
    document.getElementById('bai3').style.display = 'none'
    document.getElementById('bai4').style.display = 'none'
    document.getElementById('bai5').style.display = 'none'
}
function trungBinhCong() {
    var soThuc1 = Number(document.getElementById('soThuc1').value)
    var soThuc2 = Number(document.getElementById('soThuc2').value)
    var soThuc3 = Number(document.getElementById('soThuc3').value)
    var soThuc4 = Number(document.getElementById('soThuc4').value)
    var soThuc5 = Number(document.getElementById('soThuc5').value)
    var trungBinhCong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5
    document.getElementById('trungBinhCong').innerHTML = 'Trung bình cộng bằng: ' + trungBinhCong
}
//bài 3
function bai3() {
    document.getElementById('close1').style.display = 'inline-block'
    document.getElementById('open1').style.display = 'none'
    document.getElementById('close2').style.display = 'inline-block'
    document.getElementById('open2').style.display = 'none'
    document.getElementById('close3').style.display = 'none'
    document.getElementById('open3').style.display = 'inline-block'
    document.getElementById('close4').style.display = 'inline-block'
    document.getElementById('open4').style.display = 'none'
    document.getElementById('close5').style.display = 'inline-block'
    document.getElementById('open5').style.display = 'none'
    document.getElementById('bai1').style.display = 'none'
    document.getElementById('bai2').style.display = 'none'
    document.getElementById('bai3').style.display = 'block'
    document.getElementById('bai4').style.display = 'none'
    document.getElementById('bai5').style.display = 'none'
}
function tienVND() {
    var tienUSD = Number(document.getElementById('tienUSD').value)
    var giaUSD = 23500
    var tienVND = new Intl.NumberFormat('vn-VN').format(tienUSD * giaUSD)
    document.getElementById('tienVND').innerHTML = 'Tiền VNĐ bằng: ' + tienVND + ' đ'
}
//bài 4
function bai4() {
    document.getElementById('close1').style.display = 'inline-block'
    document.getElementById('open1').style.display = 'none'
    document.getElementById('close2').style.display = 'inline-block'
    document.getElementById('open2').style.display = 'none'
    document.getElementById('close3').style.display = 'inline-block'
    document.getElementById('open3').style.display = 'none'
    document.getElementById('close4').style.display = 'none'
    document.getElementById('open4').style.display = 'inline-block'
    document.getElementById('close5').style.display = 'inline-block'
    document.getElementById('open5').style.display = 'none'
    document.getElementById('bai1').style.display = 'none'
    document.getElementById('bai2').style.display = 'none'
    document.getElementById('bai3').style.display = 'none'
    document.getElementById('bai4').style.display = 'block'
    document.getElementById('bai5').style.display = 'none'
}
function chuViDienTich() {
    var chieuDai = Number(document.getElementById('chieuDai').value)
    var chieuRong = Number(document.getElementById('chieuRong').value)
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    document.getElementById('chuViDienTich').innerHTML = 'Chu vi bằng: ' + chuVi + '; Diện tích bằng: ' + dienTich
}
//bài 5
function bai5() {
    document.getElementById('close1').style.display = 'inline-block'
    document.getElementById('open1').style.display = 'none'
    document.getElementById('close2').style.display = 'inline-block'
    document.getElementById('open2').style.display = 'none'
    document.getElementById('close3').style.display = 'inline-block'
    document.getElementById('open3').style.display = 'none'
    document.getElementById('close4').style.display = 'inline-block'
    document.getElementById('open4').style.display = 'none'
    document.getElementById('close5').style.display = 'none'
    document.getElementById('open5').style.display = 'inline-block'
    document.getElementById('bai1').style.display = 'none'
    document.getElementById('bai2').style.display = 'none'
    document.getElementById('bai3').style.display = 'none'
    document.getElementById('bai4').style.display = 'none'
    document.getElementById('bai5').style.display = 'block'
}
function tong2KySo() {
    var so2ChuSo = Number(document.getElementById('so2ChuSo').value)
    var soHangChuc = Math.floor(so2ChuSo / 10)
    var soHangDonVi = so2ChuSo % 10
    var tong2KySo = soHangChuc + soHangDonVi
    document.getElementById('tong2KySo').innerHTML = 'Tổng 2 ký số bằng: ' + tong2KySo
}