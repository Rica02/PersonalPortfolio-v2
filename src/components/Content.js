import { GiBrain, GiPaintBrush, GiBookPile } from "react-icons/gi";

import logoJS from "../assets/logos/logo-javascript.png";
import logoTS from "../assets/logos/logo-typescript.png";
import logoHtml from "../assets/logos/logo-html.png";
import logoCss from "../assets/logos/logo-css.png";
import logoJava from "../assets/logos/logo-java.jpg";
import logoCSharp from "../assets/logos/logo-c-sharp.png";
import logoObjC from "../assets/logos/logo-obj-c.png";
import logoCPlusPlus from "../assets/logos/logo-c-plus-plus.png";

import logoReact from "../assets/logos/logo-react.jpg";
import logoReactNat from "../assets/logos/logo-react-native.png";
import logoNode from "../assets/logos/logo-node.png";
import logoBS from "../assets/logos/logo-bootstrap.png";
import logoFirebase from "../assets/logos/logo-firebase.png";
import logoMySql from "../assets/logos/logo-mysql.png";
import logoStyledComp from "../assets/logos/logo-styled-components.png";

import logoAndroid from "../assets/logos/logo-android.png";
import logoIOS from "../assets/logos/logo-ios.png";

import logoVscode from "../assets/logos/logo-vscode.png";
import logoVS from "../assets/logos/logo-visual-studio.png";
import logoAS from "../assets/logos/logo-android-studio.png";
import logoXcode from "../assets/logos/logo-xcode.png";

import logoPS from "../assets/logos/logo-photoshop.png";
import logoAI from "../assets/logos/logo-illustrator.png";
import logoXD from "../assets/logos/logo-xd.png";
import logoFigma from "../assets/logos/logo-figma.png";
import logoInkscape from "../assets/logos/logo-inkscape.png";
import logoProcreate from "../assets/logos/logo-procreate.png";

import scusamiThumb from "../assets/projects/scusami-thumb.png";
import scusamiVideo from "../assets/projects/scusami-video.mov";
import portoflioVideo from "../assets/projects/portfolio-video.mov";
import portfolioThumb from "../assets/projects/portfolio-thumb.png";
import techConnectThumb from "../assets/projects/techconnect-thumb.png";
import techConnectVideo from "../assets/projects/techconnect-video.mp4";
import myStoryVideo from "../assets/projects/mystory-video.mov";
import myStoryThumb from "../assets/projects/mystory-thumb.png";
import articThumb from "../assets/projects/artic-thumb.png";
import articVideo from "../assets/projects/artic-video.mp4";
import bookwormVideo from "../assets/projects/bookwormden-video.mov";
import bookwormThumb from "../assets/projects/bookwormden-thumb.png";

// ABOUT ME
export const AboutMeContent = {
  Name: "My name is Rica Mae Averion, call me Rica! It's nice to meet you.",
  Intro:
    "I’m a Junior Web and Mobile App Developer, specialising in front-end design and development.\nI have worked with a variety of tools and languages in a number of projects, particularly working with HTML, CSS, JavaScript/TypeScript in React and React Native frameworks. Team worker, problem solver and well-organised, with an attention to detail.\n\nI have studied Bachelor of IT at Academy of Information Technology (AIT) in Melbourne, Australia.\n\nI'm currently open to work and available on a full-time capacity.",

  CardContent: [
    {
      icon: <GiBrain />,
      title: "A LOVE FOR LEARNING",
      desc: "I’ve always enjoyed learning about new things, be it science, art, nature or technology. This curiosity and desire to learn keeps my mind engaged and it has helped me succeed academically.",
    },
    {
      icon: <GiPaintBrush />,
      title: "CREATIVE HOBBIES",
      desc: "In my free time, I like keeping myself busy with casual creative hobbies, including drawing digital art, creating vector art and making paper crafts.",
    },
    {
      icon: <GiBookPile />,
      title: "OBSESSIVELY ORGANISED",
      desc: "I like to spend time re-organising things until they click with me. Although it helps me be more productive and efficient, it sometimes makes me a little obsessed with getting the small details right.",
    },
  ],
};

// SKILLS
export const SkillsContent = {
  SkillDesc:
    "I've worked on various web and mobile app projects both on the front-end and back-end sides. My strength is in front-end design and development. Main tools I've worked with include JavaScript/TypeScript, Java, Objective C, React, React Native, Node.js, Firebase and MySQL.",
  Section: [
    {
      header: "LANGUAGES",
      tools: [
        {
          img: logoJS,
          desc: "JavaScript",
        },
        {
          img: logoTS,
          desc: "TypeScript",
        },
        {
          img: logoJava,
          desc: "Java",
        },
        {
          img: logoObjC,
          desc: "Objective C",
        },
        {
          img: logoCSharp,
          desc: "C#",
        },
        {
          img: logoCPlusPlus,
          desc: "C++",
        },
      ],
    },
    {
      header: "FRAMEWORKS & LIBRARIES",
      tools: [
        {
          img: logoReact,
          desc: "React JS",
        },
        {
          img: logoReactNat,
          desc: "React Native",
        },
        {
          img: logoNode,
          desc: "Node JS",
        },
        {
          img: logoBS,
          desc: "Bootstrap",
        },
      ],
    },
    {
      header: "IDEs",
      tools: [
        {
          img: logoVscode,
          desc: "VS Code",
        },
        {
          img: logoVS,
          desc: "Visual Studio",
        },
        {
          img: logoAS,
          desc: "Android Studio",
        },
        {
          img: logoXcode,
          desc: "Xcode",
        },
      ],
    },
    {
      header: "DATABASE",
      tools: [
        {
          img: logoFirebase,
          desc: "FireBase",
        },
        {
          img: logoMySql,
          desc: "MySQL",
        },
      ],
    },
    {
      header: "DESIGN",
      tools: [
        {
          img: logoFigma,
          desc: "Figma",
        },
        {
          img: logoXD,
          desc: "Adobe XD",
        },
        {
          img: logoPS,
          desc: "Photoshop",
        },
        {
          img: logoAI,
          desc: "Illustrator",
        },
        {
          img: logoInkscape,
          desc: "Inkscape",
        },
        {
          img: logoProcreate,
          desc: "Procreate",
        },
      ],
    },
  ],
};

// PROJECTS
export const ProjectContent = {
  MyProjectList: [
    {
      title: "Scusa Mi! App",
      desc: "Mobile application prototype for a local popular Italian restaurant. Designed and developed by me from scratch with React Native (Expo) using TypeScript.",
      tools: [logoVscode, logoTS, logoReactNat],
      videoUrl: scusamiVideo,
      sourceUrl: "https://github.com/Rica02/ScusaMi-App",
      imgThumb: scusamiThumb,
      mobileVideo: true,
      gallery: ["test", "test"],
    },
    {
      title: "Personal Portfolio",
      desc: "Website developed as a portfolio to showcase my skills and work. I built it from scratch and used the fullPage.js component for the scrolling style navigation. Project still in development.",
      tools: [
        logoVscode,
        logoJS,
        logoHtml,
        logoCss,
        logoReact,
        logoNode,
        logoStyledComp,
      ],
      videoUrl: portoflioVideo,
      sourceUrl: "",
      imgThumb: portfolioThumb,
      mobileVideo: false,
      gallery: ["test"],
    },
    {
      title: "TechConnect Web",
      desc: "Web app project developed in a small team. TechConnect is a business idea that provides face-to-face and online tutoring services to users wanting learn how to use tech devices.\n\nI worked on this project as a front-end designer and developer, and on the Zoom API integration.",
      tools: [
        logoVscode,
        logoJS,
        logoHtml,
        logoCss,
        logoReact,
        logoNode,
        logoStyledComp,
        logoMySql,
      ],
      videoUrl: techConnectVideo,
      sourceUrl: "https://github.com/Rica02/TechConnect",
      imgThumb: techConnectThumb,
      mobileVideo: false,
      gallery: [],
    },
    {
      title: "MyStory App",
      desc: "Android app developed with Android Studio. MyStory is a journal keeping app where users can write daily entries and keep track of their locations. It uses Firebase as database and authentication, supporting Google and Facebook sign in.",
      tools: [logoAndroid, logoAS, logoJava, logoFirebase],
      videoUrl: myStoryVideo,
      sourceUrl: "https://github.com/Rica02/MyStoryApp",
      imgThumb: myStoryThumb,
      mobileVideo: true,
      gallery: [],
    },
    {
      title: "Artic App",
      desc: "iOS app developed with Xcode. Artic is a platform for artists where you can upload media to share with other users. Users can leave likes and comments on posts, and follow their favourite artists.",
      tools: [logoIOS, logoXcode, logoObjC, logoFirebase],
      videoUrl: articVideo,
      sourceUrl: "https://github.com/Rica02/ArticApp",
      imgThumb: articThumb,
      mobileVideo: true,
      gallery: [],
    },
    {
      title: "Bookworm Den Web",
      desc: "Web app project developed with a team mate. Bookworm Den is a simple online library where users can browse books, view book information and leave reviews.",
      tools: [
        logoVscode,
        logoJS,
        logoHtml,
        logoCss,
        logoReact,
        logoNode,
        logoBS,
      ],
      videoUrl: bookwormVideo,
      sourceUrl: "https://github.com/Rica02/BookwormDen",
      imgThumb: bookwormThumb,
      mobileVideo: true,
      gallery: [],
    },
  ],
  OtherProjectList: [
    {
      title: "Play Today.",
      desc: "Mobile application prototype for a local popular Italian restaurant. Designed and developed by me from scratch with React Native (Expo) using TypeScript.",
      tools: [logoVscode, logoTS, logoReactNat],
      videoUrl: scusamiVideo,
      sourceUrl: "https://github.com/Rica02/ScusaMi-App",
      imgThumb: scusamiThumb,
      mobileVideo: true,
      gallery: [],
    },
  ],
};
