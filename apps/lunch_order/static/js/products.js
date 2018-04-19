$(document).ready(function () {
    $.get('api/products', function (data) {
        var $pagination = $('#pagination');
        var defaultOpts = {
            first: '',
            prev: '',
            next: '',
            last: '',
            totalPages: data.total_pages,
            paginationClass: 'pager'
        };
        $pagination.twbsPagination(defaultOpts);
        var currentPage = $pagination.twbsPagination('getCurrentPage');
        $pagination.twbsPagination('destroy');
        $pagination.twbsPagination($.extend({}, defaultOpts, {
            startPage: currentPage,
            onPageClick: function (event, page) {
                $.get('api/products/?page=' + page, function (data) {
                    var html = '';
                    $.each(data.results, function (key, value) {
                        html += "<tr><td>" + value.title + "</td>" +
                            "<td>" + value.manufacturer + "</td>" +
                            "<td>" + value.price + "</td>" +
                            "<td><span id='click' class='glyphicon glyphicon-plus'></span></td></tr>"
                    });
                    $("table").html(html);
                })
            }
        }));
    });
});