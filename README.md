<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>File Ownership DApp</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      text-align: center;
    }
    input, button {
      margin-top: 15px;
      padding: 10px;
      font-size: 16px;
    }
    #output {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>🔐 File Ownership Verification</h2>
  <p>Pilih file untuk dihitung hash (SHA-256)</p>

  <input type="file" id="fileInput">
  <br>
  <button onclick="checkFile()">Cek File</button>

  <p id="output">Belum ada file dipilih</p>

  <!-- Load JS -->
  <script src="script.js"></script>
</body>
</html>