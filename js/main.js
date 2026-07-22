window.addEventListener("load", Setup_Game);

function Setup_Game()
{
    let Shuffled_Books = Shuffle_Array(BIBLE_BOOKS.slice());
    Create_Elements(Shuffled_Books);
}