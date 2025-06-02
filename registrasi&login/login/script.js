document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelectorAll("input")[0].value.trim();
  const pass = document.querySelectorAll("input")[1].value.trim();

  fetch("https://script.google.com/macros/s/AKfycbzkI4Km4lst1VD4NL3SwdxyiQ8mWcUY6T4Z9avMRPG8Dhmp6hsDB20njYg_YNtIRA_mvw/exec") // GET mode
    .then(res => res.json())
    .then(data => {
      const user = data.find(u => u.email === email);

      if (!user) return alert("Email tidak terdaftar!");
      if (user.password !== pass) return alert("Password salah!");

      alert("Login berhasil!");
      window.location.href = "https://ardinirmansyah.github.io/";
    })
    .catch(err => alert("Error: " + err));
});
