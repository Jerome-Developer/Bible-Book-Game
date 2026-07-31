function Shuffle_Array(Array1)
{
    for (let i = Array1.length - 1; i > 0; i--)
    {
        const Random_Number = Math.floor(Math.random() * (i + 1));
        [Array1[i], Array1[Random_Number]] = [Array1[Random_Number], Array1[i]];
    }

    return Array1;
}

function Create_Elements(Array2)
{
    const Container = document.getElementById("book-container");
    Array2.forEach(element => {
        const div = document.createElement("div");
        /* div.className = "bible-book"; */
        div.textContent = element;
        div.addEventListener("click", Book_Clicked);
        Container.appendChild(div);
    });
}

function Book_Clicked(event)
{
    let caller = event.currentTarget;
    if (caller.classList.contains("selected"))
    {
        caller.classList.toggle("selected");
    }

    else
    {
        if(document.querySelectorAll(".selected").length == 1)
        {
            let Second_Book = document.querySelectorAll(".selected")[0];
            [caller.textContent, Second_Book.textContent] = [Second_Book.textContent, caller.textContent];
            Second_Book.classList.toggle("selected");

            /* track move count? */

            caller.classList.remove("correct");
            caller.classList.remove("incorrect");
            Second_Book.classList.remove("correct");
            Second_Book.classList.remove("incorrect");
        }
        else
        {
            caller.classList.toggle("selected");
        }
    }
}

function Get_Results()
{
    /* hide/lock book section */
    let Answers = document.querySelectorAll("#book-container > div");
    let Total_Correct = 0;
    const TOTAL_BOOKS = 66;

    let Book_Tracker = 0;

    Answers.forEach(Answer_Book => {
        if(Answer_Book.textContent == BIBLE_BOOKS[Book_Tracker])
        {
            Total_Correct++;
            Answer_Book.classList.remove("incorrect");
            Answer_Book.classList.add("correct");
        }
        else
        {
            Answer_Book.classList.remove("correct");
            Answer_Book.classList.add("incorrect");
        }
        Book_Tracker++;
    });

    document.getElementById("score").textContent = "Score: " + Total_Correct + " / " + TOTAL_BOOKS;
    document.getElementById("percent-score").textContent = "Percent Score: " + ((Total_Correct / TOTAL_BOOKS) * 100).toFixed(2) + "%";
}