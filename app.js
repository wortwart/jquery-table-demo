$(function() {
 $('h1').hide().slideDown();
 $("body").append("<p></p>");
 $(document).click(function(e) {
  $("p:last").text("Mauskoordinaten: " + e.pageX + "/" + e.pageY).hide().fadeIn(800);
 });

 $('td:not(:first-of-type, :last-of-type)').wrapInner('<span contenteditable="true"></span>').hover(function() {
  $(this).css('outline', '3px solid lightgrey');
 }, function() {
  $(this).css('outline', 0);
 }).on("focus keyup", this, function() {
  var sum = 0;
  $(this).parent().children(':not(:first, :last)').each(function() {
   var wert = parseFloat($(this).text());
   if ($.isNumeric(wert)) sum += wert;
  });
  $(this).siblings(':last').text(sum);
 });
});
