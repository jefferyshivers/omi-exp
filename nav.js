
// change the page title
$('#men-items').click(function(event) {
  event.preventDefault();
  $.ajax(this.href, {
    success: function() {
      $( "#this-page-header" ).load( "Map of " + event.target.id );
      // the populate the map
      //$( ".main-content" ).load( "../contents.html #base" );
    }
  });
});
