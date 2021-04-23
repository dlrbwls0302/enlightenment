// let productIndex = 0;

// let productInfos = document.querySelectorAll('.product-info');


// setTimeout(() => {
//     productInfos[productIndex].classList.add('active')
// }, 200);

// // SLIDE

// let isSliding = false;
// const slide = () => {
//     if (isSliding) return

//     isSliding = true
//     let currProduct = document.querySelector('.product-info.active')
//     currProduct.classList.remove('active')

//     productIndex = productIndex + 1 > productInfos.length ? 0 : productInfos + 1
//     productInfos[productIndex].classList.add('active');

//     setTimeout(() => {
//       isSliding = false
//     }, 1000)
// }

// let slideControl = document.querySelector('.slide-control');

// slideControl.onclick = () => {
//     slide()
// }