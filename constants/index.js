import { MdBusinessCenter } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
export const menuList = [
  { label: "About Us", path: "/about", key: "About" },
  {
    label: "Stock Market Training",
    path: "/stock-market-training",
    key: "Stock Market Training",
  },
  // {
  //   label: "Investment Platform",
  //   path: "/investment-platform",
  //   key: "Investment Platform",
  // },
  // {
  //   label: "Knowledge Center",
  //   path: "/knowledge-center",
  //   key: "Knowledge Center",
  // },
  {
    label: "Life @ Goolluck",
    path: "/life-at-goolluck",
    key: "Life @ Goolluck",
  },
  { label: "Contact Us", path: "/contact", key: "Contact Us" },
];

export const about_list = [
  {
    label: "Comprehensive Financial Services",
    key: "Comprehensive Financial Services",
    icon: <MdBusinessCenter size={70} />,
    desc: "GOOLLUCK INVESTMENTS serves as your reliable and comprehensive financial service provider. We understand the importance of your financial goals and strive to offer tailored solutions. With years of industry experience, we are committed to assisting individuals and businesses in achieving financial success.",
  },

  {
    label: "Leading Financial Training Institute",
    key: "Leading Financial Training Institute",
    icon: <BiSolidSchool size={70} />,
    desc: "As a leading financial training institute, we are dedicated to empowering individuals and professionals. Our focus is on providing knowledge and skills essential for excelling in the dynamic world of finance. Through a commitment to excellence, innovation, and a passion for education, we have become a trusted resource for financial education and training.",
  },

  {
    label: "Commitment to Excellence and Innovation",
    key: "Commitment to Excellence and Innovation",
    icon: <BsFillPersonFill size={60} />,
    desc: "At GOOLLUCK INVESTMENTS, our commitment to excellence and innovation sets us apart. We are not just financial experts but also dedicated educators, ensuring you have the tools for success. Count on us as a trusted partner in your financial journey, where a passion for education drives our commitment to your financial well-being.",
  },
];

export const socials = [
  {
    label: "Instagram",
    icon: <BsInstagram size={20} />,
    path: "https://instagram.com/goolluck_investments?igshid=MTk0NTkyODZkYg==",
    key: "Instagram",
  },
  {
    label: "Facebook",
    icon: <FaFacebookF size={20} />,
    path: "https://www.facebook.com/goolluckinvestment/",
    key: "facebook",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    path: "http://www.linkedin.com/in/goolluck-investments-8a5a862a0",
    key: "LinkedIn",
  },
  {
    label: "Twitter",
    icon: <RiTwitterXFill size={20} />,
    path: "https://twitter.com/Goolluck_Invest",
    key: "Twitter",
  },
];

export const team = [
  {
    name: "Jaya Srivastava",
    designation: "Financial Advisor",
    description:
      "Seasoned professional with 10+ years of work experience in stock broking firm. MBA finance Stock market enthusiasts, expertise on managing and advising on wealth creation. Believes in nurturing the long term financial relationship",
    photo: "/assets/team/jaya.png",
    key: "jaya",
  },
  {
    name: "Bharti",
    designation: "Financial Advisor",
    description:
      "MBA in Finance, 9+ years of experience in Stock Market.  Transparency, integrity, and open communication define my client relationships, Let's work together to turn your financial aspirations into a reality.",
    photo: "/assets/team/bharti.png",
    key: "bharti",
  },
  {
    name: "Mansi",
    designation: "Financial Advisor",
    description:
      "Bcom (Hons.), MBA in finance, 5+ years of experience in the stock market, BSE certified in Financial Market course, I am committed to helping you achieve your unique financial goals and dreams, My mission is to simplify complex financial charts and make them work for you",
    photo: "/assets/team/mansi.png",
    key: "mansi",
  },
  {
    name: "Yash Madan",
    designation: "Financial Advisor",
    description:
      "Mathematics major with 4+ years experience in financial markets, Focused on designing investment strategies that minimises the risk of markets, Keeping the investments safe is the top priority, Let me help you create a portfolio that lets you retire early.",
    photo: "/assets/team/yash_madan.png",
    key: "yash",
  },
  {
    name: "Vidhi",
    designation: "Financial Advisor",
    description:
      "B.SC(H) Mathematics, 2+ Year Experience in Stock Market, My mission is to craft personalized financial strategies for your unique journey to prosperity. Beyond advice, we offer a roadmap to financial freedom and confidence",
    photo: "/assets/team/vidhi.png",
    key: "Vidhi",
  },
  {
    name: "Deepti Khatri",
    designation: "Financial Advisor",
    description:
      "Rooted in multi faceted experience, I prioritise investments to enrich lives and secure futures. The right relationship is everything-with finances & people.",
    photo: "/assets/team/deepti.png",
    key: "Deepti",
  },
  {
    name: "Deepti Attreja",
    designation: "Financial Advisor",
    description:
      "M.Com, MBA in finance, Diverse 8+ years of experience in financial sector, I stay at the forefront of industry trends, ensuring your financial plan adapts to the ever-changing market, Your financial well-being is my priority; let's work together to secure your future.",
    photo: "/assets/team/deepti_attreja.png",
    key: "Deepti_Attreja",
  },
  {
    name: "Ritu Rai",
    designation: "Financial Advisor",
    description:
      "Join a community of empowered individuals who are transforming their financial lives under my guidance. Every financial decision you make is a building block toward your dreams; let's build together, Contact me today for a consultation, and let's embark on a journey to financial prosperity.",
    photo: "/assets/team/ritu.png",
    key: "Deepti_Attreja",
  },
  {
    name: "Palak",
    designation: "Financial Advisor",
    description:
      "BBA and PGDM in finance, 2+ years of experience in Stock Market, Transparency is at the core of my client relationships, ensuring you are informed every step of the way. As your financial ally, I am committed to turning your financial goals into achievable milestones.",
    photo: "/assets/team/palak.png",
    key: "Deepti_Attreja",
  },
];

export const life_at_goolluck_training_iit = [
  { photo: "/assets/life_at_goolluck/iit/iit1.JPEG", key: 1 },
  { photo: "/assets/life_at_goolluck/iit/iit2.JPEG", key: 2 },
  { photo: "/assets/life_at_goolluck/iit/iit3.JPEG", key: 3 },
  { photo: "/assets/life_at_goolluck/iit/iit4.JPEG", key: 4 },
];

export const life_at_goolluck_training_mdi = [
  { photo: "/assets/life_at_goolluck/mdi/mdi1.jpg", key: 1 },
  { photo: "/assets/life_at_goolluck/mdi/mdi2.jpg", key: 2 },
  { photo: "/assets/life_at_goolluck/mdi/mdi3.jpg", key: 3 },
  { photo: "/assets/life_at_goolluck/mdi/mdi4.jpg", key: 4 },
  { photo: "/assets/life_at_goolluck/mdi/mdi5.jpg", key: 5 },
  { photo: "/assets/life_at_goolluck/mdi/mdi6.jpg", key: 6 },
  { photo: "/assets/life_at_goolluck/mdi/mdi7.JPG", key: 7 },
  { photo: "/assets/life_at_goolluck/mdi/mdi8.JPG", key: 8 },
  { photo: "/assets/life_at_goolluck/mdi/mdi9.JPG", key: 9 },
  { photo: "/assets/life_at_goolluck/mdi/mdi10.JPG", key: 10 },
  { photo: "/assets/life_at_goolluck/mdi/mdi11.JPG", key: 11 },
  { photo: "/assets/life_at_goolluck/mdi/mdi12.JPG", key: 12 },
];

export const life_at_goolluck_training_hansraj = [
  { photo: "/assets/life_at_goolluck/hansraj/hansraj1.JPEG", key: 1 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj2.JPEG", key: 2 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj3.JPEG", key: 3 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj4.JPEG", key: 4 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj5.JPEG", key: 5 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj6.JPEG", key: 6 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj7.JPEG", key: 7 },
  { photo: "/assets/life_at_goolluck/hansraj/hansraj8.JPEG", key: 8 },
];

export const life_at_goolluck_training_imt = [
  { photo: "/assets/life_at_goolluck/imt/imt1.jpg", key: 1 },
  { photo: "/assets/life_at_goolluck/imt/imt2.jpg", key: 2 },
  { photo: "/assets/life_at_goolluck/imt/imt3.jpg", key: 3 },
  { photo: "/assets/life_at_goolluck/imt/imt4.jpg", key: 4 },
];

export const life_at_goolluck_training_offline = [
  { photo: "/assets/life_at_goolluck/offline_training/offline1.JPEG", key: 1 },
  // { photo: "/assets/life_at_goolluck/offline_training/offline2.JPEG" },
  { photo: "/assets/life_at_goolluck/offline_training/offline3.JPEG", key: 2 },
  { photo: "/assets/life_at_goolluck/offline_training/offline4.JPEG", key: 3 },
  { photo: "/assets/life_at_goolluck/offline_training/offline5.JPEG", key: 4 },
  { photo: "/assets/life_at_goolluck/offline_training/offline6.JPEG", key: 5 },
  { photo: "/assets/life_at_goolluck/offline_training/offline7.JPG", key: 6 },
  { photo: "/assets/life_at_goolluck/offline_training/offline8.JPG", key: 7 },
];

export const life_at_goolluck = [
  { photo: "/assets/life_at_goolluck/recreational_activities/rohit.jpeg", key: 45 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m1.jpeg", key: 2 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m2.jpeg", key: 3 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m3.jpeg", key: 4 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m4.jpeg", key: 5 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m5.jpeg", key: 6 },
  { photo: "/assets/life_at_goolluck/recreational_activities/m6.jpeg", key: 7 },
  { photo: "/assets/life_at_goolluck/recreational_activities/1.jpeg", key: 8 },
  { photo: "/assets/life_at_goolluck/recreational_activities/2.jpeg", key: 9 },
  { photo: "/assets/life_at_goolluck/recreational_activities/3.jpeg", key: 10 },
  { photo: "/assets/life_at_goolluck/recreational_activities/4.jpeg", key: 11 },
  { photo: "/assets/life_at_goolluck/recreational_activities/5.jpeg", key: 12 },
  { photo: "/assets/life_at_goolluck/recreational_activities/6.jpg", key: 13 },
  { photo: "/assets/life_at_goolluck/recreational_activities/7.jpg", key: 14 },
  { photo: "/assets/life_at_goolluck/recreational_activities/8.jpeg", key: 15 },
  { photo: "/assets/life_at_goolluck/recreational_activities/9.jpeg", key: 16 },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/10.jpeg",
    key: 17,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/11.jpeg",
    key: 18,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/12.jpeg",
    key: 19,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/13.jpeg",
    key: 20,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/14.jpeg",
    key: 21,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/15.jpeg",
    key: 22,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/16.jpeg",
    key: 23,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/17.jpeg",
    key: 24,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/18.jpeg",
    key: 25,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/19.jpeg",
    key: 26,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/20.jpeg",
    key: 27,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/21.jpeg",
    key: 28,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/22.jpeg",
    key: 29,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/23.jpeg",
    key: 30,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/24.jpeg",
    key: 31,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/25.jpeg",
    key: 32,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/26.jpeg",
    key: 33,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/27.jpeg",
    key: 34,
  },
  {
    photo: "/assets/life_at_goolluck/recreational_activities/28.jpeg",
    key: 35,
  },
];
