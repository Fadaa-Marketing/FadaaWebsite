import { FaFacebook, FaInstagram, FaLaptopCode, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LuPhone } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

export const headerLinks = [
    {
        title: "Home",
        href: "/",
    }, 
    {
        title: "About us",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Portfolio",
        href: "/portfolio",
    },
    {
        title: "Blogs",
        href: "/blogs",
    },
    {
        title: "Contact us",
        href: "/contact",
    },
    {
      title: "Jobs",
        href: "/jobs",
    }

]


export const services = [
  {
    title: "SOCIAL MEDIA",
    description:
      "We don't just post—we create social journeys. From content planning and creative copywriting...",
    icon: '/services/1.svg', 
  },
  {
    title: "WEBSITE",
    description:
      "Website Development: Your website is your brand's digital spaceship—it needs to be fast,...",
    icon: '/services/2.svg',
  },
  {
    title: "SEO",
    description:
      "We bring your brand to the top of search results organically. From keyword strategy and tec...",
    icon: '/services/3.svg'
    ,
  },
  {
    title: "MEDIA PRODUCTION",
    description:
      "Your story deserves to be told like a blockbuster. Whether it's video production, animation, re...",
    icon: '/services/4.svg'
    ,
  },
  {
    title: "BRANDING",
    description:
      "We build brands that people connect with. From identity creation and logo design to ten...",
    icon: '/services/5.svg'
    ,
  },
  {
    title: "REELS",
    description:
      "In a world of scrolls, you have seconds to shine. Our reels grab, hold, and magnetize attention t...",
    icon: '/services/6.svg'
    ,
  },
  {
    title: "MOBILE APPLICATION",
    description:
      "Your audience is mobile; are you? We build apps that slip into your users' daily lives, deliver value,...",
    icon: '/services/7.svg'
    ,
  },
  {
    title: "MEDIA BUYING",
    description:
      "Smart ads don't just reach they convert. We turn budgets into results with precision media bu...",
      icon: '/services/8.svg'
    ,
  },
];

export const CONTACT_INFO = [
  {
    type: 'phone',
    value: '+201063572222',
    icon: LuPhone,
  },
  {
    type: 'email',
    value: 'Info@fadaa-marketing.com',
    icon: MdOutlineMailOutline,
  },
  {
    type: 'address',
    value: 'Side Al Markazy Axis 56 6th Of October Giza Egypt 6 October',
    icon: FaLocationDot,
  },
];


export const contactData = [
  "Social Media",
  "Website",
  "SEO",
  "Media Production",
  "Other"
];

export const blogCategory = [
  'All' ,
  'Marketing' ,
  'Services' ,
  'Websites',
];


export const purposeData = [
  {
    title : 'Our Story' ,
    description: 'To become the go to agency for ambitious brands ready to grow beyond gravity and lead the MENA region’s digital space with bold thinking and results that speak.',
  },
  {
    title : 'Our Vision' ,
    description: 'To become the go to agency for ambitious brands ready to grow beyond gravity and lead the MENA region’s digital space with bold thinking and results that speak.',
  },
  {
    title : 'Our Mission' ,
    description: 'To become the go to agency for ambitious brands ready to grow beyond gravity and lead the MENA region’s digital space with bold thinking and results that speak.',
  },
]


export const planets = [
  {
    title:'Social Media',
    imgUrl: '/services/planets/1.png',
    link: '/services/social-media'
  },
  {
    title:'Web Development',
    imgUrl: '/services/planets/2.png',
    link: '/services/web-development'
  },
  {
    title:'SEO',
    imgUrl: '/services/planets/3.png',
    link: '/services/seo'
  },
  {
    title:'media buying',
    imgUrl: '/services/planets/4.png',
    link: '/services/media-buying'
  },
  {
    title:'branding',
    imgUrl: '/services/planets/5.png',
    link: '/services/branding'
  },
  {
    title:'media production',
    imgUrl: '/services/planets/6.png',
    link: '/services/media-production'
  },
  {
    title:'reels',
    imgUrl: '/services/planets/7.png',
    link: '/services/reels'
  },
  {
    title:'mobile application',
    imgUrl: '/services/planets/8.png',
    link: '/services/mobile-application'
  },
]


export const testimonials = [
  {
   imageUrl: '/clients/1.png'
  },
  {
      imageUrl: '/clients/2.png'
  },
  {
      imageUrl: '/clients/3.png'
  },
  {
      imageUrl: '/clients/4.png'
  },
  {
      imageUrl: '/clients/5.png'
  },
  {
      imageUrl: '/clients/6.png'
  },
  {
      imageUrl: '/clients/7.png'
  },
  {
      imageUrl: '/clients/8.png'
  },
  {
      imageUrl: '/clients/9.png'
  },
  {
      imageUrl: '/clients/10.png'
  },
  {
      imageUrl: '/clients/11.png'
  },
];

export const opportunityCat = [
  'All positions',
  'Engineering ',
  'Product ',
  'Design',
  'Operation',
  'Marketing',

]

export const jobsSocials = [
  {
      title:'Facebook',
      icon:<FaFacebook />,
      link:'https://www.facebook.com/share/1ANBAxCwds/?mibextid=wwXIfr'
  },
  {
      title:'Youtube',
      icon:<FaYoutube />,
      link:'https://youtube.com/@fadaamarketing?feature=shared'
  },
  {
      title:'Twitter',
      icon:<FaTwitter />,
      link:'https://twitter.com/Fadaamarketing'
  },
  {
      title:'Instagram',
      icon:<FaInstagram />,
      link:'https://www.instagram.com/fadaamarketing?igsh=OWYwd2lteWZtcmh1&utm_source=qr'
  },
  {
      title:'LinkedIn',
      icon:<FaLinkedinIn /> ,
      link:'https://www.linkedin.com/company/fadaa-marketing/'
  },
]


export const servicePort = [
  '/services/portfolio/1.jpg',
  '/services/portfolio/2.jpg',
  '/services/portfolio/3.jpg',
  '/services/portfolio/4.jpg',
  '/services/portfolio/5.jpg',
  '/services/portfolio/6.jpg',
  '/services/portfolio/7.jpg',
  '/services/portfolio/8.jpg',
  '/services/portfolio/9.jpg',
]


export const portfolio = [
  {
    imageUrl:'/portfolio/home/1.jpg',
    mobileImageUrl:'/portfolio/home/mob1.jpg',
    title:'Social Media',
    text:'Building your presence, engaging your audience, and growing your brand across platforms'
  },
  {
    imageUrl:'/portfolio/home/2.jpg',
    mobileImageUrl:'/portfolio/home/mob2.jpg',
    title:'Branding',
    text:'Crafting a unique identity that reflects your business values and leaves a lasting impression'
  },
  {
    imageUrl:'/portfolio/home/3.jpg',
    mobileImageUrl:'/portfolio/home/mob3.jpg',
    title:'Media Production',
    text:'Creating high-quality visuals and videos that tell your story and capture attention'
  },
  {
    imageUrl:'/portfolio/home/4.jpg',
    mobileImageUrl:'/portfolio/home/mob4.jpg',
    title:'Websites',
    text:'Designing and developing modern, responsive websites that deliver results and great user experiences'
  },
];



export const team = [
  {
      imageUrl:'/jobs/team/1.jpeg',
      title:'Collaborative Excellence',
      text:'Our team thrives on creative collaboration and shared success'
  },
  {
      imageUrl:'/jobs/team/2.jpeg',
      title:'Celebrating Wins',
      text:'Every achievement is a shared victory in our cosmic community'
  },
  {
      imageUrl:'/jobs/team/3.jpeg',
      title:'Growth & Mentorship',
      text:'Personalized guidance to accelerate your career trajectory'
  },
]



export const serviceGif = {
  'social-media' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'seo' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'branding' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'media-production' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'reels' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'mobile-app' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'web' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
  'media-buying' : [
    {
      imageUrl:'/services/social-media/1.gif',
      title:'Discovery',
      text:'We get to know your brand, tone, audience, and what makes people follow and stay'
    },
    {
      imageUrl:'/services/social-media/2.gif',
      title:'Strategy & Content Planning',
      text:'We create a voice, visual style, and plan built just for you'
    },
    {
      imageUrl:'/services/social-media/3.gif',
      title:'Creation & Management',
      text:'We bring your content to life and keep your presence consistent and engaging'
    },
    {
      imageUrl:'/services/social-media/4.gif',
      title:'Engagement & Community',
      text:'We connect with your audience in real time and keep the conversation alive'
    },
    {
      imageUrl:'/services/social-media/5.gif',
      title:'Optimization & Reporting',
      text:'We track what works and improve what doesn’t — always learning and adapting'
    },
  ],
}