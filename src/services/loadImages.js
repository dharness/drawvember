var pswpElement = document.querySelectorAll('.pswp')[0]

var options = {
  index: 0
}

function extractImageData (files) {
  const promises = files.map(file => {
    const { download_url } = file
    const img = new Image()
    img.src = download_url
    return new Promise((resolve, reject) => {
      img.onload = () => {
        const { width: w, height: h, src } = img
        resolve({ w, h, src})
      }
    })
  })
  return Promise.all(promises)
}

function loadImages() {
  return fetch('https://api.github.com/repos/dharness/drawvember/contents/images')
  .then(res => res.json())
  .then(extractImageData)
  .catch(err => console.log(err))
}

export default loadImages;
