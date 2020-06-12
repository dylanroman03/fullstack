import { format } from 'timeago.js';
import BookService from './services/BookService';

const bookService = new BookService();

class UI {
    async renderBooks(){
        const books = await bookService.getBooks() 
        console.log(books);
        const container = document.getElementById('books-cards');
        container.innerHTML = '';
        books.forEach(element => {
            const div = document.createElement('div');
            div.className = 'container';
            div.innerHTML = `
                <div class='card m-2'>
                    <div class='row'>
                        <div class='col-md-4'>
                           <img src="${element.imagePath}" class="img-fluid"/> 
                        </div>
                        <div class='col-md-8'>
                            <div class='card-block'>
                                <h4 class='card-title'>${element.title}</h4>
                                <p class="card-text">${element.author}</p>
                                <a href="#" class="btn btn-danger delete" _id="${element._id}">
                                    Delete
                                </a>
                            </div>
                        </div> 
                    </div>
                    <div class="card-footer">
                        ${format(element.created_at)}
                    </div>
                </div>            


            `;
            container.appendChild(div)
        });
    }

    async addANewBooks(book) {
        await bookService.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.id = 'message'
        div.className = `alert alert-${colorMessage}`;
        div.innerText = `${message}`;
        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');
        container.insertBefore(div, bookForm)
        setTimeout(() => {
            document.querySelector('#message').remove();            
        }, secondsToRemove)
    }

    async deleteBook(bookId) {
        await bookService.deleteBook(bookId)
        this.renderBooks();
    }
}

export default UI;