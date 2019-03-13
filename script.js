// CopyToClipboard button

function copyToClipboard (str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

$("button.snippet").click(function() {
  copyToClipboard($(this).data("snippet"));
});

//Add rainbow class when hovering over

$(".colorChange").hover(function(){
  $(this).addClass("rainbow");
}, function() {
  $(this).removeClass("rainbow");
});
