/* Use variables to define the images associated with the modal depending on image clicked. */

const imgSunAndReeds = [
  {
    'path': 'images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/sun_and_reeds.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  }
]


const imgIsis = [
  {
    'path': 'images/isis.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/isis.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/isis.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  }
]

const imgSkulls = [
  {
    'path': 'images/skulls.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/skulls.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/skulls.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  }
]

const imgLotus = [
  {
    'path': 'images/lotus.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/lotus.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  },
  {
    'path': 'images/lotus.jpg',
    'alt': 'alt description for image',
    'caption': 'caption for image'
  }
]

/* set original status of modal window */
document.getElementById('gallery__modal').style.display = 'none';

/* Open Modal Window and insert images from appropriate array. */

function populateDom(arr) {
  for (let i = 0; i < arr.length; i++) {
    /* outer slide container*/
    let container = document.createElement('div');
    container.className = 'gallery__modal-slides';
    /* slide number -- append to container*/
    let slideNum = document.createElement('div');
    slideNum.className = 'gallery__modal-slide-count';
    let slideNumText = document.createTextNode((i + 1) + ' / ' + arr.length);
    slideNum.appendChild(slideNumText);
    container.appendChild(slideNum);
    /* slide image -- append to container*/
    let slideImg = document.createElement('img');
    slideImg.className = 'gallery__modal-slide-img';
    slideImg.src = arr[i]['path'];
    slideImg.alt = arr[i]['caption'];
    container.appendChild(slideImg);
    /* append new container to parent element */
    let parentDiv = document.getElementById('gallery__modal-content');
    parentDiv.appendChild(container);
  }
}

function openModal() {
  /* open the modal window */
  document.getElementById('gallery__modal').style.display = 'block';
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
  let parentDiv = document.getElementById('gallery__modal-content');
  /* prev slide */
  let slidePrev = document.createElement('a');
  slidePrev.className = 'gallery__modal-img-prev';
  slidePrev.onclick = 'plusSlides(-1)'
  let slidePrevText = document.createTextNode('\u{276E}');
  slidePrev.appendChild(slidePrevText);
  parentDiv.appendChild(slidePrev);
  /* next slide */
  let slideNext = document.createElement('a');
  slideNext.className = 'gallery__modal-img-next';
  slideNext.onclick = 'plusSlides(1)';
  let slideNextText = document.createTextNode('\u{276F}');
  slideNext.appendChild(slideNextText);
  parentDiv.appendChild(slideNext);
  /* caption */
  let captionContainer = document.createElement('div');
  captionContainer.className = 'gallery__modal-caption-container';
  let caption = document.createElement('p');
  caption.className = 'gallery__modal-img-caption';
  caption.id = 'gallery__modal-img-caption';
  captionContainer.appendChild(caption);
  parentDiv.appendChild(captionContainer);
}

/* Close Modal Window */

/* clear out the child nodes of gallery__modal-content when modal window is closed */
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function closeModal() {
  document.getElementById('gallery__modal').style.display = 'none';
  /* remove child nodes */
  let parentDiv = document.getElementById('gallery__modal-content');
  removeAllChildNodes(parentDiv);
}
