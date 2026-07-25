window.addEventListener("load", Setup_Game);
document.getElementById("submit").addEventListener("click", Get_Results);

function Setup_Game()
{
    let Shuffled_Books = Shuffle_Array(BIBLE_BOOKS.slice());
    Create_Elements(Shuffled_Books);
}