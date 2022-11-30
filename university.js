$(document).ready(function() {
    $.get("http://universities.hipolabs.com/search?country=Canada", function(data, status) {
        if (status == "success" && data != null && data != undefined) {
            for (let index = 0; index < data.length; index++) {
                $("#canadaUni").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="uni-list-item uni-list-item-action">${data[index].name}</a>`);

            }
        } else {
            $("#canadaUni").append("List won't show");
        }
    });
});