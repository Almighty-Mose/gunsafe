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

const firearmIds = [];

function populateFirearmsIndex() {
  //We need to grab all the user's firearms
  $.get("/firearms.json", function(firearmData) {
    let list = document.getElementById("rifle-list");
    //This stores the ID of all the user's firearms in the constant
    //firearmIds, so the next and previous buttons can access them.
    firearmData.forEach(function(firearm) {
      firearmIds.push(firearm.id);
      let f = new Firearm(firearm);
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute('href', "javascript:void(0)");
      a.setAttribute("data-id", f.id);
      a.setAttribute("class", "openSideNav");
      a.innerHTML = f.name;
      list.append(li);
      li.appendChild(a);
    });
  });

  //We need to insert those parsed objects into the DOM
}

$(function() {
  populateFirearmsIndex();

  $("ul").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).data("id");
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
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let arrayIndex = firearmIds.indexOf(firearmId);
    let nextId = firearmIds[arrayIndex + 1];
    insertData(nextId);
  });

  $(".js-prev").click(function(event) {
    event.preventDefault();
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let arrayIndex = firearmIds.indexOf(firearmId);
    let prevId = firearmIds[arrayIndex - 1];
    insertData(prevId)
  })
});

