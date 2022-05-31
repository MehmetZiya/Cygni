//DOM elements
const photos = document.querySelector('.photos')
const info = document.querySelector('.info')
const tagInput = document.querySelector('form')
const preBtn = document.querySelector('.pre')
const nextBtn = document.querySelector('.next')
const pageNumber = document.querySelector('.pageNumber')

//Variables
const photoURL = 'https://live.staticflickr.com'
let tag = 'cats'
let page = 1

// Fetch the data from backend
const getImages = async (tag, page) => {
  if (page === 1) {
    preBtn.setAttribute('disabled', true)
  } else {
    preBtn.removeAttribute('disabled')
  }

  try {
    let images = await fetch(`http://localhost:8000/api/v1/${tag}/${page}`)
    images = await images.json()

    pageNumber.innerHTML = page
    return images.data.photos.photo
  } catch (error) {
    console.log(error)
    info.innerHTML = 'Photo link is not available'
  }
}

//Update the album if tag name or page number is changed
const updateAlbum = async (tag, page) => {
  info.innerHTML = 'Loading ...'
  const photos = await getImages(tag, page)
  pageNumber.innerHTML = page
  info.innerHTML = ''
  return photos
}
const isError = () => {
  photos.innerHTML = 'No images found'
}

//Inital photo album tag name is static
getImages(tag, page)
  .then((data) =>
    data.map(
      (image) =>
        (photos.innerHTML += ` 
  <div class='imageWrapper'>
  <img src= ${photoURL}/${image.server}/${image.id}_${image.secret}_c.jpg} alt='${image.id}' onerror="isError()" />
  </div>
  `)
    )
  )

  .catch((err) => (info.innerHTML = 'Images could not find ' + err.message))
