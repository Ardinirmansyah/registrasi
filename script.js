document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelectorAll("input")[0].value.trim();
  const email = document.querySelectorAll("input")[1].value.trim();
  const pass = document.querySelectorAll("input")[2].value.trim();
  const confirm = document.querySelectorAll("input")[3].value.trim();

  if (!name || !email || !pass || !confirm) return alert("Semua field wajib diisi!");
  if (pass !== confirm) return alert("Password tidak cocok!");

  fetch("https://script.google.com/macros/s/AKfycbzkI4Km4lst1VD4NL3SwdxyiQ8mWcUY6T4Z9avMRPG8Dhmp6hsDB20njYg_YNtIRA_mvw/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ name, email, password: pass }),
    headers: { "Content-Type": "application/json" }
  }).then(() => {
    alert("Registrasi berhasil!");
    window.location.href = "./login/login.html";
  });
});
