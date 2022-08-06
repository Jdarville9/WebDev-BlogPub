async function editFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("edit-title").value.trim();
  const content = document.getElementById("edit-content").value.trim();
  const id = window.location.toString().split("/")[5];

  console.log(title, content, id);

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    console.log("success");
  } else {
    alert("Something didn't work right...");
  }
}

document
  .getElementById("update-button")
  .addEventListener("click", editFormHandler);
