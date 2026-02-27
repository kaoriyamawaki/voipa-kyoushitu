const images = [
  "images/10sai.png",
  "images/20sai.png",
  "images/concert.png"
];

let index = 0;
const slide = document.querySelector(".slide");

function changeImage() {
  // フェードアウト
  slide.style.opacity = 0;

  setTimeout(() => {
    // 画像切り替え
    index = (index + 1) % images.length;
    slide.src = images[index];

    // フェードイン
    slide.style.opacity = 3.5;
  }, 3500); // フェード時間と合わせる
}

// 初回
setInterval(changeImage, 3500);