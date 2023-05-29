$(document).ready(() => {
    $('.info-btn').click(() => {
        $('.pessoal').toggleClass('pessoal-active')
        $('.carreira').toggleClass('carreira-active')
    })

    $('.sum').click(function() {
        var $parentDiv = $(this).closest('.pessoal-info');
        var $valueElement = $parentDiv.find('.value');

        var value = parseInt($valueElement.text());
        $valueElement.text(value + 1);
    });
})