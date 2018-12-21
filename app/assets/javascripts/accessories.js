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

  $("#new_accessory").on("submit", function(e) {
    e.preventDefault();
    let values = $(this).serialize();
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
    });
  });
});