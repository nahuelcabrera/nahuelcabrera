window.onload = function () {
  $(document).ready(function(){
    $(".llamar-ingreso").click(function(){
    $(".ingreso").toggle(700);
    });
  });

  $(document).ready(function(){
    $(".llamar-categoria").click(function(){
    $(".container-categoria").toggle(1000);
    });
  });

  $(document).ready(function(){
    $(".llamar-cuenta").click(function(){
    $(".container-cuenta").toggle(500);
    });
  });
}
