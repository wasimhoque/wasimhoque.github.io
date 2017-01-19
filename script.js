$(function(){
  $( "#mainGrid .ui-bar-a" ).bind( "tap", tapHandler );
 
  function tapHandler( event ){
    $( event.target ).addClass( "tapped" );
  }
});
