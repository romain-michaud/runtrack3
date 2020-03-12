$(document).ready(function(){
    $('#button').click(function(){
        $('body').append('<p>Le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec laclasse pour cacher cet élément</p>');
        $('body').append('<button class="remove">Remove</button>');
    
    $('.remove').click(function(){
        $('p').remove();
        $('.remove').remove();
    })})
})