import addBookForm from '../components/forms/addBookForm';
import {
  createBook,
  deleteBook,
  getSingleBook,
  updateBook
} from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import {
  createAuthor,
  updateAuthor,
  getSingleAuthor
} from '../helpers/data/authorData';
import addAuthorForm from '../components/forms/addAuthorForm';
import editAuthorForm from '../components/forms/editAuthorForm';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import { deleteAuthorBooks, viewAuthorBooks, viewBookDetails } from '../helpers/mergeData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');

        deleteBook(id).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#select-author').value
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        author_id: document.querySelector('#author_id').value,
        image: document.querySelector('#image').value,
        price: Number(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value,
        firebaseKey
      };

      updateBook(bookObject).then(showBooks);
    }

    // CLICK EVENT TO VIEW A BOOK
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewBookDetails(firebaseKey).then(viewBook);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteAuthorBooks(id).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey
      };

      createAuthor(authorObject).then(showAuthors);
    }

    // ADD CLICK EVENT FOR EDITING/UPDATING AN AUTHOR
    if (e.target.id.includes('edit-author-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleAuthor(id).then((authorObj) => editAuthorForm(authorObj));
    }

    // CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey
      };

      updateAuthor(authorObject).then(showAuthors);
    }

    // CLICK EVENT TO VIEW AN AUTHOR
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewAuthorBooks(firebaseKey).then(viewAuthor);
    }
  });
};

export default domEvents;
