/* Use variables to define the images associated with the modal depending on image clicked. */

const imgSunAndReeds = [
  'images/sun_and_reeds.jpg',
  'images/sun_and_reeds.jpg',
  'images/sun_and_reeds.jpg'
]

const imgIsis = [
  'images/isis.jpg',
  'images/isis.jpg',
  'images/isis.jpg',
]

const imgSkulls = [
  'images/skulls.jpg',
  'images/skulls.jpg',
  'images/skulls.jpg'
]

const imgLotus = [
  'images/lotus.jpg',
  'images/lotus.jpg',
  'images/lotus.jpg'
]

/* Open Modal Window and insert images from appropriate array. */

function openModal() {
  /* open the modal window */
  document.getElementById('gallery__modal').style.display = 'block';
  /* append a div element to the appropriate HTML element for the associated images based on image clicked */
  let imgID = event.target.id;
  console.log(imgID);
}

/* Close Modal Window */

function closeModal() {
  document.getElementByClassName('gallery__modal-close').style.display = 'none';
}
