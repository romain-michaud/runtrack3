$(document).ready(function(){
    shuffle();
        var count = 0;
        var t3 = [];
        var t4 = ["arc1.png", "arc2.png", "arc3.png", "arc4.png" ,"arc5.png" ,"arc6.png"];    
            $("img").click(function() {
                $(this).appendTo("#rangees");
                t3.push($(this).attr('src'));
                console.log(t3);
        
                if(t3.length == 6)
                {
                    for(i=0; i < t3.length; i++)
                    {
                        if(t3[i]==t4[i])
                        {
                            count++;
                        }
                    }
                    
                    if(count==6)
                    {
                        $("h1").remove();
                        $("body").prepend('<h1>Vous avez gagné</h1>');
                        $( "h1" ).css('text-align', 'center');
                        $( "h1" ).css('color', 'green');
                    }
                    else
                    {
                        $("h1").remove();
                        $("body").prepend('<h1>Vous avez perdu</h1>');
                        $( "h1" ).css('text-align', 'center');
                        $( "h1" ).css('color', 'red');
                    }
                }
            });
    $("#button").click(function(){
        $("h1").remove();
        shuffle();
        var count = 0;
        var t3 = [];
        var t4 = ["arc1.png", "arc2.png", "arc3.png", "arc4.png" ,"arc5.png" ,"arc6.png"];    
            $("img").click(function() {
                $(this).appendTo("#rangees");
                t3.push($(this).attr('src'));
                console.log(t3);
        
                if(t3.length == 6)
                {
                    for(i=0; i < t3.length; i++)
                    {
                        if(t3[i]==t4[i])
                        {
                            count++;
                        }
                    }
                    
                    if(count==6)
                    {
                        $("h1").remove();
                        $("body").prepend('<h1>Vous avez gagné</h1>');
                        $( "h1" ).css('text-align', 'center');
                        $( "h1" ).css('color', 'green');
                    }
                    else
                    {
                        $("h1").remove();
                        $("body").prepend('<h1>Vous avez perdu</h1>');
                        $( "h1" ).css('text-align', 'center');
                        $( "h1" ).css('color', 'red');
                    }
                }
            });
    });
    });



function shuffle()
{
        $("img").remove();
        var max = 6;
        var current = 0;
        var t1 = ["0","1","2","3","4","5"];
        var t2 = [];
        var image = ["arc1.png", "arc2.png", "arc3.png", "arc4.png" ,"arc5.png" ,"arc6.png"];
        for(i=0; i < image.length ; i++)
        {
            var x = Math.floor(Math.random() * max);
            t2[current] = t1[x];
            current++;
            max = max - 1;
            t1[x] = t1[max];
            $("#melangees").append('<img src="'+ image[t2[i]] +'">');
        }
}