import logo from './logo.jpg'
import logo2 from './logo-rbg.png'
import favicon from './favicon.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import brand_img from './brand_img.png'
import afkr2 from './afkr2.jpg'
import afkr3 from './afkr3.jpg'
import afkr4 from './afkr4.jpg'
import afkr5 from './afkr5.jpg'
import afkr6 from './afkr6.jpg'
import afkr7 from './afkr7.jpg'
import afkr8 from './afkr8.jpg'
import afkr9 from './afkr9.jpg'
import afkr10 from './afkr10.jpg'
import agileCommunity from './agile-community.jpg'
import communityIntelligence from './community-intelligence.jpg'
import manifestoMovement from './manifesto-movement.jpg'

export const assets = {
  logo,
  logo2,
  favicon,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  left_arrow,
  right_arrow,
  afkr2,
  afkr3,
  afkr4,
  afkr5,
  afkr6,
  afkr7,
  afkr8,
  afkr9,
  afkr10,
  agileCommunity,
  communityIntelligence,
  manifestoMovement,
  
  
}


export const projectsData = [
  {
    id: "the-foundation-solidarity",
    title: "The Foundation of Solidarity",
    date: "2022-2024",
    location: "Kumasi, Ghana",
    description: "Providing immediate support to those in need. We focused on being present.",
    image: afkr2,
 
    // ── Extra detail fields ──
    fullDescription: `We established a deep, personal presence in five local areas in Accra -Ghana( Hobor, Akutuase, Adator, Addyman and Odenkey) building friendships that still exist today. We Directly supported over 95 people with essential resources, food and solidarity.`,
    impact: [
      "95+ Individuals",
      "5 communities reached"
    ],
    gallery: [afkr2,],   // add more images here as needed
    category: "Philantropy",
    status: "",
  },
  {
    id: "my-manifesto-movement",
    title: "The 'My Manifesto' Movement",
    date: "2025",
    location: "Ashanti, Ghana",
    description: "Training 3,000+ youth in Civic Responsibility, Cultural Intelligence (CQ), and Leadership.",
    image: manifestoMovement,
 
    fullDescription: `Training 3,000+ youth in Civic Responsibility, Cultural Intelligence (CQ), and Leadership. Transitioning youth from passive beneficiaries to High-Integrity Stewards of their communities.`,
    impact: [
      "Training 3,000+ youth in Civic Responsibility",
      "Cultural Intelligence (CQ)",
      "Leadership",
    ],
    gallery: [afkr3],
    category: "Sanitation",
    status: "",
  },
  {
    id: "school-renovation-supplies-drive",
    title: "School Renovation & Supplies Drive",
    date: "Dec 2023",
    location: "Tamale, Ghana",
    description: "Renovated classrooms and delivered learning materials to improve study conditions for students.",
    image: afkr4,
 
    fullDescription: `In December 2023, volunteers renovated four classrooms at a primary school in Tamale, repainting walls, fixing roofing, and installing new furniture. Over 500 sets of learning materials including textbooks, exercise books, and stationery were donated to students across three grade levels.`,
    impact: [
      "4 classrooms fully renovated",
      "500+ students received supplies",
      "3 grade levels covered",
      "20 volunteers participated",
    ],
    gallery: [afkr4],
    category: "Education",
    status: "",
  },
  {
    id: "the-community-intelligence",
    title: "The Community Intelligence (2026)",
    date: "Dec 2023",
    location: "Ashanti, Ghana",
    description: "Data research and report on Cultural Intelligence & Youth Agency .We believe that a lasting impact is built on trust, data and coordinated action",
    image: communityIntelligence,
 
    fullDescription: `The GWILAY Initiative: A deep-dive Research and Report into Social Capital. By mapping what our communities value and love about one another, we are creating a new "Data Currency" for impact that recognises indigenous identity`,
    impact: [
      "Providing Cultural Intelligence ",
      "creation of a new Data Currency",
      "A deep-dive Research",
      "Data research and report ",
    ],
    gallery: [afkr4],
    category: "Data Research",
    status: "",
  },
];

export const testimonialsData = [
  {
    name: "Amina Owusu",
    title: "Community Leader",
    image: afkr8,
    alt: "Portrait of Amina Owusu",
    rating: 5,
    text: "The foundation's team worked closely with our community to deliver sustainable solutions. Their support has been transformational."
  },
  {
    name: "Kwame Mensah",
    title: "Teacher",
    image: afkr9,
    alt: "Portrait of Kwame Mensah",
    rating: 5,
    text: "Their school renovation project gave our students a safe and inspiring place to learn. We are very grateful."
  },
  {
    name: "Alhassan Abdul",
    title: "Small Business Owner",
    image: afkr10,
    alt: "Portrait of Alhassan Abdul",
    rating: 5,
    text: "After the entrepreneurship workshops I received mentorship and seed funding that helped me grow my business."
  }
];