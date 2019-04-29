var userList = document.getElementById("userList").children;
console.log(userList);
for (let i = 0; i <= userList.length - 1; i++) {
  userList[i].style.display = "none";
}

var length = 5;
var startId = 0;

for (let i = startId; i <= startId + length - 1; i++) {
  userList[i].style.display = "block";
}
startId += length;

setInterval(() => {
  for (let i = 0; i <= userList.length - 1; i++) {
    userList[i].style.display = "none";
  }

  if (startId + length >= userList.length) {
    for (let i = startId; i <= userList.length - 1; i++) {
      userList[i].style.display = "block";
    }
    startId = 0;
  } else {
    for (let i = startId; i <= startId + length - 1; i++) {
      userList[i].style.display = "block";
    }
    startId += length;
  }
}, 3000);
