(function () {
	$("#panel_tab1").on('click', function() {
		$(this).addClass('bg-black')
		$(this).children('dt').addClass('text-gray-50')
		$(this).children('dt').removeClass('text-gray-900')
		$("#panel_tab2").children('dt').addClass('text-gray-900')
		$("#panel_tab2").children('dt').removeClass('text-gray-50')
		$("#panel_tab3").children('dt').addClass('text-gray-900')
		$("#panel_tab3").children('dt').removeClass('text-gray-50')
		$("#panel_tab4").children('dt').addClass('text-gray-900')
		$("#panel_tab4").children('dt').removeClass('text-gray-50')
		$("#panel_tab2").removeClass('bg-black')
		$("#panel_tab3").removeClass('bg-black')
		$("#panel_tab4").removeClass('bg-black')
		$("#panel_img1").show();
		$("#panel_img2").hide();
		$("#panel_img3").hide();
		$("#panel_img4").hide();
	})

	$("#panel_tab2").on('click', function() {
		$(this).addClass('bg-black')
		$(this).children('dt').addClass('text-gray-50')
		$(this).children('dt').removeClass('text-gray-900')
		$("#panel_tab1").children('dt').addClass('text-gray-900')
		$("#panel_tab1").children('dt').removeClass('text-gray-50')
		$("#panel_tab3").children('dt').addClass('text-gray-900')
		$("#panel_tab3").children('dt').removeClass('text-gray-50')
		$("#panel_tab4").children('dt').addClass('text-gray-900')
		$("#panel_tab4").children('dt').removeClass('text-gray-50')
		$("#panel_tab1").removeClass('bg-black')
		$("#panel_tab3").removeClass('bg-black')
		$("#panel_tab4").removeClass('bg-black')
		$("#panel_img1").hide();
		$("#panel_img2").show();
		$("#panel_img3").hide();
		$("#panel_img4").hide();
	})

	$("#panel_tab3").on('click', function() {
		$(this).addClass('bg-black')
		$(this).children('dt').addClass('text-gray-50')
		$(this).children('dt').removeClass('text-gray-900')
		$("#panel_tab1").children('dt').addClass('text-gray-900')
		$("#panel_tab1").children('dt').removeClass('text-gray-50')
		$("#panel_tab2").children('dt').addClass('text-gray-900')
		$("#panel_tab2").children('dt').removeClass('text-gray-50')
		$("#panel_tab4").children('dt').addClass('text-gray-900')
		$("#panel_tab4").children('dt').removeClass('text-gray-50')
		$("#panel_tab1").removeClass('bg-black')
		$("#panel_tab2").removeClass('bg-black')
		$("#panel_tab4").removeClass('bg-black')
		$("#panel_img1").hide();
		$("#panel_img2").hide();
		$("#panel_img3").show();
		$("#panel_img4").hide();
	})

	$("#panel_tab4").on('click', function() {
		$(this).addClass('bg-black')
		$(this).children('dt').addClass('text-gray-50')
		$(this).children('dt').removeClass('text-gray-900')
		$("#panel_tab1").children('dt').addClass('text-gray-900')
		$("#panel_tab1").children('dt').removeClass('text-gray-50')
		$("#panel_tab2").children('dt').addClass('text-gray-900')
		$("#panel_tab2").children('dt').removeClass('text-gray-50')
		$("#panel_tab3").children('dt').addClass('text-gray-900')
		$("#panel_tab3").children('dt').removeClass('text-gray-50')
		$("#panel_tab1").removeClass('bg-black')
		$("#panel_tab2").removeClass('bg-black')
		$("#panel_tab3").removeClass('bg-black')
		$("#panel_img1").hide();
		$("#panel_img2").hide();
		$("#panel_img3").hide();
		$("#panel_img4").show();
	})
})();
