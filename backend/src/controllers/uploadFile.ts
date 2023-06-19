import { uploadFileToBlobStorage } from "../services/uploadService";

const uploadFile = async (req, res) => {
    try {
        const file = req.file;
        const fileUrl = await uploadFileToBlobStorage(file);
    
        // Optionally, you can do something with the file URL (e.g., save it to a database)
    
        res.status(200).json({
            message:'File uploaded successfully!',
            // save this file url to associated user and you are all good
            fileUrl
        });
      } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while uploading the file.');
      }
};
export default uploadFile;
