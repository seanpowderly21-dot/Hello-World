/* CallBack demo interactions. Authentication and portal data are client-side only. */
(() => {
  const DEMO_EMAIL = 'demo@callback.co';
  const DEMO_PASSWORD = 'demo123';
  const SESSION_KEY = 'callback-demo-session';
  const page = document.body.dataset.page;

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  if (page === 'login') {
    if (sessionStorage.getItem(SESSION_KEY) === 'active') window.location.replace('/portal');
    const form = document.getElementById('login-form');
    const error = document.getElementById('login-error');
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value;
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, 'active');
        window.location.assign('/portal');
        return;
      }
      error.textContent = 'That demo login didn’t match. Try demo@callback.co and demo123.';
      error.hidden = false;
    });
  }

  if (page === 'portal') {
    if (sessionStorage.getItem(SESSION_KEY) !== 'active') {
      window.location.replace('/login');
      return;
    }
    const dateNode = document.querySelector('[data-current-date]');
    if (dateNode) dateNode.textContent = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date());

    const toast = document.getElementById('demo-toast');
    let toastTimer;
    const showToast = (message) => {
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
    };
    document.getElementById('logout-button')?.addEventListener('click', () => {
      sessionStorage.removeItem(SESSION_KEY);
      window.location.assign('/login');
    });
    document.getElementById('test-message-button')?.addEventListener('click', () => {
      showToast('Demo reply sent! No real SMS was sent.');
    });
    document.getElementById('connect-number-button')?.addEventListener('click', () => {
      showToast('Phone setup isn’t available in this demo.');
    });
    document.getElementById('activity-filter')?.addEventListener('click', () => {
      showToast('You’re viewing all sample activity.');
    });
  }
})();
