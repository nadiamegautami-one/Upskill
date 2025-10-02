// Fungsi untuk menghitung hash SHA-256 dari file
async function hashFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Fungsi untuk dijalankan saat tombol ditekan
async function checkFile() {
    const fileInput = document.getElementById('fileInput');
    const output = document.getElementById('output');

    if (!fileInput.files.length) {
        output.innerText = "⚠️ Pilih file dulu!";
        return;
    }

    const file = fileInput.files[0];
    output.innerText = "⏳ Sedang menghitung hash...";

    try {
        const hash = await hashFile(file);
        output.innerText = `✅ Hash SHA-256:\n${hash}`;
    } catch (err) {
        output.innerText = "❌ Gagal menghitung hash: " + err;
    }
}