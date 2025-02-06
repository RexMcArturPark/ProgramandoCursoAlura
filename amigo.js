```

### JavaScript (script.js)

let friends = [];

function addFriend() {
    const friendName = document.getElementById('friendName').value;
    if (friendName) {
        friends.push(friendName);
        document.getElementById('friendName').value = '';
        updateFriendList();
    }
}

function updateFriendList() {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendList.appendChild(li);
    });
}

function selectRandomFriend() {
    if (friends.length > 0) {
        const randomIndex = Math.floor(Math.random() * friends.length);
        const selectedFriend = friends[randomIndex];
        document.getElementById('selectedFriend').textContent = `Amigo seleccionado: ${selectedFriend}`;
    } else {
        document.getElementById('selectedFriend').textContent = 'No hay amigos en la lista.';
    }
}
```


