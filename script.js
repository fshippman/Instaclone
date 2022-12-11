let posts = [{

    'author': 'tagesschau',
    'image': 'img/img1.jpg',
    'description': 'Text1',
    'location': '',
},
{
    'author': 'tagesschau',
    'image': 'img/img1.jpg',
    'description': 'Text1',
    'location': '',
}



];

function show(){
    document.getElementById('postcontainer').innerHTML += '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        document.getElementById('postcontainer').innerHTML += `
        <div class="card">
            <img src="${post['image']}">
            <div>${post['author']}</div>
            <div>${post['description']}</div>
        <div>
        `;
    }
}