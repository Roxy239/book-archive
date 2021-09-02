const searchbook = () => {
    const searchfield = document.getElementById('searchfield');
    const searchText = searchfield.value;
    console.log(searchText);
    //clear field
    searchfield.value = '';
    //load data
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));





}






const displaySearchResult = docs => {
    //total search results
    //console.log(docs.length);

    // const searchResultsNumberdiv = document.getElementById('searchresult-number');
    // const searchResultnumber = document.createElement('div')
    // searchResultnumber.innerHTML = `<h2>Total Result found: ${docs.length} </h2>`;
    // searchResultsNumberdiv.appendChild(searchResultnumber);



    const searchResults = document.getElementById('search-result');
    searchResults.textContent = '';
    //checking no result
    if (docs.length === 0) {
        const div2 = document.createElement('div')
        div2.innerHTML = `<h2>No result found</h2>`;
        searchResults.appendChild(div2);
    }
    //for loop
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" p-5 h-50 w-50>
        <img  class="p-5 h-50 w-50" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title"> Book name: ${doc.title}</h4>
            <h4 class="card-title"> By: ${doc.author_name && doc.author_name.length > 0 ? doc.author_name[0] : ""}</h4>
            <h4 class="card-title"> Book publisher: ${doc.publisher && doc.publisher.length > 0 ? doc.publisher[0] : ""}</h4>
            <h4 class="card-title">First publish year: ${doc.first_publish_year}</h4>
             </div>
            </div>
         `;
        searchResults.appendChild(div);
    })

}
