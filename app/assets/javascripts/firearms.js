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

  insertIntoDrawer() {
    $(".js-next").attr("data-id", this.id);
    $(".firearmName").text(this.name);
    $(".firearmCaliber").text(this.caliber);
    $(".firearmSerial").text(this.serial);
    $(".firearmPrice").text(this.price);
    $(".firearmPurchase").text(this.purchaseDate);
    $("#edit-button").attr("href", `firearms/${this.id}/edit`)
    $("#delete-button").attr("data-id", this.id)
  }
}

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
 * Invoked on line 148, 163, 171
 * 
 * @param {number} id -
 * The ID of the firearm clicked on
 * 
 * Invoked by event listener attached to firearmList
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
 * Invoked by insertFirearm(), line 67
 * 
 * @param {object} accessories - 
 * An array of accessory objects
 */
function insertAccessories(accessories) {
  let $list = $("#accessoryList");
  $($list).empty();
  accessories.forEach(function (accessory) {
    // Create an <li> for each accessory
    let li = document.createElement("li");
    let a = document.createElement("a");
    // Set the required attributes for the accessory's <a> tag
    a.setAttribute('href', "#");
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
 * invoked on line 164
 */

 //TODO: Refactor this whole thing. It's waaaaay too bloated.
function populateFirearmsIndex(firearmData) {
  const counts = { 
    rifle: 0,
    pistol: 0,
    shotgun: 0,
    nfa: 0,
    other: 0
  }
  // First clear the list
  resetFirearmList();
  // We need to grab all the user's firearms
  // Iterate over the JSON response, which is an array of firearms
  firearmData.forEach(function(firearm) {
    // Push the ID of each firearm into the firearmIds const
    firearmIds.push(firearm.id);
    // Create new objects and containers for each firearm
    let f = new Firearm(firearm);
    let li = document.createElement("li");
    let a = document.createElement("a");
    // Set the required attributes for the firearm's <a> tag
    a.setAttribute('href', "#");
    a.setAttribute("data-id", f.id);
    a.innerHTML = f.name;
    // SORT!
    // * I really feel like this should be its own function
    // TODO: There's gotta be a better way to do this sorting.
    let $list
    if (f.category === "Rifle") {
      counts['rifle'] += 1
      $list = $("#rifle-list")
    } else if (f.category === "Pistol") {
      counts['pistol'] += 1
      $list = $("#pistol-list")
    } else if (f.category === "Shotgun") {
      counts['shotgun'] += 1
      $list = $("#shotgun-list")
    } else if (f.category === "NFA") {
      counts['nfa'] += 1
      $list = $("#nfa-list")
    } else if (f.category === "Other") {
      counts['other'] += 1
      $list = $("#other-list")
    };
    // Add the <li> to the proper list, then add in the formatted <a>
    $list.append(li);
    li.appendChild(a);
  });
  console.log(counts)
  insertCounts(counts)
};

/**
 * insertCounts adds the count of each firearm type to the
 * appropriate button element
 * 
 * @param {object} counts -
 * FirearmCategory: Count
 */
insertCounts = counts => {
  const entries = Object.entries(counts)
  for (const [firearm, count] of entries) {
    button = document.getElementById(`${firearm}-title`)
    if (!button.innerHTML.includes(count)) {
      button.innerHTML += ` (${count})`
    }
  }
}

/**
 * resetFirearmList() empties the firearmList
 * and firearmIds constant to give
 * populateFirearmsIndex() a blank slate
 */
function resetFirearmList() {
  $("#rifle-list").empty();
  $("#pistol-list").empty();
  $("#shotgun-list").empty();
  $("#nfa-list").empty();
  $("#other-list").empty();
  firearmIds.length = 0;
};

function sorting(a, b) {
  let nameA = a.make.toUpperCase(); // ignore upper and lowercase
  let nameB = b.make.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  };
  if (nameA > nameB) {
    return 1;
  };

  // names must be equal
  return 0;
};

function sortFirearms() {
  $.get("/firearms.json", function(allFirearms) {
    allFirearms.sort(sorting);
    populateFirearmsIndex(allFirearms);
  });
};

// DOM Manipulation Methods
$(function() {

  $.get("/firearms.json", populateFirearmsIndex)
  
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
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
      $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result) {
          console.log(result);
          alert("Firearm successfully deleted!")
          closeFirearmDrawer();
          populateFirearmsIndex();
        }
      });
    };
  });

  $("#sort-button").click(function() {
    //this is where we fire sort method
    sortFirearms();
  });
});



