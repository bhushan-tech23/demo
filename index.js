const form = document.getElementById('loginForm');
const status = document.getElementById('status');
const card = document.getElementById('loginCard');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

const setStatus = (message, isError = false) => {
  status.textContent = message;
  status.style.color = isError ? '#ff8fa3' : '#bceeff';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    setStatus('Please fill in both fields.', true);
    return;
  }

  const button = form.querySelector('.btn');
  button.textContent = 'Connecting...';
  button.disabled = true;
  setStatus('Authenticating your session...');

  window.setTimeout(() => {
    button.textContent = 'Enter the portal';
    button.disabled = false;
    setStatus(`Welcome back, ${email.split('@')[0]}.`);
  }, 1400);
});

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? '🙈' : '👁';
});

document.querySelectorAll('.input-group input').forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('is-focused');
  });

  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('is-focused');
  });
});

card.addEventListener('pointermove', (event) => {
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
});

card.addEventListener('pointerleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0px)';
});
