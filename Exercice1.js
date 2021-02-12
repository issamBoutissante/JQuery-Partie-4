$(function () {
  //Evenement 1
  $("p:first").click(function () {
    $("p").css("color", "red");
  });
  //Evenement 2
  $("p:nth-child(2)").hover(CacherOuAfficher);
  function CacherOuAfficher() {
    $("p:nth-child(4)").toggle();
  }
  //Evenement 3
  $("p:nth-child(3)").click(CacherOuAfficher);
  //Evenement 4
  $("p:nth-child(4)").dblclick(function () {
    $("p").css("color", "blue");
  });
});
