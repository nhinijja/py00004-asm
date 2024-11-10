<template>
  <!-- Hero Start -->
  <div class="container my-4">
    <form method="post" enctype="multipart/form-data" class="post-form">
      <input type="hidden" value="${item.idNews}" name="idNews" readonly />

      <div class="mb-3">
        <label for="title" class="form-label">Title:</label>
        <input
          id="title"
          type="text"
          value=""
          name="title"
          class="form-control"
          required
        />
      </div>

      <div class="mb-3">
        <label for="category" class="form-label">Category:</label>
        <select id="category" name="category" class="form-select" required>
          <option disabled selected></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Content:</label>
        <textarea
          id="content"
          rows="10"
          name="content"
          class="form-control"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image:</label>
        <input id="image" name="image" type="file" class="form-control" />
      </div>

      <div class="mb-3 form-check">
        <input
          id="home"
          type="checkbox"
          class="form-check-input"
          name="home"
          value="true"
        />
        <label for="home" class="form-check-label"
          >Post to the front page?</label
        >
      </div>

      <div class="text-center mt-3">
        <button
          type="submit"
          formaction="${path}/create"
          class="btn btn-success mx-2"
        >
          Add
        </button>
        <button
          type="submit"
          formaction="${path}/update"
          class="btn btn-primary mx-2"
        >
          Edit
        </button>
        <button
          type="submit"
          formaction="${path}/delete"
          class="btn btn-danger mx-2"
        >
          Delete
        </button>
        <button
          type="reset"
          formaction="${path}/reset"
          class="btn btn-warning mx-2"
        >
          Reset
        </button>
      </div>
    </form>
  </div>

  <hr />

  <div class="container my-4">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Title</th>
          <th>Posted Date</th>
          <th>Author</th>
          <th>Category</th>
          <th>Front page?</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <a href="${path}/edit/${a.idNews}" class="btn btn-sm btn-info"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "postManagement",
};
</script>
