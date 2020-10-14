$(function () {
  let $clickable = $('.ripple');

  // $clickable.on('mouseover', function (e) {
  //   let x = e.offsetX;
  //   console.log(x);
  // });

  $clickable.on('mousedown', function (e) {
    let _self = this;
    let x = e.offestX;
    let y = e.offsetY;

    let $effect = $(_self).find('.ripple__effect');
    let w = $effect.width();
    let h = $effect.height();

    $effect.css({
      left: x - w / 2,
      top: y - h / 2,
    });

    if (!$effect.hasClass('is-show')) {
      $effect.addClass('is-show');

      setTimeout(function () {
        $effect.removeClass('is-show');
      }, 750);
    }
    return false;
  });
});
