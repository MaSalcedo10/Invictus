// Validación del formulario de registro
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const clearBtn = document.querySelector("#clearBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lastName = document.querySelector("#lastName").value.trim();
    const firstName = document.querySelector("#firstName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();

    if (!lastName || !firstName || !email || !phone) {
      alert("Please complete all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!/^\d{7,15}$/.test(phone)) {
      alert("Enter a valid phone number.");
      return;
    }

    alert("Registration successful!");
    form.reset();
  });

  clearBtn.addEventListener("click", () => {
    form.reset();
  });
});
