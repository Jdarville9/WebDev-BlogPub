async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-text").value.trim();
  const post_id = window.location.toString().split("/")[4];

  console.log(post_id);
  console.log(comment_text);

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id, comment_text }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Your comment messed up fool");
    }
  }
}

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentFormHandler);
