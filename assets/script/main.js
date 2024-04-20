$(function(){
$('.voices-items__inner').slick({
  infinite: true, // 無限ループスライド
    dots: true,
    autoplay: true,
    autoplaySpeed: 300,
  slidesToShow: 3, // 一度に表示するスライド数
  slidesToScroll: 3, // 一度にスクロールするスライド数
  // prevArrow: '<img src="../image/arrow-left-circle-fill.png" class="slide-arrow prev-arrow">',
  // nextArrow: '<img src="../image/arrow-right-circle-fill.png" class="slide-arrow next-arrow">',
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
});


$(function(){
    $('.question-answer__question').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
        return false;
    });
});
