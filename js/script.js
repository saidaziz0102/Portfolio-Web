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

    const popup = document.querySelector('.popup'),
    closeBtn = document.querySelector('.close-btn');

    // service-json

    let http = new XMLHttpRequest();
    http.open('GET', 'js/images.json', true);
    http.setRequestHeader('Content-type', 'images/json; charset=utf-8');
    http.send();
    http.onload = function () {
        const images = JSON.parse(this.responseText);
        let result = '';
        for (let item of images.service) {
            result += `
                    <div class="service__item" >
    <img src="${item.url}" alt="${item.caption}">
    <h2>${item.title}</h2>
    <p>${item.text}</p>
    <a href="https://t.me/seid_aziz">${item.link}</a>
    </div>
                    `
        }
        
        document.querySelector('.service__wrapper').innerHTML = result;

        // popup-service

     document.querySelectorAll('.service__item').forEach(item => {
            item.onclick = () => {
                popup.classList.toggle('active');
           popup.querySelector('.active-popup img').src = item.querySelector('img').src;
           popup.querySelector('.active-popup h2').innerHTML = item.querySelector('h2').innerText;
           popup.querySelector('.active-popup p').innerHTML = item.querySelector('p').innerText;
            }
        });

    }

        // popup-about-me

        document.querySelectorAll('.about__item').forEach(item => {
            item.onclick = () => {
                popup.classList.toggle('active');
                popup.querySelector('.active-popup img').src = item.querySelector('img').src;
                popup.querySelector('.active-popup h2').innerHTML = item.querySelector('h1').innerText;
                popup.querySelector('.active-popup p').innerHTML = item.querySelector('p').innerText;

            }
        });

      closeBtn.addEventListener('click', () =>{
            popup.classList.toggle('active');
        }) ; 

        document.addEventListener("keydown", (e) => {
            if (e.code === "Escape" && popup.classList.contains("active")) {
            popup.classList.toggle('active');
            }
        });  


   
});