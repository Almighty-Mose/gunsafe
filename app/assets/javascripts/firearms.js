// function openNav() {
//   document.getElementById("sideNav").style.width = "250px";
// }

function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
}

$(function() {
  $('.openSideNav').click(function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/firearms/" + id + "/info", function(data) {
      debugger;
      alert(data);
    });
    document.getElementById("sideNav").style.width = "500px";
  });

  $('#firearmList').find('.accordion').click(function() {
    //expand or collapse this panel
    $(this).next().slideToggle('fast');
  });
});