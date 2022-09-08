let hamToggle = document.querySelector(".hamburger"),
    navigation = document.querySelector(".navigation");
book_titles = document.querySelector('.book-titles')

// Hamburger Menu
document.onclick = function (e) {
    if (e.target !== hamToggle && e.target !== navigation) {
        hamToggle.classList.remove("active");
        navigation.classList.remove("active");
    }
};

hamToggle.onclick = function () {
    hamToggle.classList.toggle("active");
    navigation.classList.toggle("active");

};

//

// API End-point and Key

const baseURL = 'https://the-one-api.dev/v2',
    key = 'BgzGDjkis8Ra13B9XxTF';

// Re-usable function for fetching
const getAll = (url) => {

    try {
        return fetch(`${baseURL}${url}`, {
            method: 'GET',
            header: {
                Authorization: key
            }
        })
    } catch (error) {
        console.log('Error Found:' `${error}`)
    }
}


const getBooks = async () => {

    let user = await getAll('/book');
    let book_docs = await user.json();
    localStorage.setItem('book_docs', JSON.stringify(book_docs));

}
getBooks();

let retrievedBooks = (JSON.parse(localStorage.getItem('book_docs')).docs)

retrievedBooks.forEach(element => {

    let newArticle = document.createElement('article');

    let about_books = document.createElement('section')

    let coverImage = document.createElement('figure')

    newArticle.appendChild(coverImage)
    newArticle.appendChild(about_books)
    book_titles.appendChild(newArticle)

});

let articleSection = document.querySelectorAll('article section')

articleSection[0].classList.add('section-image-1');
articleSection[1].classList.add('section-image-2');
articleSection[2].classList.add('section-image-3');

// console.log(retrievedBooks)
articleSection[0].innerHTML = `<p class="book-1-title">${retrievedBooks[0].name}</p>`
articleSection[0].innerHTML += `<p class="book-1-author">by J. R. R. Tolkien</p>`;



