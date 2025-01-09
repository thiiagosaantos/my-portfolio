import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Thiago',
    lastName:  'Santos',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Sao_Paulo',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Português', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/thiiagosaantos',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/thiagosanntos/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:thiagosantosdevelop@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and architect</>,
    subline: <>I'm Thiago, a software engineer at <InlineCode>RASTREEI</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/thiagosantos'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Thiago Santos is a software engineer and solutions architect with a passion for transforming complex challenges into simple, elegant technical solutions. His expertise spans digital interfaces, interactive systems, and the intersection of software development and architecture.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Rastreei Sistema de Monitoramento',
                timeframe: '2022 - Present',
                role: 'Full Stack-Developer',
                achievements: [
                    <>Performing system integrations, maintenance, and API implementations to ensure the application's scalability.</>,
                    <>Development and maintenance of responsive and accessible user interfaces, including the implementation of interactive features using modern frameworks such as Angular. Integration of front-end applications with APIs to ensure seamless communication with back-end services.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Rastreei Sistema de Monitoramento',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Centro Universitário Gama e Souza',
                timeframe: '2021 - 2022',
                role: 'Marketing and Designer',
                achievements: [
                    <>Developed strategies and solutions to increase the paying student base for the university.</>,
                    <>Created images for social media and landing pages, including designs for the university and promotional materials for specific campaigns.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University Estácio',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Colégio Imperial Dom Pedro II',
                description: <>Studied technical high school in systems analysis and development.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Nest.js',
                description: <>Building next gen apps with Nest.js + TypeORM.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Tailwind.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            
            {
                title: 'RabbitMQ | Docker | AWS | Angular | WebSocket | MicroService | PHP | Python | MySQL',
                description: <>I specialize in designing, developing, and maintaining scalable and efficient systems by leveraging modern tools and best practices. Using RabbitMQ, I manage message queues for asynchronous communication in distributed systems, ensuring reliable and scalable architectures. With Docker, I containerize applications to maintain consistency across environments, enabling rapid deployment and resource efficiency. On AWS, I utilize cloud services like EC2, S3, Elastic Beanstalk, CloudFront, RDS, and Lambda to deliver scalable, secure, and high-performance solutions. For front-end development, I build dynamic and responsive applications using Angular, focusing on maintainability and user experience. Through WebSocket, I implement real-time communication for seamless, low-latency interactions.

                In a microservices context, I design distributed systems using Microservices architecture, ensuring modularity, scalability, and fault tolerance. For back-end development, I use PHP and Python, combining secure coding practices and automation to deliver clean and robust solutions. With MySQL, I manage relational databases, optimizing performance, scalability, and security.
                
                I incorporate CI/CD pipelines, automated testing, and container orchestration to streamline the development lifecycle, ensuring continuous delivery, reliability, and high-quality deployments across all projects.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-05.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-06.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-07.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-08.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-09.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-10.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-11.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                    {
                        src: '/images/projects/project-01/cover-12.jpg',
                        alt: 'Project image',
                        width: 12,
                        height: 5
                    },
                ]
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };