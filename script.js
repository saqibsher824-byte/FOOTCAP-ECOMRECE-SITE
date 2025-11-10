const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const g = document.querySelector('.g');
const rightBtn7 = document.querySelector('.right-btn7')
const leftBtn7 = document.querySelector('.left-btn7')

leftBtn7.addEventListener('click', () => {
    console.log("jkhhhj ")
    g.scrollBy({ left: -900, behavior: 'smooth' });
});

rightBtn7.addEventListener('click', () => {
    g.scrollBy({ left: 900, behavior: 'smooth' });
});


  let bgcolor=document.querySelector(".color");
    let animate=document.querySelector(".animate")
    let animat=document.querySelector(".animat")
    let anima=document.querySelector(".anima")
    let nim=document.querySelector(".nim")
    let f=document.querySelector(".f")
    let l=document.querySelector(".l")
    let re=document.querySelector(".re")
        window.addEventListener("scroll",()=>{
     
            
         if (window.pageYOffset >300) {
                animate.style.transform = "translateX(0)";
                
            }
                 
            if (window.pageYOffset > 600) {
                animat.style.transform = "translateX(0)";

            }

            
            if (window.pageYOffset > 1000) {
                anima.style.transform = "translateX(0)";

            }
            if (window.pageYOffset > 1300) {
                console.log("sdff")
                nim.style.transform = "translateY(0)";
                

            }
              if (window.pageYOffset > 1900) {
                console.log("sdff")
                l.style.transform = "translateX(0)";
                

            }
            if (window.pageYOffset > 1900) {
                console.log("sdff")
                re.style.transform = "translateX(0)";


             }
            if (window.pageYOffset > 3400) {
                console.log("sdff")
                f.style.transform = "translateY(0)";


            }
        })