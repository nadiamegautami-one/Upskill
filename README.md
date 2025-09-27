# Upskill
Di website ini kalian akan mempelajari berbagai skill skill baru terutama dalam dunia creative.
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio Saya</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Portofolio Saya</h1>
    <p>Belajar skill baru dari nol menuju mahir. Semua dimulai di sini.</p>
    <button id="cta-btn">Mulai Belajar</button>
  </header>

  <main>
    <section class="skills">
      <h2>Daftar Skill</h2>
      <ul id="skill-list">
        <li>HTML & CSS Dasar</li>
        <li>JavaScript Pemula</li>
        <li>Git & GitHub</li>
      </ul>
      <input type="text" id="skill-input" placeholder="Tambah skill baru...">
      <button id="add-skill-btn">Tambah Skill</button>
    </section>
  </main>

  <footer>
    <p>© 2025 Portofolio Saya. Dibuat dengan ❤️ dan GitHub Pages.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
/* Reset style */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
}

body {
  background: #f9f9f9;
  color: #333;
  line-height: 1.6;
  text-align: center;
  padding: 20px;
}

/* Header */
header {
  padding: 50px 20px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #222;
}

header p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

button {
  background: #222;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

button:hover {
  background: #444;
}

/* Skill section */
.skills {
  margin: 40px auto;
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}

.skills h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #222;
}

.skills ul {
  list-style: none;
  margin-bottom: 15px;
}

.skills li {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 8px;
  margin: 5px 0;
}

#skill-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 70%;
}

footer {
  margin-top: 50px;
  font-size: 0.9rem;
  color: #777;
}
// Ambil elemen
const addSkillBtn = document.getElementById("add-skill-btn");
const skillInput = document.getElementById("skill-input");
const skillList = document.getElementById("skill-list");
const ctaBtn = document.getElementById("cta-btn");

// Tambahkan skill baru ke daftar
addSkillBtn.addEventListener("click", () => {
  const newSkill = skillInput.value.trim();
  if (newSkill !== "") {
    const li = document.createElement("li");
    li.textContent = newSkill;
    skillList.appendChild(li);
    skillInput.value = "";
  }
});

// Tombol CTA redirect ke bagian skill
ctaBtn.addEventListener("click", () => {
  document.querySelector(".skills").scrollIntoView({ behavior: "smooth" });
});
