'use strict';
window.addEventListener('DOMContentLoaded', () => {
   
    // burger

    const burger = document.querySelector('.burger'),
        list = document.querySelector('.header__list'),
        socialBurger = document.querySelector('.social_burger i'),
        socialInner = document.querySelector('.header__social-inner');
    let h = true;



    burger.addEventListener('click', () => {
        if (h === true) {
               burger.classList.toggle('burger--active');
                list.classList.toggle('header__list--active');
                socialInner.classList.remove('header__social--active');
                socialBurger.classList.remove('fa-toggle-on');
        }
    });

    socialBurger.addEventListener('click', () => {
        {
            socialBurger.classList.toggle('fa-toggle-on');
            if (socialBurger.classList.contains('fa-toggle-off')) {
                socialInner.classList.toggle('header__social--active');
                list.classList.remove('header__list--active');
                burger.classList.remove('burger--active');

            }

        }
    })

    // carousel
    
      fetch('js/images.json')
            .then(Response => Response.json())
            .then(data => {
               console.log(data.carousel);
                var i=0;
                data.carousel.forEach(obj => {
                    const itemContainer = document.getElementsByClassName('portfolio__item');
    
                    let itemImg = document.createElement('img');
                   itemImg.src = obj.url;
                   itemImg.alt = obj.caption
                   itemContainer[i].appendChild(itemImg);
                   i++;
                   console.log(i);
                     
                });
                
            })
            .catch(error => console.error(error));
       
    
}
)