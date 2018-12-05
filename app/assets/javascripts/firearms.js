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
  this.category = data["category"]
}

function insertFirearm(id) {
  $.get("/firearms/" + id + ".json", function (data) {
    var firearm = new Firearm(data);
    //this will insert the data response into the sideNav element of firearms/index.html
    $(".js-next").attr("data-id", firearm.id);
    $(".firearmName").text(firearm.name);
    $(".firearmCaliber").text(firearm.caliber);
    $(".firearmSerial").text(firearm.serial);
    $(".firearmPrice").text(firearm.price);
    $(".firearmPurchase").text(firearm.purchaseDate);
    let accessories = data["accessories"];
    insertAccessories(accessories);
  });
}

function insertAccessories(accessories) {
  let list = document.getElementById("accessory-list");
  $(list).empty();
  accessories.forEach(function (accessory) {
    //create an <li> for each accessory
    let li = document.createElement("li");
    let a = document.createElement("a");
    //set the required attributes for the accessory's <a> tag
    a.setAttribute('href', "javascript:void(0)");
    a.setAttribute("data-id", accessory.id);
    a.setAttribute("class", "js-accessory")
    a.innerHTML = accessory.name;
    list.appendChild(li);
    li.appendChild(a);
  });
}

const firearmIds = [];

//populateFirearmsIndex generates links for each firearm and sorts them into appropriate containers
//called on firearms.js line 64
function populateFirearmsIndex() {
  //We need to grab all the user's firearms
  $.get("/firearms.json", function(firearmData) {
    //Iterate over the JSON response, which is an array of firearms
    firearmData.forEach(function(firearm) {
      //Push the ID of each firearm into the firearmIds const
      firearmIds.push(firearm.id);
      //lines 39-41 create new objects and containers for each firearm
      let f = new Firearm(firearm);
      let li = document.createElement("li");
      let a = document.createElement("a");
      //set the required attributes for the firearm's <a> tag
      a.setAttribute('href', "javascript:void(0)");
      a.setAttribute("data-id", f.id);
      a.innerHTML = f.name;
      //SORT!
      if (f.category === "Rifle") {
        var list = document.getElementById("rifle-list")
      } else if (f.category === "Pistol") {
        var list = document.getElementById("pistol-list")
      } else if (f.category === "Shotgun") {
        var list = document.getElementById("shotgun-list")
      };
      //Add the <li> to the proper list, then add in the formatted <a>
      list.appendChild(li);
      li.appendChild(a);
    });
  });
};

$(function() {
  populateFirearmsIndex();
  
  $("#firearmList").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).data("id");
    insertFirearm(id);
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
    insertFirearm(nextId);
  });

  $(".js-prev").click(function(event) {
    event.preventDefault();
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let arrayIndex = firearmIds.indexOf(firearmId);
    let prevId = firearmIds[arrayIndex - 1];
    insertFirearm(prevId)
  })
});

