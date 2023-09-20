var imgs;
var nombreImagen;
var moneyCount;
var healthCount;
var manaCount;
var gameCount;
var Click = false;

function loadEvents() 
{
    imgs = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3")];

    for (i = 0; i < imgs.length; i++) 
    {
        imgs[i].addEventListener('click', clickedIMG);
    }

    document.getElementById("nextButton").addEventListener("click", NextClick);
    document.getElementById("resetButton").addEventListener("click", ResetClick);

    nombreImagen = ["images/healthblue.png","images/managreen.png","images/moneyyellow.png"];

    moneyCount = document.getElementById("Money");
    healthCount = document.getElementById("Health");
    manaCount = document.getElementById("Mana");
    gameCount = document.getElementById("Games");

    moneyCount.textContent = 0;
    healthCount.textContent = 0;
    manaCount.textContent = 0;
    gameCount.textContent = 0;

    desordenar();
}

function desordenar() 
{
    randomIndexes = [];
    while (randomIndexes.length < imgs.length) 
    {
        randomIndex = Math.floor(Math.random() * imgs.length);
        if (!randomIndexes.includes(randomIndex)) 
        {
            randomIndexes.push(randomIndex);
        }
    }

    for (i = 0; i < imgs.length; i++) 
    {
        randomImageIndex = Math.floor(Math.random() * nombreImagen.length);
        randomIndex = randomIndexes[i];
        imgs[randomIndex].src = nombreImagen[randomImageIndex];
        imgs[randomIndex].setAttribute("type", randomImageIndex);
        imgs[randomIndex].classList.remove("clicked");
    }
    Click = true;
}

function clickedIMG() 
{
    if (!Click || this.classList.contains("clicked")) 
    {
        return;
    }
    this.classList.add("clicked");
    imageType = this.getAttribute("type");
    if (imageType == 0) 
    {
        healthCount.textContent++;
    } 
    else if (imageType == 1) 
    {
        manaCount.textContent++;
    } 
    else if (imageType == 2) 
    {
        moneyCount.textContent++;
    }
    Click = false;
    
}

function NextClick() 
{
    Click = true;
    desordenar();
}

function ResetClick() 
{
    moneyCount.textContent = 0;
    healthCount.textContent = 0;
    manaCount.textContent = 0;
    gameCount.textContent++;

    desordenar();
}