document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Username dan password wajib diisi.");
      return;
    }

    if (username === "naufal" && password === "naufal1234") {
      window.location.href = "index.html";
    } else {
      alert("Username atau password salah.");
    }
  });

