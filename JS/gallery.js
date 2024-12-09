const images = [
    {
        preview: "./images/1.webp",
        original:"./images/1.webp",
        description: 'Зображення 1'
      },
    {
      preview: "./images/0a839f2b7b18587f16237fe1911b6947.jpg",
      original: "./images/0a839f2b7b18587f16237fe1911b6947.jpg",
      description: 'Зображення 2'
    },
    {
        preview: "./images/beautiful-flexible-female-circus-artist-dancing-with-aerial-silk-sky_403777-1379 (1).png",
        original: "./images/beautiful-flexible-female-circus-artist-dancing-with-aerial-silk-sky_403777-1379 (1).png",
        description: 'Зображення 3'
      },
      {
        preview: "./images/d74e22970daeab285df198062e00d337.jpg",
        original: "./images/d74e22970daeab285df198062e00d337.jpg",
        description: 'Зображення 4'
      },
      {
        preview: "./images/5a4f7fde13bbb18fc8033732bc9dbfc4.jpg",
        original: "./images/5a4f7fde13bbb18fc8033732bc9dbfc4.jpg",
        description: 'Зображення 5'
      },
      {
        preview: "./images/19f05470876ba9b74a114a209be1edf5.jpg",
        original: "./images/19f05470876ba9b74a114a209be1edf5.jpg",
        description: 'Зображення 6'
      },
      {
        preview: "./images/580039271e1e1657ca2069353708891c.jpg",
        original: "./images/580039271e1e1657ca2069353708891c.jpg",
        description: 'Зображення 7'
      },
      {
        preview: "./images/Nologo.jpg",
        original: "./images/Nologo.jpg",
        description: 'Зображення 8'
      },
    {
      preview: "./images/silhouette-flexible-woman-acrobat-aerial-silk-sunset-concept-beauty_403777-235.png",
      original: "./images/silhouette-flexible-woman-acrobat-aerial-silk-sunset-concept-beauty_403777-235.png",
      description: 'Зображення 9'
    },
  ];

  const gallery = document.querySelector('.gallery');

  images.forEach(({ preview, original, description }) => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');
  
  const image = document.createElement('img');
  image.src = preview;
  image.alt = description;
  image.dataset.source = original; 
  image.classList.add('gallery-image');
  
  listItem.appendChild(image);
  gallery.appendChild(listItem);
});

  gallery.addEventListener('click', (event) => {
    const image = event.target;
    
    if (image.tagName === 'IMG') {
      const originalImageUrl = image.dataset.source;
  
      const modal = basicLightbox.create(`
        <img src="${originalImageUrl}" alt="Full-size image">
      `);
  
      modal.show();
    }
  });
  