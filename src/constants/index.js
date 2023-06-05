import Award from '../assets/Award.png'
import manVec from '../assets/manVec.png'
import equinox from '../assets/equinix.png'
import digital from '../assets/digital.png'
import logo1 from '../assets/logo1.png'
import logo3 from '../assets/logo3.png'
import product from '../assets/product.png'
import feed2 from '../assets/feed2.png'
import feed1 from '../assets/feed1.png'
import CountUp from 'react-countup'
import blog1 from '../assets/blog-1.png'
import blog2 from '../assets/blog-2.png'
import blog3 from '../assets/blog-3.png'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image6 from '../assets/image-6.jpg'
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import {
  IoChevronUpCircleOutline,
  IoChevronDownCircleOutline,
} from "react-icons/io5";
import {
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "aboutUs",
    title: "About Us",
  },
  {
    id: "contactUs",
    title: "Contact Us",
  },
];

export const frequentQuestions = [
  {
    id: "feature-1",
    icon: <IoChevronDownCircleOutline size={25} />,
    title: "Do you offer home loan services",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    id: "feature-2",
    icon: <IoChevronUpCircleOutline size={25} />,
    title: "What are my capital gains on this property",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    id: "feature-3",
    icon: <IoChevronDownCircleOutline size={25} />,
    title: "What kind of property is on your website",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
  {
    id: "feature-4",
    icon: <IoChevronDownCircleOutline size={25} />,
    title: "what are your security guarantee",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
  },
];
export const values = [
  {
    id: "value-1",
    icon: <HiShieldCheck size={25} />,
    title: "Best Interest rates on the market",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
    gif: <IoChevronDownCircleOutline size={25} />,
  },
  {
    id: "value-2",
    icon: <MdCancel size={25} />,
    title: "Prevent unstable Prices",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
    gif: <IoChevronUpCircleOutline size={25} />,
  },
  {
    id: "value-3",
    icon: <MdAnalytics size={25} />,
    title: "Best price on the market",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
    gif: <IoChevronDownCircleOutline size={25} />,
  },
  {
    id: "value-4",
    icon: <AiOutlineCheckSquare size={25} />,
    title: "Security of your data",
    content: "we are always ready to help by providing the best service for you. We believe a good place to live can make your life better.",
    gif: <IoChevronDownCircleOutline size={25} />,
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "We are very impressed with the REAL ESTATE values and paying method in particular, we did not want open inspection or sales by auction",
    name: "Joe Charles",
    title: "Lead Designer",
    img: feed1,
  },
  {
    id: "feedback-2",
    content: "We are very impressed with the REAL ESTATE values and paying method in particular, we did not want open inspection or sales by auction",
    name: "Bella Cruis",
    title: "Brand Designer",
    img: feed2,
  },

];

export const stats = [
  {
    id: "stats-1",
    img: manVec,
    title: "Our customer",
    value: <span><CountUp start={1} end={578} duration={4} /><span>+</span></span>,
  },
  {
    id: "stats-2",
    img: product,
    title: "Premium product",
    value: <span><CountUp start={1} end={1058} duration={4} /><span>+</span></span>,
  },
  {
    id: "stats-3",
    img: Award,
    title: "Award Winning",
    value: <span><CountUp start={1} end={400} duration={4} /><span>+</span></span>,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.bhomes.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.bhomes.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.bhomes.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.bhomes.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.bhomes.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.bhomes.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.bhomes.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.bhomes.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.bhomes.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.bhomes.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partners",
        link: "https://www.bhomes.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.bhomes.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [

  {
    id: "social-media-1",
    icon: <BsFacebook size={20} />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-2",
    icon: <BsInstagram size={20} />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-3",
    icon: <BsFillTelephoneFill size={20} />,
    link: "+2348168214500",
  },
  {
    id: "social-media-4",
    icon: <BsTwitter size={20} />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-5",
    icon: <BsLinkedin size={20} />,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: logo1,
  },
  {
    id: "client-2",
    logo: logo3,
  },
  {
    id: "client-3",
    logo: equinox,
  },
  {
    id: "client-4",
    logo: digital,
  },
];

export const residence = [
  {
    name: "Crooks garden City",
    price: "5,200,000",
    detail: "Atlantic Beach Estate, Victoria island, Lagos, Nigeria",
    img: blog1,
  },
  {
    name: "Gaticit homes",
    price: "3,400,000",
    detail: "Platinum & Taylor Hill LP, 4th Avenue, Banana Island, Lagos, Nigeria",
    img: blog2,
  },
  {
    name: "Gregor haven's City",
    price: "8,800,000",
    detail: "Desiderata Block A7, 1st Avenue, Banana Island, Lagos, Nigeria",
    img: blog3,
  },
  {
    name: "Kings Court and Luxury",
    price: "12,000,000",
    detail: "Kimberlys Apartment, Victoria Garden City, Lekki, Lagos Nigeria",
    img: image1,
  },
  {
    name: "Victoria Garden City",
    price: "20,000,000",
    detail: "Cadogan Place Estate, Chevron Drive, Lekki, Lagos, Nigeria",
    img: image2,
  },
  {
    name: "Luxurious Virgin court",
    price: "15,000,000",
    detail: "Kings Court Apartment Block A7, Ikoyi Crescent, Lagos, Nigeria",
    img: image6,
  }
];

export const blogData = [
  {
    date: "21 March 2023",
    detail: "Home sales about to surge? we may see a summer like never before, Dont miss the opportunity ",
    img: blog1,
  },
  {
    date: "18 April 2023",
    detail: "Increase in home price! This is the best time to get yourself a comfortable home. Dont miss out",
    img: blog2,
  },
  {
    date: "20 May 2023",
    detail: "Luxurious Home? A place like no other feel the comfort of loved ones in  luxury and decent home",
    img: blog3,
  },
];

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    }
  }
}

export const feedbackSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 2,
    }
  }
}

