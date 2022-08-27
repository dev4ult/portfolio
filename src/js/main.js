const burgerBtn = document.querySelector('.drop-down-btn');
const burgerLine = document.querySelectorAll('.slice-decoration');
const dropDown = document.querySelector('.drop-down');

burgerBtn.addEventListener('click', (_) => {
  burgerLine.forEach((item) => {
    item.classList.toggle('absolute');
    item.classList.toggle('bottom-50');
  });

  navLink.forEach((item) => {
    item.classList.toggle('disable-pointer-event');
  });

  burgerLine[1].classList.toggle('invisible');

  burgerLine[0].classList.toggle('rotate-45');
  burgerLine[2].classList.toggle('-rotate-45');
  burgerLine[0].classList.toggle('bg-red');
  burgerLine[2].classList.toggle('bg-red');

  dropDown.classList.toggle('invisible');
  dropDown.classList.toggle('translate-y-24');
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => {
  link.addEventListener('click', (_) => {
    navLink.forEach((anotherLink) => {
      anotherLink.style.backgroundColor = 'white';
      anotherLink.style.color = 'black';
    });
    link.style.backgroundColor = 'black';
    link.style.color = 'white';
  });
});

const openDetail = document.querySelectorAll('.open-detail');
const closeDetail = document.querySelectorAll('.close-detail');
const projectDetail = document.querySelectorAll('.project-detail');

for (let i = 0; i < openDetail.length; i++) {
  openDetail[i].addEventListener('click', (_) => {
    projectDetail[i].style.setProperty('transform', 'translateY(100%)');
  });
  closeDetail[i].addEventListener('click', (_) => {
    projectDetail[i].style.setProperty('transform', 'translateY(0%)');
  });
}
