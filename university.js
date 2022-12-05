$(document).ready(function() {
    $("select")
        .change(function() {
            var str = "";
            $("select option:selected").each(function() {
                str += $(this).text() + " ";
            });


        })
        .trigger("change");

    $.get("http://universities.hipolabs.com/search?country=Canada", function(data, status) {
        if (status == "success" && data != null && data != undefined) {
            for (let index = 0; index < data.length; index++) {
                $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

            }
        } else {
            $("#universityList").append("Can't load the list from url.");
        }
    });
    $.get("http://universities.hipolabs.com/search?country=United%20States", function(data, status) {
        if (status == "success" && data != null && data != undefined) {
            for (let index = 0; index < data.length; index++) {
                $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

            }
        } else {
            $("#universityList").append("Can't load the list from url.");
        }
    });
});