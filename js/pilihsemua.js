// Ambil elemen checkbox "Pilih Semua" dan semua elemen checkbox-item
const pilihSemuaCheckbox = document.getElementById('pilihSemua');
const itemCheckboxes = document.querySelectorAll('.item');

// Tambahkan event listener untuk checkbox "Pilih Semua"
pilihSemuaCheckbox.addEventListener('change', function () {
    itemCheckboxes.forEach(function (itemCheckbox) {
        itemCheckbox.checked = pilihSemuaCheckbox.checked;
    });
});
