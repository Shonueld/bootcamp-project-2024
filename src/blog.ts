// blog.ts (or blog.js if not using TypeScript)

type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Hello",
        date: "10/20/2024",
        description: "Welcome to my first blog post!",
        image: "pathHere",
        imageAlt: "A welcoming image",
        slug: "blog/hello",
    },
    {
        title: "Blog2",
        date: "10/21/2024",
        description: "Another exciting update!",
        image: "pathHere",
        imageAlt: "An image of excitement",
        slug: "blog/blog2",
    }
];

// Function to dynamically append blogs to the page
function appendBlogsToPage(blogs: Blog[]) {
    // Access the container where blogs will be appended
    const blogContainer = document.querySelector('.blog-content');

    if (!blogContainer) {
        console.error("Blog container not found");
        return;
    }

    // Iterate over each blog and create the necessary HTML elements
    blogs.forEach(blog => {
        // Create the blog div
        const blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-post');

        // Create title element (h1)
        const title = document.createElement('h1');
        title.textContent = blog.title;

        // Create date element (p)
        const date = document.createElement('p');
        date.classList.add('blog-date');
        date.textContent = blog.date;

        // Create description element (p)
        const description = document.createElement('p');
        description.textContent = blog.description;

        // Create image element (img)
        const img = document.createElement('img');
        img.src = blog.image;
        img.alt = blog.imageAlt;

        // Create a link to the blog (optional)
        const link = document.createElement('a');
        link.href = blog.slug;
        link.textContent = 'Read More';
        link.classList.add('blog-link');

        // Append the created elements to the blogDiv
        blogDiv.appendChild(title);
        blogDiv.appendChild(date);
        blogDiv.appendChild(img);
        blogDiv.appendChild(description);
        blogDiv.appendChild(link);

        // Append the blogDiv to the blogContainer
        blogContainer.appendChild(blogDiv);
    });
}

// Call the function to append blogs to the page
appendBlogsToPage(blogs);
