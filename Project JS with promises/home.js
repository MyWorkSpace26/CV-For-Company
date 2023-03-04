function getPosts(userId){
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    reject("Error with posts request");
                }
            })
            .then((posts) => {
                document.getElementById("posts").innerHTML = ""
                for (post of posts) {
                    let contant = `
                    <div id="post">
                        <h3>${post.title}</h3>
                        <hr>
                        <h4>${post.body}</h4>
                    </div>
                    `
                    document.getElementById("posts").innerHTML += contant
                }
                resolve();
            })
    }
    

    function getUsers() {
        return new Promise((resolve,reject) => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                    
                }else{
                    reject("Error with users request");
                }

            })
            .then((users) => {
                document.getElementById("users").innerHTML = ""
                for (user of users) {
                    let contant = `
            <div id="user" onclick="userClick(${user.id}, this);">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
            `
                    document.getElementById("users").innerHTML += contant
                }
                resolve();
            })
        })
    }
    getUsers().then(()=>{
        getPosts(1)
    }).catch((ErorrMessage) =>{
        alert("Message:"+ErorrMessage)
    });


    function userClick(id,el){
        getPosts(id);
        let selectedElements = document.getElementsByClassName("selected")
        for(element of selectedElements){
            element.classList.remove("selected");
        }
        el.classList.add("selected");
    }