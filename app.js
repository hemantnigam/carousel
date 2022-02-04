const container = document.querySelector(".carousel-container");
let currentNode = 0
renderImage(currentNode);

document.querySelector(".right-arrow").addEventListener("click", () => {
  document.querySelector('.carousel-item').remove();
  currentNode++;
  if(currentNode>5) currentNode = 0;
  renderImage()
});

document.querySelector(".left-arrow").addEventListener("click", () => {
  document.querySelector('.carousel-item').remove();
  currentNode--;
  if(currentNode<0) currentNode = 5;
  renderImage()
});

function renderImage() {
  const item = document.createElement('div')
  item.classList.add('carousel-item','slide')
  const img = document.createElement('img')
  img.setAttribute('src',`./assets/image${currentNode+1}.jpeg`)
  img.setAttribute('alt','image not found')
  item.appendChild(img)
  container.appendChild(item)
}
