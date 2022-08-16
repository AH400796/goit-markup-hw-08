(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const headerContainerRef = document.querySelector('[data-header-width]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    headerContainerRef.classList.toggle('mobmmenu-open');
    document.body.classList.toggle('mobmmenu-open');
  });
})();
