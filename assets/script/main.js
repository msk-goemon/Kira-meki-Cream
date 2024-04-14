$('.voices-items__inner').slick({
  infinite: true, // 無限ループスライド
  slidesToShow: 3, // 一度に表示するスライド数
  slidesToScroll: 1, // 一度にスクロールするスライド数
  prevArrow: '<button type="button" class="slick-prev">Previous</button>', // 前へボタンのカスタムHTML
  nextArrow: '<button type="button" class="slick-next">Next</button>', // 次へボタンのカスタムHTML
  responsive: [ // レスポンシブ設定
      {
          breakpoint: 1024, // この幅以下で切り替える
          settings: {
              slidesToShow: 2, // 中幅のデバイスでは2枚表示
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1, // 小幅のデバイスでは1枚表示
          }
      }
  ]
});