document.querySelector("body > header > section > main > div:nth-child(1)")
//Retrieve API data from OpenDataSoft
const rapperAPI = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=rapworld&q=&rows=457&facet=categories&facet=bio_yearsactivestart&facet=bio_birthdate&facet=bio_yearsactiveend&facet=bio_deathdate&facet=location_city&facet=location_neighborhood"
fetch(rapperAPI)
.then(res => res.json())
.then(renderRappersWithHTML)

// Execute function that populates page with list of 400+ Rappers w/ accompanying Bio as divs with names being h2 elements and bio eing p elements
function renderRappersWithHTML(data) {
    const main =document.querySelector("main");
    data.records.forEach( record => {
  // Create div elements and provide a class and id
        const div =document.createElement('div');
        div.classList.add("data-rapper-template");
        div.id = record.fields.name;
  // Create h2 elements and provide a id
        const h2 = document.createElement('h2');
        h2.textContent = record.fields.name;
        h2.id= record.fields.name;
  // Create p elements
        const p = document.createElement('p');
        p.classList.add("bio");
        p.id = record.fields.name;
        const a = document.createElement('a');
        a.setAttribute("href",record.fields.bio_url || "#" )
        a.id = record.fields.name;
        const p3 = document.createElement('p');
        p3.classList.add("youtube");
        p3.id = record.fields.name;


  // fill p elements with content
        p.textContent = record.fields.bio_summary
        a.textContent = record.fields.bio_url
  // Add h2 and p elements to div
        div.prepend (h2, p, a, );

// Create Array
const rappers = [div.id]
// console.log(rappers)

  // Add div to Main
        main.append(div)
        // console.log(h2)
        
        //Create SearchBar functionality
    const  searchBar = document.getElementById(`searchBar`)

    // Create event listener and tie search function to the div visibility on Main
    searchBar.addEventListener("input", (e) => {
        e.preventDefault();
        const searchString = e.target.value.toLowerCase();
        rappers.forEach(rappers => {
            const isVisible = rappers.toLowerCase().includes(searchString)
            div.classList.toggle("hide", !isVisible)
            //Create Button
            const button =document.getElementById('button')
            const isTheOne = rappers.toLowerCase() === searchString
            button.addEventListener(`click`, (event) => {
                e.preventDefault();
                if (isTheOne) {
                onclick= window.open(a.setAttribute)
                }
                document.getElementById('searchBar').value = '';

            })
        })
    })
})
    
}