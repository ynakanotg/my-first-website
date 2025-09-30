function changeText() {
  document.getElementById("message").innerText = "JavaScriptで変更されました！";
}

function greet() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("greeting").innerText = `こんにちは、${name}さん！`;
}

function showDate() {
  const now = new Date();
  document.getElementById("dateArea").innerText = now.toLocaleString();
}

function changeBackground() {
  const colors = ["#FFCCCC", "#CCFFCC", "#CCCCFF", "#FFFFCC", "#E0FFFF", "#FFE4E1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

let count = 0;
function increment() {
  count++;
  document.getElementById("counter").innerText = count;
}

function addItem() {
  const input = document.getElementById("itemInput");
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.innerText = text;
    document.getElementById("itemList").appendChild(li);
    input.value = "";
  }
}

async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const list = document.getElementById('userList');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error('データ取得に失敗しました:', error);
  }
}

// ページ読み込み時に実行
fetchUsers();


