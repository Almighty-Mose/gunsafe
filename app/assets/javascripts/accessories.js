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
});