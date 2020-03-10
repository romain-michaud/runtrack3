function fizzbuzz()
{
    var i = 1;

    while (i <= 151) 
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            document.write("FizzBuzz");
        }

        else if(i % 3 == 0)
        {
            document.write("Fizz");
        }

        else if(i % 5 == 0)
        {
            document.write("Buzz");
        }

        else
        {
            document.write(i);
        }

        i++;
    }
}

fizzbuzz();