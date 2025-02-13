$(document).ready(function() {
    // Event listener for modal open button
    $(".btn-primary[data-toggle='modal']").click(function() {
        $("#idea-modal").modal("show");
    });

    // Event listener for modal close button
    $(".btn-secondary").click(function() {
        $("#idea-modal").modal("hide");
    });

    // Event listener for 'Invest in an Idea' button
    $(".btn-primary:contains('Invest in an Idea')").click(function() {
        alert("Investment process coming soon!");
    });

    // Event listener for 'List Your Product or Idea' button
    $(".call-to-action .btn-primary").click(function() {
        alert("Feature coming soon!");
    });
});
