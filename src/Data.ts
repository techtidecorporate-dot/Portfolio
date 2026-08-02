import angularIcon from './assets/angular.svg';
import asanaIcon from './assets/asana.svg';
import awsIcon from './assets/aws.webp';
import sereNivaImg from './assets/sereniva.webp';
import nexusImg from './assets/nexus.webp';
import raynovaImg from './assets/raynova.webp';
import auraCommerceImg from './assets/aura-commerce.webp';
import bootstrapIcon from './assets/bootstrap.svg';
import cloudinaryIcon from './assets/cloudinary.svg';
import cpanelIcon from './assets/cpanel.svg';
import cplusplusIcon from './assets/cplusplus.svg';
import cssIcon from './assets/css.webp';
import djangoIcon from './assets/django.svg';
import dockerIcon from './assets/docker.svg';
import expressIcon from './assets/express.svg';
import fastapiIcon from './assets/fastapi.svg';
import figmaIcon from './assets/figma.webp';
import gcpIcon from './assets/gcp.webp';
import gitIcon from './assets/git.svg';
import githubIcon from './assets/github.svg';
import gnubashIcon from './assets/gnubash.svg';
import herokuIcon from './assets/heroku.webp';
import hostingerIcon from './assets/hostinger.svg';
import html5Icon from './assets/html5.svg';
import javascriptIcon from './assets/javascript.svg';
import jiraIcon from './assets/jira.svg';
import kotlinIcon from './assets/kotlin.svg';
import mongodbIcon from './assets/mongodb.svg';
import mysqlIcon from './assets/mysql.svg';
import nestjsIcon from './assets/nestjs.svg';
import nextdotjsIcon from './assets/nextdotjs.svg';
import nodedotjsIcon from './assets/nodedotjs.svg';
import postgresqlIcon from './assets/postgresql.svg';
import postmanIcon from './assets/postman.svg';
import pythonIcon from './assets/python.svg';
import radixuiIcon from './assets/radixui.svg';
import reactIcon from './assets/react.svg';
import reacthookformIcon from './assets/reacthookform.svg';
import reduxIcon from './assets/redux.svg';
import shadcnuiIcon from './assets/shadcnui.svg';
import slackIcon from './assets/slack.webp';
import socketdotioIcon from './assets/socketdotio.svg';
import supabaseIcon from './assets/supabase.svg';
import tailwindcssIcon from './assets/tailwindcss.svg';
import typescriptIcon from './assets/typescript.svg';
import vercelIcon from './assets/vercel.svg';
import zodIcon from './assets/zod.svg';

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
];

export const HERO_ROLES = [
    'Full Stack Developer',
    'React & Next.js Expert',
    'Node.js Engineer',
    'Mobile App Developer',
    'Cloud & DevOps Enthusiast',
];

export const HERO_TECH_BADGES = ['React', 'Next.js', 'Node.js', 'TypeScript', 'React Native', 'AWS'];

export const SOCIAL_LINKS = [
    {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/muhammad-nadir-202186383',
    },
    {
        id: 'github',
        label: 'GitHub',
        href: 'https://github.com',
    },
    {
        id: 'phone',
        label: 'Phone',
        href: 'tel:+923247991484',
    },
    {
        id: 'email',
        label: 'Email',
        href: 'mailto:ceo@techtidecorporate.com',
    },
];

export const CONTACT_INFO = [
    { label: 'Email', title: 'ceo@techtidecorporate.com', path: 'mailto:ceo@techtidecorporate.com' },
    { label: 'Phone', title: '+92 324 799 1484', path: 'tel:+923247991484' },
    { label: 'Location', title: 'Lahore, Pakistan', path: '#' },
];

export const TESTIMONIALS = [
    {
        id: 't1',
        quote: 'Muhammad delivered a stunning e-commerce platform that exceeded every expectation. His attention to performance and code quality is genuinely impressive. Shipped on time, zero bugs in production.',
        name: 'Sarah K.',
        role: 'Founder, Online Retail Brand',
        company: 'Retailio',
        avatar: '/testimonials/sarah-k.jpg',
    },
    {
        id: 't2',
        quote: 'Nadir completely rebuilt our legacy dashboard in React. The new UI is fast, intuitive, and our team productivity went up noticeably. He communicates clearly and meets every deadline.',
        name: 'James R.',
        role: 'CTO, B2B SaaS Startup',
        company: 'Flowbase',
        avatar: '/testimonials/james-r.jpg',
    },
    {
        id: 't3',
        quote: 'He built our mobile app from scratch — iOS and Android — in 8 weeks. The quality is on par with apps from much larger teams. Highly recommend if you need full-stack mobile talent.',
        name: 'Aisha M.',
        role: 'Product Manager, HealthTech Company',
        company: 'Vitalis',
        avatar: '/testimonials/aisha-m.jpg',
    },
    {
        id: 't4',
        quote: 'Our API was a nightmare before Nadir stepped in. He refactored the entire backend, added proper auth and caching, and reduced our response times by 60%. Exceptional engineer.',
        name: 'David L.',
        role: 'Lead Developer, Agency',
        company: 'Northbeam',
        avatar: '/testimonials/david-l.jpg',
    },
    {
        id: 't5',
        quote: 'Translated our Figma designs to pixel-perfect React components in record time. Every hover state, every animation — exactly as designed. Will hire again without hesitation.',
        name: 'Priya S.',
        role: 'UI/UX Designer & Entrepreneur',
        company: 'Studio Priya',
        avatar: '/testimonials/priya-s.jpg',
    },
    {
        id: 't6',
        quote: 'Muhammad set up our entire cloud infrastructure on AWS — CI/CD, Docker, auto-scaling. Our deployment process went from manual uploads to fully automated in two weeks.',
        name: 'Omar F.',
        role: 'DevOps Manager, Scale-up',
        company: 'Ledgerly',
        avatar: '/testimonials/omar-f.jpg',
    },
];

export const SERVICES = [
    {
        id: 'web-dev',
        title: 'Web App Development',
        description: 'High-performance web applications built with React, Next.js, and TypeScript. From MVPs to complex SaaS platforms — responsive, accessible, and blazing fast.',
        tags: ['React', 'Next.js', 'TypeScript', 'SEO'],
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        description: 'Cross-platform iOS & Android apps with React Native and Expo. Native-feeling performance, single codebase, published to both app stores.',
        tags: ['React Native', 'Expo', 'iOS', 'Android'],
    },
    {
        id: 'backend',
        title: 'API & Backend Engineering',
        description: 'RESTful and GraphQL APIs with Node.js, Express, and NestJS. Designed for scale — with proper auth, rate limiting, and clean architecture.',
        tags: ['Node.js', 'NestJS', 'GraphQL', 'PostgreSQL'],
    },
    {
        id: 'devops',
        title: 'Cloud & DevOps',
        description: 'End-to-end deployment pipelines, Docker containers, CI/CD workflows, and AWS infrastructure. Ship faster and more reliably with automation.',
        tags: ['AWS', 'Docker', 'CI/CD', 'Nginx'],
    },
    {
        id: 'ui-code',
        title: 'UI/UX to Code',
        description: 'Figma designs converted to pixel-perfect, interactive components. Every spacing, hover state, and animation — exactly as designed.',
        tags: ['Figma', 'Tailwind', 'Framer', 'CSS'],
    },
    {
        id: 'full-stack',
        title: 'Full Stack Solutions',
        description: 'Complete product builds — from database schema to deployed frontend. The full package: auth, payments, notifications, dashboards, and more.',
        tags: ['End-to-End', 'Auth', 'Stripe', 'Realtime'],
    },
];

export const PROJECTS = [
    {
        title: 'Nexus Clinic',
        category: 'Healthcare',
        problem: 'A growing clinic struggling with manual appointment bookings and fragmented patient records.',
        description: 'We implemented a full-scale MERN healthcare management system with secure telemedicine and automated scheduling.',
        results: '200% increase in patient bookings and 50% reduction in administrative overhead within 6 months.',
        image: nexusImg,
        technologies: ['React', 'Node.js', 'MongoDB', 'Telemedicine API'],
    },
    {
        title: 'RaynovaTech',
        category: 'Corporate Website',
        problem: 'Generic corporate website with high bounce rate and low visitor engagement.',
        description: 'Redesigned the entire digital presence with outcome-based messaging and a performance-optimized UI.',
        results: '3x more qualified leads and 40% improvement in average time-on-site.',
        image: raynovaImg,
        technologies: ['React', 'Tailwind CSS', 'SEO Strategy', 'Conversion Tracking'],
    },
    {
        title: 'Sereniva Wellness',
        category: 'Wellness',
        problem: 'Manual spa booking process leading to scheduling conflicts and lost revenue.',
        description: 'Built a premium wellness management SPA with real-time therapist availability and automated reminders.',
        results: 'Automated 85% of bookings and zero scheduling conflicts since launch.',
        image: sereNivaImg,
        technologies: ['SPA Architecture', 'Firebase', 'Real-time Sync', 'Framer Motion'],
    },
    {
        title: 'Aura Commerce',
        category: 'E-commerce',
        problem: 'Traditional e-commerce stagnant sales and high cart abandonment.',
        description: 'Integrated immersive AR shopping experiences to let customers try products virtually.',
        results: '50% increase in engagement and 25% reduction in product returns.',
        image: auraCommerceImg,
        technologies: ['AR Web Experience', 'MERN Stack', 'AWS Infrastructure', 'Performance UX'],
    },
];

export interface SkillItem {
    name: string;
    slug: string;
    iconSrc?: string;
}

export interface SkillCategoryData {
    title: string;
    skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategoryData[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', slug: 'javascript', iconSrc: javascriptIcon },
            { name: 'TypeScript', slug: 'typescript', iconSrc: typescriptIcon },
            { name: 'Python', slug: 'python', iconSrc: pythonIcon },
            { name: 'C++', slug: 'cplusplus', iconSrc: cplusplusIcon },
            { name: 'Java', slug: 'openjdk' },
            { name: 'Kotlin', slug: 'kotlin', iconSrc: kotlinIcon },
            { name: 'BASH', slug: 'gnubash', iconSrc: gnubashIcon },
        ],
    },
    {
        title: 'Frontend & Mobile',
        skills: [
            { name: 'React', slug: 'react', iconSrc: reactIcon },
            { name: 'Next.js', slug: 'nextdotjs', iconSrc: nextdotjsIcon },
            { name: 'React Native', slug: 'react', iconSrc: reactIcon },
            { name: 'Expo', slug: 'expo' },
            { name: 'Angular', slug: 'angular', iconSrc: angularIcon },
            { name: 'Jetpack Compose', slug: 'jetpackcompose' },
            { name: 'Redux', slug: 'redux', iconSrc: reduxIcon },
            { name: 'Tailwind CSS', slug: 'tailwindcss', iconSrc: tailwindcssIcon },
            { name: 'Bootstrap', slug: 'bootstrap', iconSrc: bootstrapIcon },
            { name: 'HTML', slug: 'html5', iconSrc: html5Icon },
            { name: 'CSS', slug: 'css3', iconSrc: cssIcon },
            { name: 'Radix UI', slug: 'radixui', iconSrc: radixuiIcon },
            { name: 'shadcn/ui', slug: 'shadcnui', iconSrc: shadcnuiIcon },
            { name: 'React Hook Form', slug: 'reacthookform', iconSrc: reacthookformIcon },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', slug: 'nodedotjs', iconSrc: nodedotjsIcon },
            { name: 'Express.js', slug: 'express', iconSrc: expressIcon },
            { name: 'NestJS', slug: 'nestjs', iconSrc: nestjsIcon },
            { name: 'FastAPI', slug: 'fastapi', iconSrc: fastapiIcon },
            { name: 'Django', slug: 'django', iconSrc: djangoIcon },
            { name: 'Socket.IO', slug: 'socketdotio', iconSrc: socketdotioIcon },
            { name: 'Zod', slug: 'zod', iconSrc: zodIcon },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'PostgreSQL', slug: 'postgresql', iconSrc: postgresqlIcon },
            { name: 'MongoDB', slug: 'mongodb', iconSrc: mongodbIcon },
            { name: 'MySQL', slug: 'mysql', iconSrc: mysqlIcon },
            { name: 'Supabase', slug: 'supabase', iconSrc: supabaseIcon },
        ],
    },
    {
        title: 'Cloud & DevOps',
        skills: [
            { name: 'AWS', slug: 'amazonaws', iconSrc: awsIcon },
            { name: 'GCP', slug: 'googlecloud', iconSrc: gcpIcon },
            { name: 'Docker', slug: 'docker', iconSrc: dockerIcon },
            { name: 'Heroku', slug: 'heroku', iconSrc: herokuIcon },
            { name: 'Vercel', slug: 'vercel', iconSrc: vercelIcon },
            { name: 'cPanel', slug: 'cpanel', iconSrc: cpanelIcon },
            { name: 'Hostinger', slug: 'hostinger', iconSrc: hostingerIcon },
        ],
    },
    {
        title: 'Tools & Productivity',
        skills: [
            { name: 'Git', slug: 'git', iconSrc: gitIcon },
            { name: 'GitHub', slug: 'github', iconSrc: githubIcon },
            { name: 'Postman', slug: 'postman', iconSrc: postmanIcon },
            { name: 'Figma', slug: 'figma', iconSrc: figmaIcon },
            { name: 'Asana', slug: 'asana', iconSrc: asanaIcon },
            { name: 'Slack', slug: 'slack', iconSrc: slackIcon },
            { name: 'Jira', slug: 'jira', iconSrc: jiraIcon },
            { name: 'Cloudinary', slug: 'cloudinary', iconSrc: cloudinaryIcon },
        ],
    },
];