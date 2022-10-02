/* Use variables to define the images associated with the modal depending on image clicked. */

const imgEyeHorus = [
  {
    'path': '../static/images/eye-of-horus_02_wm.jpg',
    'alt': 'The Eye of Horus, also known as the wedjat or the udjat, symbolizes protection and well-being in the Ancient Egyptian belief system.',
  },
  {
    'path': '../static/images/eye-of-horus_00_wm.jpg',
    'alt': 'The Eye of Horus, also known as the wedjat or the udjat, symbolizes protection and well-being in the Ancient Egyptian belief system.',
  },
  {
    'path': '../static/images/eye-of-horus_03_wm.jpg',
    'alt': 'The Eye of Horus, also known as the wedjat or the udjat, symbolizes protection and well-being in the Ancient Egyptian belief system.',
  }
]

const imgSunAndReeds = [
  {
    'path': '../static/images/sun-reeds_02_wm.jpg',
    'alt': 'This piece pays tribute to imagery common throughout Ancient Egyptian Art: the sun, lotus blossoms, and papyrus reeds.',
  },
  {
    'path': '../static/images/sun-reeds_00_wm.jpg',
    'alt': 'This piece pays tribute to imagery common throughout Ancient Egyptian Art: the sun, lotus blossoms, and papyrus reeds.',
  },
  {
    'path': '../static/images/sun-reeds_01_wm.jpg',
    'alt': 'This piece pays tribute to imagery common throughout Ancient Egyptian Art: the sun, lotus blossoms, and papyrus reeds.',
  }
]

const imgIsis = [
  {
    'path': '../static/images/winged-goddess_02_wm.jpg',
    'alt': 'Winged deities appear as a symbol of protection in Ancient Egyptian art. Among the most common goddesses are Isis, the wife of Osiris; her sister Nepthys; and Maat.',
  },
  {
    'path': '../static/images/winged-goddess_01_wm.jpg',
    'alt': 'Winged deities appear as a symbol of protection in Ancient Egyptian art. Among the most common goddesses are Isis, the wife of Osiris; her sister Nepthys; and Maat.',
  },
  {
    'path': '../static/images/winged-goddess_03_wm.jpg',
    'alt': 'Winged deities appear as a symbol of protection in Ancient Egyptian art. Among the most common goddesses are Isis, the wife of Osiris; her sister Nepthys; and Maat.',
  }
]

const imgLotus = [
  {
    'path': '../static/images/lotus_02_wm.jpg',
    'alt': 'The Ancient Egyptians saw the lotus blossom as a symbol of rebirth.',
  },
  {
    'path': '../static/images/lotus_03_wm.jpg',
    'alt': 'The Ancient Egyptians saw the lotus blossom as a symbol of rebirth.',
  },
  {
    'path': '../static/images/lotus_00_wm.jpg',
    'alt': 'The Ancient Egyptians saw the lotus blossom as a symbol of rebirth.',
  }
]

const imgDjedKnotIsis = [
  {
    'path': '../static/images/djed-knot-isis_00_wm.jpg',
    'alt': 'The Djed pillar and the Knot of Isis represent husband-and-wife deities Osiris and Isis, respectivitely. This pattern features prominently in the funerary goods of King Tutankhamun.',
  },
  {
    'path': '../static/images/djed-knot-isis_01_wm.jpg',
    'alt': 'The Djed pillar and the Knot of Isis represent husband-and-wife deities Osiris and Isis, respectivitely. This pattern features prominently in the funerary goods of King Tutankhamun.',
  },
  {
    'path': '../static/images/djed-knot-isis_03_wm.jpg',
    'alt': 'The Djed pillar and the Knot of Isis represent husband-and-wife deities Osiris and Isis, respectivitely. This pattern features prominently in the funerary goods of King Tutankhamun.',
  }
]

const imgAten = [
  {
    'path': '../static/images/aten_03_wm.jpg',
    'alt': 'The Pharaoh Akhenaten ruled shortly before King Tutankhamun. He imposed a new religion on Ancient Egypt during his reign: instead of worshipping their traditional pantheon, they worshipped only the Aten, or sun disk. The hieroglyphs in this design translate to "Aten".',
  },
  {
    'path': '../static/images/aten_00_wm.jpg',
    'alt': 'The Pharaoh Akhenaten ruled shortly before King Tutankhamun. He imposed a new religion on Ancient Egypt during his reign: instead of worshipping their traditional pantheon, they worshipped only the Aten, or sun disk. The hieroglyphs in this design translate to "Aten".',
  },
  {
    'path': '../static/images/aten_01_wm.jpg',
    'alt': 'The Pharaoh Akhenaten ruled shortly before King Tutankhamun. He imposed a new religion on Ancient Egypt during his reign: instead of worshipping their traditional pantheon, they worshipped only the Aten, or sun disk. The hieroglyphs in this design translate to "Aten".',
  }
]

const imgSkulls = [
  {
    'path': '../static/images/skull_01_wm.jpg',
    'alt': 'Skulls relate more closely to my favorite holiday: Halloween. Although uncommon in Ancient Egyptian art, they are a frequent sight in tomb excavations.',
  },
  {
    'path': '../static/images/skull_02_wm.jpg',
    'alt': 'Skulls relate more closely to my favorite holiday: Halloween. Although uncommon in Ancient Egyptian art, they are a frequent sight in tomb excavations.',
  },
  {
    'path': '../static/images/skull_05_wm.jpg',
    'alt': 'Skulls relate more closely to my favorite holiday: Halloween. Although uncommon in Ancient Egyptian art, they are a frequent sight in tomb excavations.',
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
  } else if (imgID == 'gallery__image_item_djed') {
    populateDom(imgDjedKnotIsis)
  } else if (imgID == 'gallery__image_item_eye-horus') {
    populateDom(imgEyeHorus)
  } else if (imgID == 'gallery__image_item_aten') {
    populateDom(imgAten)
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
  } else if (imgID == 'gallery__image_item_djed') {
    populateThumbnail(imgDjedKnotIsis)
  } else if (imgID == 'gallery__image_item_eye-horus') {
    populateThumbnail(imgEyeHorus)
  } else if (imgID == 'gallery__image_item_aten') {
    populateThumbnail(imgAten)
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
