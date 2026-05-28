// ==============================
// COPY CODE FUNCTION (SAFE + MODERN)
// ==============================
function copyCode(id) {
  const codeElement = document.getElementById(id);

  if (!codeElement) return;

  const text = codeElement.innerText;

  navigator.clipboard.writeText(text)
    .then(() => {
      showToast("Code copied successfully!");
    })
    .catch(() => {
      showToast("Failed to copy code", true);
    });
}


// ==============================
// TOAST NOTIFICATION (BETTER THAN ALERT)
// ==============================
function showToast(message, isError = false) {
  const toast = document.createElement("div");

  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.padding = "12px 16px";
  toast.style.borderRadius = "8px";
  toast.style.color = "#fff";
  toast.style.fontSize = "14px";
  toast.style.zIndex = "9999";
  toast.style.background = isError ? "#ff4d4d" : "#00d9ff";
  toast.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  toast.style.transition = "0.3s";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
const cards = document.querySelectorAll(".card");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

// apply observer
cards.forEach(card => {
  card.classList.add("hidden");
  revealObserver.observe(card);
});