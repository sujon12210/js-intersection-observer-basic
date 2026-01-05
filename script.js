const box = document.getElementById('box');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }
  });
});

observer.observe(box);
