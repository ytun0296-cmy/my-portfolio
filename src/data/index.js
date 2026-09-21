// Personal Information
import ecommerce from '../assets/ecommerce.jpg';
import portfolio from '../assets/portfolio.jpg';
import avatar from '../assets/avatar.jpg';

export const personalInfo = {
  name: 'YE MIN TUN',
  title: 'Frontend Developer',
  tagline: 'Building responsive, user-friendly web experiences',
  email: 'ytun0296@gmail.com',
  phone: '+95 9974693595',
  location: 'Yangon, Myanmar',
  github: 'https://github.com/ytun0296-cmy',
  resume: '/myCV.pdf',
  avatar: avatar,
};

// Skills Data
export const skills = {
  frontend: [
    { name: 'React', icon: '⚛️', level: 80 },
    { name: 'JavaScript', icon: '🟨', level: 60 },
    { name: 'Tailwind CSS', icon: '🎨', level: 80 },
    { name: 'Bootstrap CSS', icon: '🔧', level: 70 },
    { name: 'HTML/CSS', icon: '🌐', level: 85 },
  ],
  tools: [
    { name: 'Git/GitHub', icon: '🐙', level: 60 },
    { name: 'Figma', icon: '🎯', level: 50 },
    { name: 'Vite/Webpack', icon: '⚡', level: 80 },
  ],
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce with cart, discounts, featured products and payment',
    image: ecommerce,
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind', 'Swiper', 'Lucide'],
    demo: 'https://luxe-haven-m5nhqyfvb-ye-min-tun-s-projects.vercel.app/',
    github: 'https://github.com/ytun0296-cmy/LuxeHaven.git',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task board with drag-and-drop and real-time updates',
    image: '/projects/taskapp.jpg',
    tech: ['React.js', 'JavaScript', 'Tailwind', 'Redux'],
    demo: 'https://demo.com',
    github: 'https://github.com/yourusername/taskapp',
    featured: false,
  },
   {
    id: 3,
    title: 'Portfolio Template',
    description: 'Modern developer portfolio built with React and Tailwind CSS',
    image: portfolio,
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    demo: 'https://demo.com',
    github: 'https://github.com/yourusername/portfolio',
    featured: true,
  },
  // {
  //   id: 4,
  //   title: 'Weather Dashboard',
  //   description: 'Real-time weather tracking with interactive maps and forecasts',
  //   image: '/projects/weather.jpg',
  //   tech: ['React', 'JavaScript', 'Tailwind', 'Chart.js', 'OpenWeather'],
  //   demo: 'https://demo.com',
  //   github: 'https://github.com/yourusername/weather',
  //   featured: false,
  // }
];




































// Experience Data
// export const experience = [
//   {
//     id: 1,
//     company: 'Tech Corp',
//     position: 'Senior Frontend Developer',
//     period: '2022 - Present',
//     description: 'Leading the frontend team, architecting component libraries, and optimizing performance. Implementing micro-frontend architecture and mentoring junior developers.',
//     technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GraphQL'],
//   },
//   {
//     id: 2,
//     company: 'Startup Inc',
//     position: 'Frontend Developer',
//     period: '2020 - 2022',
//     description: 'Built responsive web applications from scratch, implemented CI/CD pipelines, and mentored juniors. Improved page load time by 40% through code splitting and lazy loading.',
//     technologies: ['React', 'JavaScript', 'SCSS', 'Redux', 'Jest'],
//   },
//   {
//     id: 3,
//     company: 'Agency XYZ',
//     position: 'Junior Developer',
//     period: '2019 - 2020',
//     description: 'Developed client websites, implemented animations, and ensured cross-browser compatibility. Collaborated with designers to create pixel-perfect implementations.',
//     technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
//   },
// ];

// Testimonials Data
// export const testimonials = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'CTO at Tech Corp',
//     image: '/testimonials/sarah.jpg',
//     text: 'John is an exceptional developer. He delivered the project ahead of schedule and exceeded our expectations. His attention to detail and problem-solving skills are outstanding.',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Mike Chen',
//     role: 'Product Manager at Startup Inc',
//     image: '/testimonials/mike.jpg',
//     text: 'Working with John was a pleasure. His code is clean, maintainable, and he communicates clearly. He\'s a valuable asset to any development team.',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Emily Rodriguez',
//     role: 'Design Lead at Agency XYZ',
//     image: '/testimonials/emily.jpg',
//     text: 'John has a great eye for design and can translate complex designs into pixel-perfect code. He\'s the best frontend developer I\'ve worked with.',
//     rating: 5,
//   },
// ];

// // Services Data (Optional)
// export const services = [
//   {
//     id: 1,
//     icon: '💻',
//     title: 'Web Development',
//     description: 'Building responsive, fast, and SEO-friendly websites using modern technologies.',
//   },
//   {
//     id: 2,
//     icon: '📱',
//     title: 'Mobile-First Design',
//     description: 'Creating seamless experiences across all devices with mobile-first approach.',
//   },
//   {
//     id: 3,
//     icon: '⚡',
//     title: 'Performance Optimization',
//     description: 'Improving loading times and overall performance of web applications.',
//   },
//   {
//     id: 4,
//     icon: '🎨',
//     title: 'UI/UX Design',
//     description: 'Designing intuitive user interfaces with focus on user experience.',
//   },
// ];

// // Certifications Data (Optional)
// export const certifications = [
//   {
//     id: 1,
//     name: 'React Developer Certification',
//     issuer: 'Meta',
//     date: '2023',
//     link: 'https://coursera.org/verify/...',
//   },
//   {
//     id: 2,
//     name: 'AWS Certified Developer',
//     issuer: 'Amazon Web Services',
//     date: '2022',
//     link: 'https://aws.amazon.com/certification/...',
//   },
//   {
//     id: 3,
//     name: 'Google UX Design Certificate',
//     issuer: 'Google',
//     date: '2021',
//     link: 'https://coursera.org/verify/...',
//   },
// ];

// Blog Posts (Optional)
// export const blogPosts = [
//   {
//     id: 1,
//     title: '10 Tips for Better React Performance',
//     excerpt: 'Learn how to optimize your React applications for better performance.',
//     date: 'Jan 15, 2024',
//     readTime: '5 min read',
//     image: '/blog/react-performance.jpg',
//     link: '/blog/react-performance',
//   },
//   {
//     id: 2,
//     title: 'Mastering Tailwind CSS in 2024',
//     excerpt: 'Everything you need to know about using Tailwind CSS effectively.',
//     date: 'Jan 10, 2024',
//     readTime: '4 min read',
//     image: '/blog/tailwind.jpg',
//     link: '/blog/tailwind-2024',
//   },
// ];