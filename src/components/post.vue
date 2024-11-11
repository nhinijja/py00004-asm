<template>
  <div class="post">
    <!-- Hero Start -->
    <div class="container my-4 mx-auto" style="max-width: 800px">
      <form
        method="post"
        enctype="multipart/form-data"
        class="post-form p-4 bg-light rounded shadow"
      >
        <input type="hidden" value="${item.idNews}" name="idNews" readonly />

        <div class="mb-3">
          <label for="title" class="form-label">Title:</label>
          <input
            id="title"
            type="text"
            value=""
            name="title"
            class="form-control"
            placeholder="Enter the post title"
            required
          />
        </div>

        <div class="mb-3">
          <label for="category" class="form-label">Category:</label>
          <select id="category" name="category" class="form-select" required>
            <option disabled selected>Select a category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
            <option value="4">Category 4</option>
            <option value="5">Category 5</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="content" class="form-label">Content:</label>
          <textarea
            id="content"
            rows="10"
            name="content"
            class="form-control"
            placeholder="Write your post content here..."
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
          <label for="home" class="form-check-label">
            Post to the front page?
          </label>
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
          <button type="reset" class="btn btn-warning mx-2">Reset</button>
        </div>
      </form>
    </div>

    <hr />

    <div class="container my-4 mx-auto" style="max-width: 800px">
      <table v-if="posts.length" class="table table-striped table-bordered">
        <thead class="table-dark">
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Posted Date</th>
            <th>Author</th>
            <th>Category</th>
            <th>Front Page</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.idNews">
            <td>{{ index + 1 }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.date }}</td>
            <td>{{ post.author }}</td>
            <td>{{ post.category }}</td>
            <td>{{ post.frontPage ? "Yes" : "No" }}</td>
            <td>
              <a
                :href="`${path}/edit/${post.idNews}`"
                class="btn btn-sm btn-info"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="text-center">No posts available</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostManagement",
  data() {
    return {
      posts: [], // Sample data array
      path: "/posts",
    };
  },
  mounted() {
    // Sample data for demonstration; replace with API call if needed
    this.posts = [
      {
        idNews: 1,
        title: "Sample Title 1",
        date: "2024-11-11",
        author: "Admin",
        category: "Category 1",
        frontPage: true,
      },
      {
        idNews: 2,
        title: "Sample Title 2",
        date: "2024-11-11",
        author: "Admin",
        category: "Category 2",
        frontPage: false,
      },
    ];
  },
};
</script>

<style scoped>
.post {
  padding-top: 60px; /* Tùy chỉnh khoảng cách này để phù hợp với chiều cao của navbar */
}

.post-form .form-label {
  font-weight: 600;
}
.post-form .form-control,
.post-form .form-select {
  border-radius: 0.25rem;
}
.table {
  margin-top: 20px;
}
.table-bordered th,
.table-bordered td {
  vertical-align: middle;
}
.container {
  max-width: 1200px;
}
.navbar-nav {
  justify-content: center; /* Căn giữa navbar */
}
.text-center {
  margin: 20px 0;
}
</style>
