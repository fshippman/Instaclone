let posts = [{

    'authorImg': 'img/1.jpg',
    'author': 'The Brighton Newspaper',
    'location': 'Brighton',
    'image': 'img/newspaper.jpg',
    'likes': '147',
    'description': 'Text1',
    'comments':[],
},
{
    'authorImg': 'img/2.jpg',
    'author': 'WFH',
    'location': 'London',
    'image': 'img/homeoffice.jpg',
    'likes': '479',
    'description': 'Text1',
    'comments':[],
},
{
    'authorImg': 'img/3.jpg',
    'author': 'Worldwide News',
    'location': 'New York',
    'image': 'img/soldier.jpg',
    'likes': '601',
    'description': 'Text1',
    'comments':[],
},
{
    'authorImg': 'img/4.jpg',
    'author': 'Body44400',
    'location': 'Washington',
    'image': 'img/gym.jpg',
    'likes': '214',
    'description': 'Text1',
    'comments':[],
},
{
    'authorImg': 'img/biker.jpg',
    'author': 'The&nbsp;Racing&nbsp;Cyclist&nbsp;Magazine',
    'location': 'Washington',
    'image': 'img/tour-de-france.jpg',
    'likes': '702',
    'description': 'What is needed to become one of the best racing cyclist?',
    'comments':[],
}

];

function show() {
    document.getElementById('postcontainer').innerHTML += '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('postcontainer').innerHTML += createShowHTML(i);
        renderComments(i);
    }
}

function createShowHTML(i) {
    const post = posts[i];
    return /*html*/`
    <div class="card">
        <!-- POST -->
        <div class="profile-section">
            <img class="profilepicture" src="${post['authorImg']}">
            <div class="author-details">
                <a href="##" class="authorlink">
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
        <!-- ICONS -->
        <div class="icons">
        <a href="##" id="heart-unfilled${i}">
            <img src="img/heart.png"  onclick="enableHeart(${i});">
        </a>
        <a href="##" id="heart-filled${i}" class="d-none">  
            <img src="img/heart-filled.png"  onclick="disableHeart(${i});">
        </a>
            <img src="img/bubble.png">
        </div>
        <!-- LIKES -->
        <div class="likes" id="like${i}">
        ${post['likes']} likes
        </div>
        <!-- DESCRIPTION -->
        <div class="description-section">
            <a href="##" class="namelink">
                <div class="bolt">
                    ${post['author']}
                </div>
            </a>
            <div class="description">
                ${post['description']}
            </div>
        </div>
        <!-- COMMENTS -->
        <div id="commentsection${i}" class="commentsection"> 
        </div>
        <div class="add-comment-section">
            <textarea id="textarea${i}" placeholder="Add a comment"></textarea>
            <a href="javascript:addComment(${i});" class="bluelink">Post</a>
        </div>
    <div>
    `;
}
function enableHeart(index) {
   /*  element.classList.contains(class); */
    document.getElementById(`heart-filled${index}`).classList.remove('d-none');
    document.getElementById(`heart-unfilled${index}`).classList.add('d-none');
    posts[index]['likes']++;
    renderLike(index);
}

function disableHeart(index) {
    document.getElementById(`heart-filled${index}`).classList.add('d-none');
    document.getElementById(`heart-unfilled${index}`).classList.remove('d-none');
    posts[index]['likes']--;
    renderLike(index);
}

function renderLike(index){
    document.getElementById(`like${index}`).innerHTML = `${posts[index]['likes']} likes`
    ;
}

function renderComments(index) {
    document.getElementById(`commentsection${index}`).innerHTML = '';
    for (let j = 0; j < posts[index]['comments'].length; j++) {
        const comment = posts[index]['comments'][j];
        document.getElementById(`commentsection${index}`).innerHTML += `
            <div class="single-comment">
               <a href="#" class="comment namelink bolt">The&nbsp;Racing&nbsp;Cyclist&nbsp;Magazine</a> ${comment}\n
            </div>
            `;
    }
}


function addComment(index) {
    let comment = document.getElementById(`textarea${index}`);
    posts[index]['comments'].push(comment.value);
    comment.value = '';
    renderComments(index);
}
