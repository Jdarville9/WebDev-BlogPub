const inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 30000);
  }
};

function logout() {
  console.log("You logged now boi!");
  logout();
}

async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Logout failed");
  }
}

inactivityTime();
