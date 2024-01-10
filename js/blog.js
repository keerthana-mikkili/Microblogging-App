const blogList = document.getElementById("blogslist");
const createButton = document.getElementById("createbutton");
const createCard = document.getElementById("createcard");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const submitButton = document.getElementById("submit");

// To Fetch blogs from blogs JSON file 
let blogs = [];
const xhr = new XMLHttpRequest();
xhr.open('GET', 'Data/blogs.json', true);
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        blogs = JSON.parse(xhr.responseText);
        displayBlogs(blogs);
    }
};
xhr.send();

// To Display existing blogs
function displayBlogs() {
    blogList.innerHTML = "";
    blogs.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
                    <div>
                        <div>
                            <h3>${blog.title}</h3>
                            <p>Author: ${blog.author}</p>
                            <p>Created: ${blog.created}</p>
                            <p>${blog.content}</p>
                            <div>
                                <button type="submit" class="update-blog" data-index="${index}">Update</button>
                            </div>
                        </div>
                    <div>
                `;
        blogList.appendChild(blogCard);

        blogCard.addEventListener("click", (e) => {
            blogCard.classList.toggle("content");
        });
        
        blogCard.querySelector(".update-blog").addEventListener("click", (e) => {
            e.stopPropagation();
            const index = e.target.getAttribute("data-index");
            updateBlog(index);
        });
    });
}

// To Handle blog updates
function updateBlog(index) {
    const newContent = prompt("Edit the content:", blogs[index].content);
    const newAuthor = prompt("Edit the author:", blogs[index].author);

    if (newContent !== null && newAuthor !== null) {
        blogs[index].content = newContent;
        blogs[index].author = newAuthor;
        displayBlogs();
    }
}
// Event listener for the create button
createButton.addEventListener("click", () => {
    titleInput.value = "";
    authorInput.value = "";
    contentInput.value = "";
    createCard.style.display = "block";
});


// Event listener for the submit button
submitButton.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const content = contentInput.value;
    const created = new Date().toLocaleString();
    
    // Validate input fields
    if (title.trim() === '' || author.trim() === '' || content.trim() === '') {
        alert('Please fill out all fields');
        // Stops the function execution if validation fails
        return; 
    }
    
    // Adds the new blog
    blogs.push({ title, author, content, created });

    // To Display the updated blog list
    displayBlogs(blogs);

    //To Hide the create card
    createCard.style.display = "none";
});
