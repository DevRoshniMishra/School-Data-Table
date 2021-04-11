$('.accordion-toggle').click(function() {
    $('.hiddenRow').hide();
    $(this).next('tr').find('.hiddenRow').show();
});