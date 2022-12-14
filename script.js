let posts = [{

    'authorImg': 'img/1.jpg',
    'author': 'tagesschau',
    'location': 'New York',
    'image': 'img/gym.jpg',
    'description': 'Text1',
},
{   'authorImg': 'img/1.jpg',
    'author': 'tagesschau',
    'location': 'New York',
    'image': 'img/gym.jpg',
    'description': 'Text1',
}

];

function show(){
    document.getElementById('postcontainer').innerHTML += '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        document.getElementById('postcontainer').innerHTML += `
        <div class="card">
            <div class="profile-section">
                <img class="profilepicture" src="${post['authorImg']}">
                <div class="author-details">
                    <div>${post['author']}</div>
                    <div>${post['location']}</div>
                </div>
            </div>
            <img class="postimage" src="${post['image']}"> 
            <div class="icons">
            <img src="img/heart.png">
            <img src="img/heart-filled.png" class="d-none">
            <img src="img/bubble.png">
            </div>
            <div>${post['description']}</div>
        <div>
        `;
    }
}