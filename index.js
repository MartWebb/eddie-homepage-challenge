const footerNav = document.querySelector('.footer-nav');
const openNav = document.querySelector('.open');
const closeNav = document.querySelector('.close');
const link = document.querySelectorAll('.hamburger-link');

const navHandler = (action, amount, value) => {
    footerNav.style.marginLeft = amount;
    closeNav.style.display = value
    action === 'add'
    ? footerNav.classList.add("hamburger-nav")
    : footerNav.classList.remove("hamburger-nav")
}
openNav.addEventListener('click', () => {
    navHandler('add', 0, 'block');
});

closeNav.addEventListener('click', () => {
    navHandler('remove', '4em', 'none');
});

link.forEach(event => {
    event.addEventListener("click", () => {
        navHandler('remove', '4em', 'none');
    });
});