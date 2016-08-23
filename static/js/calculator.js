$(function(){
    var begin_province = '';
    var begin_city = '';
    var end_province = '';
    var end_city = '';
    var price = 0;
    var distance = 0;
    data = provinceJson;
    $("#begin_province_sel").children(":gt(0)").remove();
    $("#end_province_sel").children(":gt(0)").remove();

    for (var i = 0; i < data.length; i++) {
        if (begin_province == data[i].name) {
            $("#begin_province_sel").append("<option selected='selected' value=" + data[i].name + ">" + data[i].name + "</option>");
            city_bind($("#begin_province_sel"), $("#begin_city_sel"), data[i].name, begin_city)
        } else {
            $("#begin_province_sel").append("<option value=" + data[i].name + ">" + data[i].name + "</option>");
        }

        if (end_province == data[i].name) {
            $("#end_province_sel").append("<option selected='selected' value=" + data[i].name + ">" + data[i].name + "</option>");
            city_bind($("#end_province_sel"), $("#end_city_sel"), data[i].name, end_city);
        } else {
            $("#end_province_sel").append("<option value=" + data[i].name + ">" + data[i].name + "</option>");
        }
    }

    $("#begin_province_sel").change(function () {
        city_bind($("#begin_province_sel"), $("#begin_city_sel"), $(this).children(":selected").text(), '')
    });

    $("#end_province_sel").change(function () {
        city_bind($("#end_province_sel"), $("#end_city_sel"), $(this).children(":selected").text(), '')
    });

    $("#begin_city_sel").change(function () {
        get_dist();
    });

    $("#end_city_sel").change(function () {
        get_dist();
    });

    $("#comp_sel").change(function () {
        get_dist();
    });
});
function city_bind(pobj, obj, province, selected_city) {
    $(obj).children(":gt(0)").remove();
    $("#search_distance").html("--");
    $("#span_price").text("--");
    getCity(province, function(p, data) {
        if (p == $(pobj).val()) {
            for (var i = 0; i < data.length; i++) {
                var v = '[' + data[i].center.lng + ',' + data[i].center.lat + ']';
                if (data[i].name == selected_city) {
                    $(obj).append("<option selected='selected' value=" + v + ">" + data[i].name + "</option>");
                    get_dist()
                } else {
                    $(obj).append("<option value=" + v + ">" + data[i].name + "</option>");
                }
            }
        }
    });
}
function get_dist() {
    var begin = $("#begin_city_sel").val();
    var end = $("#end_city_sel").val();
    if (begin == "-1" || end == "-1") {
        $("#search_distance").html("--");
        return
    }
    getDistance(eval(begin), eval(end), function (d) {
        if (begin == end) {
            d = 200;
        }
        $("#search_distance").html(d);
        distance = d;
        get_price(d);
    });
}

function get_price(dist) {
    var type = $("#comp_sel").val();
    var begin_province = $("#begin_province_sel").val();
    var begin_city = $("#begin_city_sel").find("option:selected").text();
    var end_province = $("#end_province_sel").val();
    var end_city = $("#end_city_sel").find("option:selected").text();

    var url = '/dashboard/truckorder/price.json';
    $.post(url, {start_province: begin_province, start_city: begin_city, end_province: end_province, end_city: end_city, coverage: type, distance:dist, r: 1}, function (r) {
        if (r.success) {
            $("#span_price").text(r.price);
            price = r.price;
            distance = r.distance;
            $("#search_distance").html(r.distance);
            $("#price_rate").text("");
        }
    }, "json");
}