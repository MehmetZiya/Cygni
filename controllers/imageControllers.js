import fetch from 'node-fetch'

const perPage = 30

export const getImages = async (req, res) => {
  const tag = req.params.tag
  const page = req.params.page
  let images = await fetch(
    `${process.env.URL}&api_key=${process.env.API_KEY}&tags=${tag}&content_type=1&media=photos&per_page=${perPage}&format=json&nojsoncallback=1&page=${page}`
  )
  if (images) {
    images = await images.json()
    res.status(200).json({ success: true, data: images })
  } else if (res.statusCode === 404) {
    res.status(404).json({ success: false, error: 'No images found' })
  } else if (res.statusCode === 500) {
    res.status(500).json({ success: false, error: 'Something went wrong' })
  }
}
