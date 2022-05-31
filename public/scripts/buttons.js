//Next Button events
nextBtn.addEventListener('click', (e) => {
  e.preventDefault()
  photos.innerHTML = ''
  page += 1
  updateAlbum(tag, page)
    .then((data) =>
      data.map(
        (image) =>
          (photos.innerHTML += ` 
  <div class='imageWrapper'>
  <img src=${photoURL}/${image.server}/${image.id}_${image.secret}_c.jpg} onerror="isError()"  />
  </div>
  `)
      )
    )

    .catch((err) => (info.innerHTML = 'Images could not find ' + err))

  pageNumber.innerHTML = page
})

//Previos Button events
preBtn.addEventListener('click', (e) => {
  e.preventDefault()
  page -= 1
  photos.innerHTML = ''

  updateAlbum(tag, page)
    .then((data) =>
      data.map(
        (image) =>
          (photos.innerHTML += ` 
  <div class='imageWrapper'>
  <img src=${photoURL}/${image.server}/${image.id}_${image.secret}_c.jpg} onerror="isError()" />
  </div>
  `)
      )
    )
    .catch((err) => (info.innerHTML = 'Images could not find ' + err))

  pageNumber.innerHTML = page
})
