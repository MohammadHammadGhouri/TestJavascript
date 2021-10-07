$(function() {
    $("#name, #class, #sel").focus(function() {
        $(this).css("background-color", "red")
    });
    $("#name, #class, #sel").blur(function() {
        $(this).css("background-color", "white")
    });
    $("#name, #class, #sel").change(function() {
        $(this).css("background-color", "pink");
    });
});