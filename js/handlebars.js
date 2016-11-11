$(document).ready(function () {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = {title: "My first handle bar",
                 body: "My first handle bar post!"}

  var html = template(context);
});
