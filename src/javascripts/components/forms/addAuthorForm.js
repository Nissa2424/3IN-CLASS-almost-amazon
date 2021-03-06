/* import { createAuthorSubmitEvent } from '../../events'; */
import clearDom from '../../helpers/clearDom';

const addAuthorForm = () => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="first_name">Author First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter Author first name" required>
      </div>
      <div class="form-group">
        <label for="last_name">Author Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Author last name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" step="0.01" class="form-control" id="email" placeholder="Email Address" required>
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="favorite" value='checked'>
        <label class="form-check-label" for="sale">Favorite?</label>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;
};

export default addAuthorForm;
