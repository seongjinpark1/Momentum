const img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const backgImg = img[Math.floor(Math.random() * img.length)];
const background = document.createElement('img');
background.src = `img/${backgImg}`;
background.classList.add('background');
document.body.append(background);
