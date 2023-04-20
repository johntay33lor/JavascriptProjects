const apiUrl = 'https://jsonplaceholder.typicode.com';

// Get all posts
function getAllPosts() {
  hideRes();
  fetch(`${apiUrl}/posts`)
    .then(response => response.json())
    .then(json => showRes('getAllPosts', JSON.stringify(json)));
}

// Get post with id of 10
function getPostById() {
  hideRes();
  fetch(`${apiUrl}/posts/10`)
    .then(response => response.json())
    .then(json => showRes('getPostById', JSON.stringify(json)));
}

// Create new post
function createNewPost() {
  hideRes();
  const post = {
    title: 'New Post',
    body: 'This is my new post',
    userId: 1
  };
  fetch(`${apiUrl}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => showRes('createNewPost', `New post created with ID ${json.id}`));
}

// Replace post by id
function replacePost() {
  hideRes();
  const post = {
    title: 'Replaced Post',
    body: 'This is my replaced post',
    userId: 1
  };
  fetch(`${apiUrl}/posts/12`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => showRes('replacePost', JSON.stringify(json)));
}

// Update post by id
function updatePost() {
  hideRes();
  const post = {
    title: 'Updated Title'
  };
  fetch(`${apiUrl}/posts/12`, {
    method: 'PATCH',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => showRes('updatePost', JSON.stringify(json)));}

    // Delete post by id
    function deletePost() {
      hideRes();
      fetch(`${apiUrl}/posts/12`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            showRes('deletePost', 'Post with ID 12 was successfully deleted');
          } else {
            showRes('deletePost', `Error deleting post: ${response.status} ${response.statusText}`);
          }
        });
    }
    
    // Hide all result elements
    function hideRes() {
      const results = document.querySelectorAll('.result');
      results.forEach(result => result.style.display = 'none');
    }
    
    // Show result in specified element
    function showRes(elementId, result) {
      const resultElement = document.getElementById(elementId);
      resultElement.innerHTML = result;
      resultElement.style.display = 'block';
    }

	