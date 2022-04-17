/* Use variables to define the images associated with the modal depending on image clicked. */

const imgSunAndReeds = [
  {
    'path': '../static/images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
  }
]


const imgIsis = [
  {
    'path': '../static/images/isis.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/isis.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/isis.jpg',
    'alt': 'alt description for image',
  }
]

const imgSkulls = [
  {
    'path': '../static/images/skulls.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/skulls.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/skulls.jpg',
    'alt': 'alt description for image',
  }
]

const imgLotus = [
  {
    'path': '../static/images/lotus.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/lotus.jpg',
    'alt': 'alt description for image',
  },
  {
    'path': '../static/images/lotus.jpg',
    'alt': 'alt description for image',
  }
]

/* set original status of modal window */
document.getElementById('modal').style.display = 'none';

/* Open Modal Window and insert images from appropriate array. */

function populateDom(arr) {
  for (let i = 0; i < arr.length; i++) {
    /* outer slide container*/
    let container = document.createElement('div');
    container.className = 'modal__slides';
    /* slide number -- append to container*/
    let slideNum = document.createElement('div');
    slideNum.className = 'modal__slide-count';
    let slideNumText = document.createTextNode((i + 1) + ' / ' + arr.length);
    slideNum.appendChild(slideNumText);
    container.appendChild(slideNum);
    /* slide image -- append to container*/
    let slideImg = document.createElement('img');
    slideImg.className = 'modal__slide-img';
    slideImg.src = arr[i]['path'];
    slideImg.alt = arr[i]['alt'];
    container.appendChild(slideImg);
    /* append new container to parent element */
    let parentDiv = document.getElementById('modal__content');
    parentDiv.appendChild(container);
  }
}

function populateThumbnail(arr) {
  for (let i = 0; i < arr.length; i++) {
    /* outer thumbnail container*/
    let li = document.createElement('li');
    li.className = 'modal__demo-item';
    /* slide image -- append to container*/
    let img = document.createElement('img');
    img.className = 'modal__demo';
    img.src = arr[i]['path'];
    img.alt = arr[i]['alt'];
    img.setAttribute('onclick', 'currentSlide(' + (i + 1) + ')');
    li.appendChild(img);
    /* append new container to parent element */
    let ul = document.getElementById('modal__demo-container');
    ul.appendChild(li);
  }
}


function openModal() {
  /* open the modal window */
  document.getElementById('modal').style.display = 'block';
  /* append a div element to the appropriate HTML element for the associated images based on image clicked */
  let imgID = event.target.id;
  if (imgID == 'gallery__image_item_sun-reeds') {
    populateDom(imgSunAndReeds);
  } else if (imgID == 'gallery__image_item_isis') {
    populateDom(imgIsis);
  } else if (imgID == 'gallery__image_item_skulls') {
    populateDom(imgSkulls);
  } else if (imgID == 'gallery__image_item_lotus') {
    populateDom(imgLotus);
  } else {
    /* if there's nothing to open, close the modal window. */
    closeModal();
  }

  /* append additional modal elements after images */
  let parentDiv = document.getElementById('modal__content');
  /* prev slide */
  let slidePrev = document.createElement('a');
  slidePrev.className = 'modal__button modal__button_prev';
  slidePrev.setAttribute('onclick', 'plusSlides(-1)');
  let slidePrevText = document.createTextNode('\u{276E}');
  slidePrev.appendChild(slidePrevText);
  parentDiv.appendChild(slidePrev);
  /* next slide */
  let slideNext = document.createElement('a');
  slideNext.className = 'modal__button modal__button_next';
  slideNext.setAttribute('onclick', 'plusSlides(1)');
  let slideNextText = document.createTextNode('\u{276F}');
  slideNext.appendChild(slideNextText);
  parentDiv.appendChild(slideNext);
  /* caption */
  let captionContainer = document.createElement('div');
  captionContainer.className = 'modal__caption-container';
  let caption = document.createElement('p');
  caption.className = 'modal__img-caption';
  caption.id = 'modal-img-caption';
  captionContainer.appendChild(caption);
  parentDiv.appendChild(captionContainer);

  /* append thumbnail images below elements */
  let ul = document.createElement('ul');
  ul.className = 'modal__demo-container';
  ul.id = 'modal__demo-container';
  parentDiv.appendChild(ul);

  if (imgID == 'gallery__image_item_sun-reeds') {
    populateThumbnail(imgSunAndReeds);
  } else if (imgID == 'gallery__image_item_isis') {
    populateThumbnail(imgIsis);
  } else if (imgID == 'gallery__image_item_skulls') {
    populateThumbnail(imgSkulls);
  } else if (imgID == 'gallery__image_item_lotus') {
    populateThumbnail(imgLotus);
  } else {
    /* if there's nothing to open, close the modal window. */
    closeModal();
  }

}

/* Close Modal Window */

/* clear out the child nodes of gallery__modal-content when modal window is closed */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  /* remove child nodes */
  let parentDiv = document.getElementById('modal__content');
  removeAllChildNodes(parentDiv);
}

/* populate slides in the modal */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('modal__slides');
  let dots = document.getElementsByClassName('modal__demo');
  let captionText = document.getElementById('modal-img-caption');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    /* remove active modifier from class list*/
    dots[i].className = dots[i].className.replace('modal__demo_active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' modal__demo_active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
