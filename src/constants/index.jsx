import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Homes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
    forward: "gooogle.com",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love making dreams come true!",
  content:
    "At Homyz, we believe in making dreams come true no matter how big or small. Wether you need a home for you older one or a home for a large family, we have several luxry homes avaiable for you. We can help you with what ever needs you have. Any questions? Let us know!",
};

export const MISSION =
  "At Homyz, our mission is to provide the best customer experience to our clients";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Chris Hemsworth",
  profession: "Exclusive Billonare",
  content:
    "“I had a fantastic experience with Homyz. Their team is professional, knowledgeable, and dedicated to making the home buying process smooth. They took the time to understand my needs and provided clear, transparent advice throughout. Their customer service is exceptional—always available and incredibly helpful. Plus, their online tools made the process even easier. I highly recommend Homyz for anyone looking to buy or sell a home. Thanks to them, I found my dream home effortlessly!.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 1432 Great Ocean Drive, Australia" },
  { key: "phone", value: "Phone: 1432-386-2986" },
  { key: "email", value: "Email: hi@homyz.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
