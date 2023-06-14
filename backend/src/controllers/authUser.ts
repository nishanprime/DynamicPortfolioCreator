import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import User from "../models/userModel";
import path from "path";
import generateToken from "../utils/generateToken";
import { IUser } from "../interfaces";
import { sendError } from "../utils/sendError";
const authUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: IUser = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      about: user.about,
      contact: user.contact,
      created: user.createdAt,
      email: user.email,
      endDescription: user.endDescription,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      githubLink: user.githubLink,
      linkedinLink: user.linkedinLink,
      logo: user.logo,
      personalProjects: user.personalProjects,
      profilePicture: user.profilePicture,
      resume: user.resume,
      skills: user.skills,
      startDescription: user.startDescription,
      bigProjects: user.bigProjects,
      title: user.title,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});

// dummy registration of User
const registerUser = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const data = { email, password, username };
    const userExists =
      (await User.findOne({ email })) || (await User.findOne({ username }));
    if (userExists) {
      res.status(400);
      throw new Error("User with this Email or Username already exists");
    }
    const user = await User.create(data);
    if (user) {
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

//update user
const updateUser = expressAsyncHandler(async (req: Request, res: Response) => {
  //update user
  const user = await User.findById(req.user._id);
  console.log(user.contact);
  console.log(req.body.contact);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.title = req.body.title || user.title;
    user.startDescription = req.body.startDescription || user.startDescription;
    user.endDescription = req.body.endDescription || user.endDescription;
    user.githubLink = req.body.githubLink || user.githubLink;
    user.linkedinLink = req.body.linkedinLink || user.linkedinLink;
    user.personalProjects = req.body.personalProjects || user.personalProjects;
    user.about = req.body.about || user.about;
    user.skills = req.body.skills || user.skills;
    user.contact = req.body.contact || user.contact;
    user.resume = req.body.resume || user.resume;
    user.profilePicture = req.body.profilePicture;
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      about: updatedUser.about,
      contact: updatedUser.contact,
      created: updatedUser.createdAt,
      email: updatedUser.email,
      endDescription: updatedUser.endDescription,
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      gender: updatedUser.gender,
      githubLink: updatedUser.githubLink,
      linkedinLink: updatedUser.linkedinLink,
      logo: updatedUser.logo,
      personalProjects: updatedUser.personalProjects,
      profilePicture: updatedUser.profilePicture,
      resume: updatedUser.resume,
      skills: updatedUser.skills,
      startDescription: updatedUser.startDescription,
      bigProjects: updatedUser.bigProjects,
      title: updatedUser.title,
      token: generateToken(updatedUser._id),
    });
  }
});

const getInfoFromUsername = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (user) {
        res.json({
          _id: user._id,
          about: user.about,
          contact: user.contact,
          created: user.createdAt,
          email: user.email,
          endDescription: user.endDescription,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          githubLink: user.githubLink,
          linkedinLink: user.linkedinLink,
          logo: user.logo,
          personalProjects: user.personalProjects,
          profilePicture: user.profilePicture,
          resume: user.resume,
          skills: user.skills,
          startDescription: user.startDescription,
          bigProjects: user.bigProjects,
          title: user.title,
          token: generateToken(user._id),
        });
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

//setting up s3 endpoint to digitalocean space
const spacesEndpoint = new aws.Endpoint("nyc3.digitaloceanspaces.com");
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.SPACE_ACCESS_KEY_ID,
  secretAccessKey: process.env.SPACE_SECRET_KEY,
});
//upload helper
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "dynamicportfolio",

    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      req.params.type === "profile"
        ? cb(
            null,
            `${req.user.username}/profile/profilepic${path.extname(
              file.originalname
            )}`
          )
        : cb(
            null,
            `${req.user.username}/resume/resume${path.extname(
              file.originalname
            )}`
          );
    },
  }),
});

//download file info
export const getFileStream = (fileKey) => {
  const downloadParams = {
    Key: fileKey,
    Bucket: "dynamicportfolio",
  };
  return s3.getObject(downloadParams).createReadStream();
};

const getAllInfo = expressAsyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json( {
      _id: user._id,
      about: user.about,
      contact: user.contact,
      created: user.createdAt,
      email: user.email,
      endDescription: user.endDescription,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      githubLink: user.githubLink,
      linkedinLink: user.linkedinLink,
      logo: user.logo,
      personalProjects: user.personalProjects,
      profilePicture: user.profilePicture,
      resume: user.resume,
      skills: user.skills,
      startDescription: user.startDescription,
      bigProjects: user.bigProjects,
      title: user.title,
      token: generateToken(user._id),
    });
  } else {
    return sendError({
      res:res,
      status:400,
      message:"User not found"
    })
  }

});
export {
  authUser,
  registerUser,
  updateUser,
  getAllInfo,
  getInfoFromUsername,
  upload,
};
