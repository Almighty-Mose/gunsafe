$(function() {
  $("#accessoryList").on("click", "a", function() {
    let id = $(this).data("id");
    $.get("/accessories/" + id + ".json", function(data) {
      console.log(data);
    });
    document.getElementById("accessoryDrawer").style.width = "500px";
  });
});

// function insertFirearm(id) {
//   $.get("/firearms/" + id + ".json", function (data) {
//     var firearm = new Firearm(data);
//     //this will insert the data response into the firearmDrawer element of firearms/index.html
//     $(".js-next").attr("data-id", firearm.id);
//     $(".firearmName").text(firearm.name);
//     $(".firearmCaliber").text(firearm.caliber);
//     $(".firearmSerial").text(firearm.serial);
//     $(".firearmPrice").text(firearm.price);
//     $(".firearmPurchase").text(firearm.purchaseDate);
//     let accessories = data["accessories"];
//     insertAccessories(accessories);
//   });
// }