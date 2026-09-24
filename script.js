const slides=[...document.querySelectorAll('.hero-slide')];
const dots=[...document.querySelectorAll('.dot')];
let current=0,timer;

function showSlide(i){
  current=(i+slides.length)%slides.length;
  slides.forEach((s,n)=>s.classList.toggle('active',n===current));
  dots.forEach((d,n)=>d.classList.toggle('active',n===current));
}
function restart(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),6000)}
document.querySelector('.next').addEventListener('click',()=>{showSlide(current+1);restart()});
document.querySelector('.prev').addEventListener('click',()=>{showSlide(current-1);restart()});
dots.forEach(d=>d.addEventListener('click',()=>{showSlide(Number(d.dataset.slide));restart()}));
restart();

const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.faq-question').forEach(q=>q.addEventListener('click',()=>{
  const item=q.parentElement;
  document.querySelectorAll('.faq-item').forEach(x=>{if(x!==item)x.classList.remove('open')});
  item.classList.toggle('open');
}));

const modal=document.getElementById('quoteModal');
const openModal=()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};
const closeModal=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.quote-btn').forEach(b=>b.addEventListener('click',openModal));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  e.currentTarget.hidden=true;
  document.querySelector('.form-success').hidden=false;
});
document.querySelector('.newsletter').addEventListener('submit',e=>{
  e.preventDefault(); alert('Thank you for subscribing to Brikko.');
  e.currentTarget.reset();
});
document.getElementById('year').textContent=new Date().getFullYear();
