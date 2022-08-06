async function deletePost(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[5];

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("That didn't work muchacho");
  }
}

document.getElementById("delete-button").addEventListener("click", deletePost);
