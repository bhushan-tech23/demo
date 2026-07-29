/**
 * Toggle password visibility for a given input field.
 * @param {string} inputId - The ID of the password input.
 */
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const btn = input.parentElement.querySelector('.toggle-pass');
  if (!input || !btn) return;

  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  btn.textContent = isHidden ? '🙈' : '👁';
}

/* ===== Card hover effect (subtle) ===== */
const card = document.querySelector('.auth-card');
if (card) {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = 'none';
  });
}

