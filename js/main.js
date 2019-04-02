// $(function () {


// 	$('.load-more').on('click', function () {
// 		const btn = $(this);
// 		const loader = btn.find('span');
// 		$.ajax({
// 			url: '/date.html',
// 			type: 'GET',
// 			beforeSend: function () {
// 				btn.attr('disebled', true);
// 				loader.addClass('d-inline-block');

// 			},
// 			succes: function () {
// 				setTimeout(function () {
// 					loader.removeClass('d-inline-block');
// 				}, 1500);
// 				btn.attr('disebled', false);
// 				$('.after-post').before(response);
// 			},
// 			error: function () {
// 				alert('ERROR');
// 				btn.attr('disebled', false);
// 			}
// 		});
// 	});
// });