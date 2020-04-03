//JavaScript document

//using fetch api to get data from the following website
fetch('https://jethoo.github.io/lab4/products.json')
    //using promises (.then) modern javascript way to handle asynchronous request
    .then(function(response) {
        response.text()
            .then(function(text) {
                //assigning text to results variable
                let results = text;
                //invoking the displayContent function and passing results as parameter
                //using JSON.parse to convert the JSON string received from server to JavaScript object 
                displayContent(JSON.parse(results));
            });
    });



//displayContent function, which uses the response from the server to build the view
function displayContent(results) {
    //selecting products array from the results by using Javascript dot notation
    let products = results.products;
    //referencing section of the html in section variable
    let section = document.querySelector('section');

    //using for loop to create different HTML elements
    for (let i = 0; i < products.length; i++) {
        //building dynamic HTML elements
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        img.setAttribute('src',
            'https://jethoo.github.io/lab4/assets/' + products[i].image);
        img.setAttribute('alt', products[i].image);
        h2.textContent = products[i].name;
        p2.textContent = 'Price ' + products[i].price;
        let details = products[i].details;

        //using forloop to access the details array of the products
        for (let j = 0; j < details.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = details[j];
            ul.appendChild(listItem);
        }

        //appending all the HTML elements to article and then to section
        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);

    }
}