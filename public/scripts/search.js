tagInput.addEventListener('submit', (e) => {
  e.preventDefault()
  tag = tagInput.tag.value.trim()
  tagInput.reset()
  photos.innerHTML = ''
  page = 1

  //update album UI with the new tag
  updateAlbum(tag, page).then((data) =>
    data.map(
      (image) =>
        (photos.innerHTML += ` 
  <div class='imageWrapper'>
  <img src=${photoURL}/${image.server}/${image.id}_${image.secret}_c.jpg}  />
  </div>
  `)
    )
  )
})
