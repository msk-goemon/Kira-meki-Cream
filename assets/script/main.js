$(function(){
$('.voices-items__inner').slick({
  infinite: true, // 無限ループスライド
  dots: true,
  slidesToShow: 3, // 一度に表示するスライド数
  slidesToScroll: 3, // 一度にスクロールするスライド数
  prevArrow: '<img src="assets/image/arrow-left-circle-fill.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="assets/image/arrow-right-circle-fill.png" class="slide-arrow next-arrow">',
  responsive: [ // レスポンシブ設定
        {
          breakpoint: 1370, // この幅以下で切り替える
            settings: {
              slidesToShow: 2, // 中幅のデバイスでは2枚表示
              slidesToScroll: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1, // 小幅のデバイスでは1枚表示
              slidesToScroll: 1,
            }
        }
    ]
});
});


$(function(){
    $('.question-answer__question').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
        return false;
    });
});


// トップへ戻るボタンのコード
$(document).ready(function(){
  $('.js__top-button').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800); // 800ミリ秒（0.8秒）かけてトップへスクロール
    return false; // デフォルトのイベントをキャンセル
  });
});