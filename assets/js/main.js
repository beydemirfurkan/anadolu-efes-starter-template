const swiperHero = new Swiper(".swiper-hero", {
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-custom-next",
        prevEl: ".swiper-button-custom-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    grabCursor: true,
});


const swiperCircle = new Swiper(".swiper-circle", {

    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,

});


const circleData = [
    {
        active: false,
        img: 'assets/image/circle-slide-nav.png',
        title: 'title 1',
    },
    
    {
        active: false,
        img: 'assets/image/circle-slide-nav.png',
        title: 'title 2',
    },
    
    {
        active: true,
        img: 'assets/image/circle-slide-nav.png',
        title: 'title 3',
    },
    
    {
        active: false,
        img: 'assets/image/circle-slide-nav.png',
        title: 'title 4',
    },
    
];

circleData.map((data, index) => {
    let active = data.active ? 'active' : '';
    let outline = index <= 3 ? '' : 'd-none';
    let item = `
    <div class="circle-navigation-item ${outline} ${active}" style="--i:${index + 1}" data-swiper-index="${index + 1}"
    data-index="${index + 1}">
        <div class="circle-navigation-item-inner">
        <div class="circle-navigation-image">
            <img src="${data.img}" alt="" >
        </div>
        <div class="circle-navigation-item-dot"></div>
        <div class="circle-navigation-description pt-2 px-3">
            <p>${data.title}</p>
        </div>
        </div>
    </div>
    `;

    $('.circle-navigation-2').append(item);
});


$(".circle-navigation-item").click(function() {
    let this_obj = $(this);
    let selected_swiper_index = this_obj.data('swiper-index');
    let selected_index = this_obj.data('index');
    let active_index = $('.circle-navigation-item.active').data('index');
    swiperCircle.slideTo(selected_swiper_index);

    let circle_nav_items = $('.circle-navigation-item');
    circle_nav_items.removeClass("active");
    $(this).addClass("active");

    let currentRotation = $(this).parent().css("transform");
    let currentRotation2 = $('.circle-navigation-item-inner').css("transform");
    let newRotation;
    if (selected_index > active_index) {
        let length = circle_nav_items.length;
        if (1 == active_index && selected_index == length) {
            newRotation = currentRotation + 'rotate(90deg)';
            newRotation2 = currentRotation2 + 'rotate(-90deg)';
        }
        else if (1 == active_index && selected_index == 2) {
            newRotation = currentRotation + 'rotate(-90deg)';
            newRotation2 = currentRotation2 + 'rotate(90deg)';
        }
        else {
            newRotation = currentRotation + 'rotate(-90deg)';
            newRotation2 = currentRotation2 + 'rotate(90deg)';
        }
    }
    else if (selected_index < active_index) {
        let length = circle_nav_items.length;
        if (length == active_index && selected_index == 1) {
            newRotation = currentRotation + 'rotate(-90deg)';
            newRotation2 = currentRotation2 + 'rotate(90deg)';
        }
        else if (length == active_index && selected_index == 3) {
            newRotation = currentRotation + 'rotate(90deg)';
            newRotation2 = currentRotation2 + 'rotate(-90deg)';
        }
        else {
            newRotation = currentRotation + 'rotate(90deg)';
            newRotation2 = currentRotation2 + 'rotate(-90deg)';
        }
    }
    $(this).parent().css('transform', newRotation);
    $('.circle-navigation-item-inner').css('transform', newRotation2);
});


$("header ul li .desktop-link").click(function (e) { 
    $("header ul li .desktop-link").not(this).removeClass("active");
    $(this).addClass("active");
 })





var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})