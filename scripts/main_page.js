var item_paddings = [10, 10, 10];
var item_margins = [10, 10, 10];
var items_row_count = [4, 7, 2];

$(document).ready(function() {
    $('.section_body').each(function(main_index) {
        let available_container_width = $(this).width();

        let img_size = Math.floor(available_container_width / items_row_count[main_index]);

        img_size -= 2 * item_paddings[main_index];
        img_size -= 2 * item_margins[main_index];
        img_size -= 2;

        $(this).find(".section_body_item").each(function(index) {
            $(this).css("padding-right", item_paddings[main_index]);
            $(this).css("padding-left", item_paddings[main_index]);
            $(this).css("margin-left", item_margins[main_index]);
            $(this).css("margin-right", item_margins[main_index]);
            $(this).css("margin-bottom", item_margins[main_index] * 2);
            $(this).find("img").css("width", img_size);
            $(this).find("img").css("height", img_size);
        });
    });
});