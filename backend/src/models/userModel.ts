import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces';




const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
    default: 'First Name',
  },
  lastName: {
    type: String,
    required: true,
    default: 'Last Name',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
    default: 'male',
  },
  profilePicture: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/53/53133.png',
  },

  about: {
    type: String,
    default:
      'Welcome to my portfolio Welcome to my portfolio Welcome to my portfolio Welcome to my portfolio Welcome to my portfolio Welcome to my portfolio Welcome to my portfolio',
  },
  logo: {
    type: String,
    default: 'https://i.imgur.com/8Q3ZQ2u.png',
  },
  startDescription: {
    type: String,
    default: 'Welcome to my portfolio',
  },
  endDescription: {
    type: String,
    default: 'Thank you for visiting my portfolio',
  },
  title: {
    type: String,
    default: 'Full Stack Developer',
  },
  githubLink: {
    type: String,
    default: 'https://github.com/nishanprime',
  },

  linkedinLink: {
    type: String,
    default: 'https://www.linkedin.com/in/nishan-thapa0x01/',
  },
  resume: {
    type: String,
    default:
      'https://nishanprime.github.io/my_portfolio/assets/nishan-thapa-resume.pdf',
  },
  bigProjects: {
    type: Schema.Types.ObjectId,
    ref: 'BigProjects',
  },
  skills: {
    type: [
      {
        name: String,
        imgLink: String,
      },
    ],
    default: [
      {
        name: 'adonisjs',
        imgLink:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',
      },
    ],
  },
  personalProjects: {
    type: [
      {
        'projectTitle': String,
        'projectLink': String,
        'projectDescription': String,
      },
    ],
    default: [
      {
        'projectTitle': 'MindSetts',
        'projectLink': 'https://github.com',
        'projectDescription': 'Mind Setts',
      },
      {
        'projectTitle': 'MindSetts',
        'projectLink': 'https://github.com',
        'projectDescription': 'Mind Setts',
      },
    ],
  },

  contact: {
    description: {
      type: String,
      default: 'Feel free to contact me',
    },
    note: {
      type: String,
      default: 'I will get back to you as soon as possible',
    },
    getformioLink: {
      type: String,
      default: 'https://getform.io/f/8b0b0b0a-1b1a-4b1a-8b0b-0b0a1b1a4b1a',
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
   let isValid=await bcrypt.compare(enteredPassword, this.password);
   return isValid
};
const user = mongoose.model<IUser>('User', userSchema);
export default user;
