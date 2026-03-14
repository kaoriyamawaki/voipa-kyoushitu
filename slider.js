const images_pc = [
  "images/top_1_PC.png",
  "images/top_2_PC.png",
  "images/top_3_PC.png"
];

const images_sp = [
  "images/top_1_sp.png",
  "images/top_2_sp.png",
  "images/top_3_sp.png"
];

const images = window.innerWidth <= 768 ? images_sp : images_pc;

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
    slide.style.opacity = 4;
  }, 4000); // フェード時間と合わせる
}

// 初回
setInterval(changeImage, 4000);
