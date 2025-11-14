"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom-in");

  // IntersectionObserverを作成
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 画面に40%以上見えたとき
      if (entry.isIntersecting) {
        const target = entry.target;

        // 親要素内の同じ.group内に並ぶzoom要素を取得（任意調整可）
        const siblings = target.parentElement.querySelectorAll(".zoom-in");

        siblings.forEach((el, index) => {
          // indexに応じて遅延時間を設定（例：0.2秒ずつ遅延）
          setTimeout(() => {
            el.classList.add("is-animated");
          }, index * 200);
        });

        // 一度だけ実行したい場合は監視解除
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.4 // 40%見えたら発火
  });

  zoomElements.forEach(el => observer.observe(el));
});