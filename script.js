let posts = [{

    'authorImg': 'img/1.jpg',
    'author': 'The Brighton Newspaper',
    'location': 'Brighton',
    'image': 'img/newspaper.jpg',
    'description': 'Text1',
},
{   
    'authorImg': 'img/2.jpg',
    'author': 'WFH',
    'location': 'London',
    'image': 'img/homeoffice.jpg',
    'description': 'Text1',
},
{   
    'authorImg': 'img/3.jpg',
    'author': 'Worldwide News',
    'location': 'New York',
    'image': 'img/soldier.jpg',
    'description': 'Text1',
},
{   
    'authorImg': 'img/4.jpg',
    'author': 'Body44400',
    'location': 'Washington',
    'image': 'img/gym.jpg',
    'description': 'Text1',
},
{   
    'authorImg': 'img/biker.jpg',
    'author': 'The&nbsp;Racing&nbsp;Cyclist&nbsp;Magazine',
    'location': 'Washington',
    'image': 'img/tour-de-france.jpg',
    'description': 'What is needed to become one of the best racing cyclist?',
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
                    <a href="#" class="authorlink">
                        <div class="bolt">
                            ${post['author']}
                        </div>
                    </a>
                    <div>
                        ${post['location']}
                    </div>
                </div>
            </div>
            <img class="postimage" src="${post['image']}"> 
            <div class="icons">
                <img src="img/heart.png">
                <img src="img/heart-filled.png" class="d-none">
                <img src="img/bubble.png">
            </div>
            <div class="likes">
                x likes
            </div>
            <div class="description-section">
                <a href="#" class="namelink">
                    <div class="bolt">
                        ${post['author']}
                    </div>
                </a>
                <div>
                    ${post['description']}
                </div>
            </div>
            <div class="commentsection">
                <textarea placeholder="Add a comment"></textarea>
                <a href="#" class="bluelink">Post</a>
            </div>
        <div>
        `;
    }
}