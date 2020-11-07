$(function() {
  // ハンバーガーメニューが押された時
  $('#toggle').on('click',function(){
      $(this).toggleClass('on');
      $('.js-drower').toggleClass('on');

      let isActive = $(this).hasClass('on');
      toggleDrower(isActive);
  });
});