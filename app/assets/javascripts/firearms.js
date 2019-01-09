// All the Javascript for the firearms/index page

/** 
 * Firearm class constructor creates firearm objects 
 * for later consumption by jQuery
*/
class Firearm {
  constructor(data) {
    this.name = `${data["make"]} ${data["model"]}`;
    this.caliber = data["caliber"];
    this.price = data["price"];
    this.serial = data["serial_number"];
    this.purchaseDate = data["purchase_date"];
    this.id = data["id"];
    this.category = data["category"]
  }
}

/**
 * insertIntoDrawer() populates the firearmDrawer elements
 * 
 * invoked on line 66
 */
Firearm.prototype.insertIntoDrawer = function() {
  $(".js-next").attr("data-id", this.id);
  $(".firearmName").text(this.name);
  $(".firearmCaliber").text(this.caliber);
  $(".firearmSerial").text(this.serial);
  $(".firearmPrice").text(this.price);
  $(".firearmPurchase").text(this.purchaseDate);
  $("#edit-button").attr("href", `firearms/${this.id}/edit`)
  $("#delete-button").attr("data-id", this.id)
}

// Closes the firearmDrawer element and clears the accessory form if it was used
/**
 * closeFirearmDrawer() closes the firearmDrawer
 * also clears the accessory form
 * 
 * invoked by event listener attached to X button in firearmDrawer
 */
function closeFirearmDrawer() {
  $("#firearmDrawer").css('width', '0px');
  $("#new-accessory-form").empty();
}

// Same as above, but closes accessoryDrawer
function closeAccessoryDrawer() {
  $("#accessoryDrawer").css('width', '0px');
}

/**
 * insertFirearm() makes an AJAX request to /firearms/:id.json
 * it uses the JSON response to instansiate a Firearm
 * and populate firearmDrawer
 * 
 * @param {number} id -
 * The ID of the firearm clicked on
 * 
 * Invoked by event listener attached to firearmList
 * Invoked on line 148, 163, 171
 */
function insertFirearm(id) {
  $.get("/firearms/" + id + ".json", function (data) {
    var firearm = new Firearm(data);
    // This will insert the data response into the firearmDrawer element of firearms/index.html
    firearm.insertIntoDrawer();
    let accessories = data["accessories"];
    insertAccessories(accessories);
  });
}

/**
 * insertAccessories() populates the accessoryList in
 * firearmDrawer
 * 
 * @param {object} accessories - 
 * An array of accessory objects
 * 
 * Invoked by insertFirearm(), line 54
 */
function insertAccessories(accessories) {
  let $list = $("#accessoryList");
  $($list).empty();
  accessories.forEach(function (accessory) {
    // Create an <li> for each accessory
    let li = document.createElement("li");
    let a = document.createElement("a");
    // Set the required attributes for the accessory's <a> tag
    a.setAttribute('href', "javascript:void(0)");
    a.setAttribute("data-id", accessory.id);
    a.setAttribute("class", "js-accessory")
    a.innerHTML = accessory.name;
    $list.append(li);
    li.appendChild(a);
  });
}

/**
 * Contains the IDs of a user's firearms
 * used by js-next and js-prev to scroll through
 * only the current user's firearms.
 */
const firearmIds = [];

/**
 * populateFirearmsIndex() generates links for each firearm
 * and sorts them into firearmList sections
 * 
 * invoked on line 143
 */
function populateFirearmsIndex() {
  // We need to grab all the user's firearms
  $.get("/firearms.json", function(firearmData) {
    // Iterate over the JSON response, which is an array of firearms
    firearmData.forEach(function(firearm) {
      // Push the ID of each firearm into the firearmIds const
      firearmIds.push(firearm.id);
      // Create new objects and containers for each firearm
      let f = new Firearm(firearm);
      let li = document.createElement("li");
      let a = document.createElement("a");
      // Set the required attributes for the firearm's <a> tag
      a.setAttribute('href', "javascript:void(0)");
      a.setAttribute("data-id", f.id);
      a.innerHTML = f.name;
      // SORT!
      if (f.category === "Rifle") {
        var $list = $("#rifle-list")
      } else if (f.category === "Pistol") {
        var $list = $("#pistol-list")
      } else if (f.category === "Shotgun") {
        var $list = $("#shotgun-list")
      };
      // Add the <li> to the proper list, then add in the formatted <a>
      $list.append(li);
      li.appendChild(a);
    });
  });
};

// DOM Manipulation Methods
$(function() {
  populateFirearmsIndex();

  $("#firearmList").on("click", "a", function(e) {
    e.preventDefault();
    let id = $(this).data("id");
    insertFirearm(id);
    // Opens the firearmDrawer element which contains firearms info
    $("#firearmDrawer").css('width', '500px');
  });

  $('#firearmList').find('.accordion').click(function() {
    // Expand or collapse this panel
    $(this).next().slideToggle('fast');
  });

  $(".js-next").click(function(e) {
    e.preventDefault();
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let arrayIndex = firearmIds.indexOf(firearmId);
    let nextId = firearmIds[arrayIndex + 1];
    insertFirearm(nextId);
  });

  $(".js-prev").click(function(e) {
    e.preventDefault();
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let arrayIndex = firearmIds.indexOf(firearmId);
    let prevId = firearmIds[arrayIndex - 1];
    insertFirearm(prevId)
  })

  $("#delete-button").click(function(e) {
    e.preventDefault();
    let id = this.getAttribute("data-id");
    let url = `/firearms/${id}`
    debugger
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(result) {
        console.log(result);
        alert("Firearm successfully deleted!")
        closeFirearmDrawer();
        populateFirearmsIndex();
      }
    })
  })
});

