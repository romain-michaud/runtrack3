année = prompt("Année : ");
result = bisextile(année);
document.write(result);

function bisextile(année)
{
    var jour = new Date(année, 2, 0).getDate();

    if(jour >= 29)
    {
        return (true);
    }

    else{
        return (false);
    }
}