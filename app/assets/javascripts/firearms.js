function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
}

function Firearm(data) {
  this.caliber = data["caliber"];
  this.price = data["price"];
  this.serial = data["serial_number"];
  this.purchaseDate = data["purchase_date"];
  this.id = data["id"];
}

$(function() {
  $('.openSideNav').click(function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.get("/firearms/" + id + ".json", function(data) {
      var firearm = new Firearm(data);
      //this will insert the data response into the sideNav element of firearms/index.html
      //need a prototype method for the Firearm object to format the name
      $(".firearmCaliber").text(firearm.caliber);
      $(".firearmSerial").text(firearm.serial);
      $(".firearmPrice").text(firearm.price);
      $(".firearmPurchase").text(firearm.purchaseDate);
    });
    document.getElementById("sideNav").style.width = "500px";
  });

  $('#firearmList').find('.accordion').click(function() {
    //expand or collapse this panel
    $(this).next().slideToggle('fast');
  });
});