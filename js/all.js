"use strict";var slide_thumb=new Swiper(".slide-thumb",{slidesPerView:5,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slider_hero=new Swiper(".slide-principal",{effect:"fade",thumbs:{swiper:slide_thumb},autoplay:{delay:5e3,disableOnInteraction:!1}}),allFilters=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games");allFilters.forEach(function(a,t){a.addEventListener("click",function(e){e.preventDefault(),allFilters.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[t].classList.add("active"),a.classList.add("active")})});