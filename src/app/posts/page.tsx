import React, { useEffect } from "react";

function PostsList() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => console.log(response.json()))
    .then((json) => console.log(json));

  return <div>this is posts page</div>;
}

export default PostsList;
