import { Bot } from "../models/bot.js";
import { User } from "../models/user.js";

export const chatBot=async (req,res)=>{
    try{
        const {text}=req.body;
        if(!text.trim()){
            return res.status(400).json({message:"Please enter a valid message"})
        }
        const user=await User.create({sender:"user",text})
        //Data to train bot

        const botResponses = {
  // ----- Daily Conversation -----
  "hi": "Hello! How are you today?",
  "good morning": "Good morning! Have a productive day ahead!",
  "good night": "Good night! Sweet dreams 🌙",
  "what's up": "Not much, just here to help you!",
  "how old are you": "I don’t have an age, I’m timeless 😉",

  // ----- Study / Tech -----
  "what is html": "HTML (HyperText Markup Language) is the standard language to create webpages. It defines structure using tags like <h1>, <p>, <a>.",
  "what is css": "CSS (Cascading Style Sheets) is used to style HTML elements — colors, layout, fonts, responsiveness.",
  "what is javascript": "JavaScript is the programming language of the web. It makes web pages interactive (buttons, forms, animations).",
  "what is nodejs": "Node.js is a runtime environment that lets you run JavaScript outside the browser. Useful for backend development.",
  "what is react": "React is a JavaScript library for building user interfaces. It uses components and a virtual DOM for fast rendering.",
  "what is mongodb": "MongoDB is a NoSQL database that stores data in JSON-like documents.",
  "what is sql": "SQL (Structured Query Language) is used to manage and query relational databases like MySQL, PostgreSQL.",
  "difference between sql and nosql": "SQL → structured, tables, relations. NoSQL → flexible schema, JSON docs, scalable for big data.",

  // ----- Interview Prep -----
  "tell me strength": "My strengths are quick learning, problem-solving, and being adaptable.",
  "tell me weakness": "I sometimes overthink small details, but I’m working on improving it.",
  "what is teamwork": "Teamwork is collaborating with others to achieve a common goal efficiently.",
  "what is oop": "Object-Oriented Programming is a paradigm based on objects and classes. Key principles: Encapsulation, Inheritance, Polymorphism, Abstraction.",
  "explain polymorphism": "Polymorphism means same function name can have different forms. Example: function overloading and overriding in Java.",
  "what is abstraction": "Abstraction hides implementation details and shows only essential features to the user.",

  // ----- GK / Current Affairs -----
  "who is president of india": "Droupadi Murmu is the current President of India since 2022.",
  "who is ms dhoni": "MS Dhoni is a legendary Indian cricketer, former captain, and winner of 2007 T20 & 2011 ODI World Cups.",
  "who is elon musk": "Elon Musk is the CEO of Tesla, SpaceX, and owner of X (Twitter). Known for innovation in electric cars and space exploration.",
  "what is olympics": "The Olympics is an international sports event held every 4 years, featuring summer and winter games.",
  "what is ai": "AI (Artificial Intelligence) is the simulation of human intelligence by machines — learning, reasoning, problem-solving.",
  "what is machine learning": "Machine Learning is a subset of AI where systems learn patterns from data instead of being explicitly programmed.",

  // ----- Fun -----
  "sing a song": "🎵 Sorry, I can’t sing, but I can share lyrics if you want!",
  "dance for me": "I wish I could dance! Imagine me doing a robot dance 🤖",
  "who is your best friend": "You are my best friend 💙",
  "can you hack": "Nope 😅, I follow rules. But I can teach you about cybersecurity basics.",
  "who is your crush": "I like people who ask me good questions 😉",

  // ----- Life Advice -----
  "how to study effectively": "1) Use Pomodoro (25 min study, 5 min break), 2) Revise daily, 3) Solve practice questions, 4) Avoid distractions.",
  "how to stay motivated": "Set small goals, reward yourself, and remind yourself why you started.",
  "how to get a job": "Build skills (DSA, Web Dev), create projects, update your resume, apply on LinkedIn/Naukri, and practice interviews."
};

        const normalizedText=text.trim().toLowerCase();
        const botReply=botResponses[normalizedText] || "I’m sorry, I don’t understand that. Can you rephrase?";
        const bot=await Bot.create({text:botReply})
        return res.status(200).json({userMessage:user.text,botMessage:bot.text});
    }
    catch(err){
        
        return res.status(500).json({error:"Internal Server Error"});
    }  
}