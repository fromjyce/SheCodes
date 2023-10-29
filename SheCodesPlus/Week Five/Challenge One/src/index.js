let url = "https://jsonplaceholder.typicode.com/comments";

function showFirstComment(response) {
  console.log(response.data[0].email);
}

axios.get(url).then(showFirstComment);
