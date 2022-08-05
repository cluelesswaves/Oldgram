const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

window.addEventListener("load", function(){
    const main = document.querySelector("main");
    
    function renderPost(postObj) {
        let {name, username, location, avatar, post, comment, likes} = postObj;
        main.innerHTML += `
            <section>
                <div class="section-header">
                    <img src=${avatar} alt="van gogh's avatar" class="user-avatar">
                    <div class="section-header-text">
                        <h6>${name}</h6>
                        <p class="small-text">${location}</p>
                    </div>              
                </div> 
                <img src=${post} class="post-img" id="postImg">
                <div class="section-icons">
                    <img src="images/icon-heart.png" alt="like icon" id="iconHeart">
                    <img src="images/icon-comment.png" alt="comment icon">
                    <img src="images/icon-dm.png" alt="direct message icon">
                </div>
                <div class="section-text">
                    <p class="bold-text" id="likesText">${likes * 1002} likes</p>
                    <p><strong>${username}</strong> ${comment}</p> 
                 </div>                            
            </section>
            `
    }
    for (postObj of posts) {
        renderPost(postObj);
    }
    
});

