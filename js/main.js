document.getElementById("start-button").addEventListener("click", Setup_Game);
document.getElementById("submit").addEventListener("click", Get_Results);
document.getElementById("review-order-button").addEventListener("click", Hide_Start_Menu);
document.getElementById("show-start-menu-button").addEventListener("click", Display_Start_Menu);

function Setup_Game()
{
    Hide_Start_Menu();
    let Shuffled_Books = Shuffle_Array(BIBLE_BOOKS.slice());
    Create_Elements(Shuffled_Books);
}

function Hide_Start_Menu()
{
    document.getElementById("start-menu").style.display = "none";
}