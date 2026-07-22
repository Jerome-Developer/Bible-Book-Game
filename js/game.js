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
        /* div.className = "Class Name"; */
        div.textContent = element;
        div.addEventListener("onclick", );
        Container.appendChild(div);
    });
}

function Book_Clicked(caller)
{
    if (caller.classList.contains("selected"))
    {
        caller.classList.toggle("selected");
    }

    else
    {
        if(document.querySelectorAll("selected").length = 1)
        {
            /* Swap Books */
        }
        else
        {
            caller.classList.toggle("selected");
        }
    }
}