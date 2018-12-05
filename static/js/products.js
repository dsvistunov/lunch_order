// $(document).ready(function () {
//     var user = $(".user").attr('value');
//     var order = {
//         owner: user,
//         products: []
//     };

//     $.get('api/products', function (data) {
//         var $pagination = $('#pagination');
//         var defaultOpts = {
//             first: '',
//             prev: '',
//             next: '',
//             last: '',
//             totalPages: data.total_pages,
//             paginationClass: 'pager'
//         };
//         $pagination.twbsPagination(defaultOpts);
//         var currentPage = $pagination.twbsPagination('getCurrentPage');
//         $pagination.twbsPagination('destroy');
//         $pagination.twbsPagination($.extend({}, defaultOpts, {
//             startPage: currentPage,
//             onPageClick: function (event, page) {
//                 $.get('api/products/?page=' + page, function (data) {
//                     var html = '';
//                     $.each(data.results, function (key, value) {
//                         html += "<tr class='product' value='" + value.id + "'><td>" + value.title + "</td>" +
//                             "<td>" + value.manufacturer + "</td>" +
//                             "<td>" + value.price + "</td>" +
//                             "<td><span class='glyphicon glyphicon-plus'></span></td></tr>"
//                     });
//                     $("table").html(html);
//                 })
//             }
//         }));
//     });

//     $("body").on("click", "tr", function () {
//         var product_id = $(this).attr('value');
//         order.products.push(product_id);
//         console.log(order);
//         function csrfSafeMethod(method) {
//             // these HTTP methods do not require CSRF protection
//             return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//         }
//         function getCookie(name) {
//             var cookieValue = null;
//             if (document.cookie && document.cookie != '') {
//                 var cookies = document.cookie.split(';');
//                 for (var i = 0; i < cookies.length; i++) {
//                     var cookie = jQuery.trim(cookies[i]);
//                     // Does this cookie string begin with the name we want?
//                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                         break;
//                     }
//                 }
//             }
//             return cookieValue;
//         }
//         var csrftoken = getCookie('csrftoken');
//         $.ajaxSetup({
//             beforeSend: function(xhr, settings) {
//                 if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
//                     xhr.setRequestHeader("X-CSRFToken", csrftoken);
//                 }
//             }
//         });
//         // $.ajax({
//         //     url: 'api/create/',
//         //     method: 'post',
//         //     data: order,
//         //     success: function (data) {
//         //         console.log(data)
//         //     },
//         //     error: function (error) {
//         //         console.log(error)
//         //     }
//         // })
//         $("#order-list").append(`
//             <div>${product_id}</div>
//         `)
//     });

// });