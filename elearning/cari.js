function cari() {
	var kata = document.formcari.keyword.value;
	var hasil = "http://www.google.com/search?q=" + kata ;
	window.open(hasil, 'google', config='height=500, width=750, scrollbars=yes location=yes');
}

function daftar() {
var nama = document.formdaftar.nama.value;
if (nama == "") alert("Nama Yang Di Masukkan Tidak Boleh Kosong")
	else alert("Selamat Datang, "+nama);
}