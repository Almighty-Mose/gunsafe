$(document).on('turbolinks:load', function() {
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
    debugger
    let posting = $.post('/accessories', values);
    debugger
    posting.done(function(data) {
      debugger
      console.log(data)
    });
  });
});