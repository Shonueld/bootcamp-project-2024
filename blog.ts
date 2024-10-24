type Blog = {
    title: string
    date: string
    description: string
    image: string 
    imageAlt: string
    slug: string
}

const blogs: Blog[]=[
    {
        title: "Hello",
        date: "10/20/2024",
        description: "Welcome",
        image: "pathHere",
        imageAlt: "describe image",
        slug: "Link here",
    },
    {
        title: "Blog2",
        date: "10/21/2024",
        description: "Welcome",
        image: "pathHere",
        imageAlt: "describe image",
        slug: "Link here",
    }
]

function blogDOM() {
    // Fetch the class name of the blogs (select the first matching element)
    const blogContainer = document.getElementsByClassName("blog-content")[0];

    // Loop through the blogs array and create elements for each blog
    blogs.forEach(blog => {
        // Create a blog div to hold individual blog elements
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog'); // Add a class for styling

        // Create title element
        const blogTitle = document.createElement('h1');
        blogTitle.textContent = blog.title;

        // Create date element
        const blogDate = document.createElement('p');
        blogDate.textContent = blog.date;

        // Create description element
        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;

        // Create image element
        const blogImage = document.createElement('img');
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;

        // Create a link to the blog post (or slug)
        const blogLink = document.createElement('a');
        blogLink.href = blog.slug;
        blogLink.textContent = 'Read more';

        // Append all elements to the blog div
        blogDiv.appendChild(blogTitle);
        blogDiv.appendChild(blogDate);
        blogDiv.appendChild(blogImage);
        blogDiv.appendChild(blogDescription);
        blogDiv.appendChild(blogLink);

        // Append the blog div to the blog container
        blogContainer.appendChild(blogDiv);
    });
}
