$(function () {
  //親0 子1
  const flag = 1;

  if (flag === 0) {
    $('#parent').show();
    $('#child').hide();
  } else {
    $('#parent').hide();
    $('#child').show();
  }
  //showとhideで消しても
  //ボタンのidでもinputのidでも同じのがあればうまく機能しない
  //クラスにしてもダメ
  $('.postBtn').on('click', function () {
    let val = $('.comp-input').val();
  });
});
