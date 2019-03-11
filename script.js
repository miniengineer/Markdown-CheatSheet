// all copyToClipboard buttons

function copyToClipboard (str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

$("button.copyHeadings").click(function() {
  copyToClipboard($(".headings").val());
});

$("button.copyBoldText").click(function() {
  copyToClipboard($(".boldText").val());
});

$("button.copyItalicText").click(function() {
  copyToClipboard($(".italicText").val());
});

$("button.copyBoldItalicText").click(function() {
  copyToClipboard($(".boldItalicText").val());
});

$("button.copyQuotes").click(function() {
  copyToClipboard(">yourtext");
});

$("button.copyOrderedLists").click(function() {
  copyToClipboard("1. yourtext" + "\n" + "1. yourtext" + "\n" + "1. yourtext");
});

$("button.snippet").click(function() {
  copyToClipboard($(this).data("snippet"));
});

//Add rainbow class when hovering over to make text colorful

$(".colorChange").hover(function(){
  $(this).addClass("rainbow");
}, function() {
  $(this).removeClass("rainbow");
});
