const imageContainer = document.querySelector('#dv-images');

fetch('https://api.github.com/repos/dharness/drawvember/contents/images')
  .then(res => res.json())
  .then(files => {
    files.forEach(({ name }) => {
      const img = document.createElement('img');
      img.setAttribute('src', `./images/${name}`);
      imageContainer.appendChild(img)
    });
  })
  .catch(err => console.log(err))