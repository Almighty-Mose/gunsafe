function closeNav() {
  document.getElementById("sideNav").style.width = "0px";
}

// Firearm constructor creates firearm objects for later consumption by jQuery
function Firearm(data) {
  this.name = `${data["make"]} ${data["model"]}`;
  this.caliber = data["caliber"];
  this.price = data["price"];
  this.serial = data["serial_number"];
  this.purchaseDate = data["purchase_date"];
  this.id = data["id"];
}

function insertData(id) {
  $.get("/firearms/" + id + ".json", function (data) {
    var firearm = new Firearm(data);
    //this will insert the data response into the sideNav element of firearms/index.html
    $(".js-next").attr("data-id", firearm.id);
    $(".firearmName").text(firearm.name);
    $(".firearmCaliber").text(firearm.caliber);
    $(".firearmSerial").text(firearm.serial);
    $(".firearmPrice").text(firearm.price);
    $(".firearmPurchase").text(firearm.purchaseDate);
  });
}

// function populateFirearmsIndex() {
//   //We need to grab all the user's firearms
//   $.get("/firearms.json", function(firearmData) {
//     //We need to parse the JSON objects by category
//     firearmData.forEach(function(firearm) {
//       if (firearm.category === "Rifle") {
//         console.log(firearm)
//         $("#rifle-list").append(
//           `<li><a href="javascript:void(0)" data-id="${firearm.id}" class="openSideNav">${firearm.make}</a></li>`
//         );
//       };
//     });
//   });

//   //We need to insert those parsed objects into the DOM
// }

$(function() {
  // populateFirearmsIndex();

  $('.openSideNav').on('click', function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    insertData(id);
    // Opens the sideNav element which contains firearms info
    document.getElementById("sideNav").style.width = "500px";
  });

  $('#firearmList').find('.accordion').click(function() {
    //expand or collapse this panel
    $(this).next().slideToggle('fast');
  });

  $(".js-next").click(function(event) {
    event.preventDefault();
    //hey so this works, but it grabs the very next database entry.
    //this is bad because the user's firearms entries are not consecutive.
    //create a function that grabs the USERS next firearm
    //possibly in list order?
    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
    insertData(nextId);
  });
});

