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
        title: "Algorithmic Health Insurance, Fair or Not?",
        date: "10/17/2024",
        description: "Companies are beginning to use algorithms to determine whether insurance claims should be denied or pended for review, is this ok?",
        image: "algohiring.png",
        imageAlt: "An image of an algorithm",
        slug: "blogs/algorithmic-hiring.html",
    },
    {
        title: "AI Doctors, Who is Responsible?",
        date: "10/14/2024",
        description: "We are entering a new age where human doctors may be replaced by AI. However, who bears the responsibility if complications occur?",
        image: "ai-doctor.png",
        imageAlt: "An image of a robot doctor",
        slug: "blogs/algorithmic-hiring.html",
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
