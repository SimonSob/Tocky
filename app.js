if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getRandomZnak(zasobnik_znaku)
{
    const num = Math.floor(Math.random() * (zasobnik_znaku.lenght-1 ));
    return(zasobnik_znaku[num]);
}


function Roztoc()
{
    let zasobnik_znaku = ["⭐","🍀","🌈","🌸"];
    const refresh_rate1 = 100;
    const refresh_rate2 = 200;
    const refresh_rate3 = 300;

    for(let i=0; i<20000; i++)
    {
        if(i % refresh_rate1 == 0)
        {
            document.getElementById("first").textContent = getRandomZnak(zasobnik_znaku);
        }

        if(i % refresh_rate2 == 0)
        { 
            document.getElementById("second").textContent = getRandomZnak(zasobnik_znaku);
        }

        if(i % refresh_rate3 == 0)
        {
            
            document.getElementById("third").textContent = getRandomZnak(zasobnik_znaku);
        }
    }

    const first = getElementById("first").textContent;
    const second = getElementById("second").textContent;
    const third = getElementById("third").textContent;


}