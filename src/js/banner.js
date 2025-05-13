document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  const cookieCloseBtn = document.getElementById('cookie-close-btn');

  if (localStorage.getItem('cookieConsent')) {
    banner.classList.remove('show-cookie-banner');
  } else {
    banner.classList.add('show-cookie-banner');
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.remove('show-cookie-banner');
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.classList.remove('show-cookie-banner');
  });

  cookieCloseBtn.addEventListener('click', () => {
    banner.classList.remove('show-cookie-banner');
  });
});
