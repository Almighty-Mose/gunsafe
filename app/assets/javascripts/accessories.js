$(function() {
  $("#accessoryList").on("click", "a", function() {
    let id = $(this).data("id");
    $.get("/accessories/" + id + ".json", function(data) {
      $(".accessoryName").text(data.name)
      $(".accessoryPrice").text(data.price)
      $(".accessoryPurchase").text(data.purchase_date)
    });
    $("#accessoryDrawer").css('width', '500px');
  });

  //Attaches the accessory form submission event listener to the form container for event delegation
  $("#new-accessory-form").on("submit", function(e) {
    e.preventDefault();
    let values = $("#new_accessory").serialize();
    let posting = $.post('/accessories', values);
    posting.done(function(accessory_response) {
      let $list = $("#accessoryList");
      //create an <li> for the accessory (This is repeated in firearms.js. Refactor?)
      let li = document.createElement("li");
      let a = document.createElement("a");
      //set the required attributes for the accessory's <a> tag
      a.setAttribute('href', "javascript:void(0)");
      a.setAttribute("data-id", accessory_response.id);
      a.setAttribute("class", "js-accessory")
      a.innerHTML = accessory_response.name;
      $list.append(li);
      li.appendChild(a);
      $("#new-accessory-form").empty();
    });
  });

  //Displays the Add an Accessory form in the Firearm Drawer
  $("#js-accessory-add").on("click", function(e) {
    e.preventDefault()
    let $container = $("#new-accessory-form")
    let firearmId = parseInt($(".js-next").attr("data-id"));
    let token = $('meta[name="csrf-token"]').attr('content');
    let context = {
      "firearm-id": firearmId,
      "csrf": token
    }
    let template = HandlebarsTemplates['accessories/new'](context);
    $container.html(template);
  });
});