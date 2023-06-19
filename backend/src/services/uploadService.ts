import { BlobServiceClient } from "@azure/storage-blob";
import fs from "fs";

const connectionString = process.env.AZURE_BLOB_CONNECTION_STRING;
const containerName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const uploadFileToBlobStorage = async (file) => {
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Generate a unique filename or use the original filename
  const fileName = `${Date.now()}-${file.originalname}`;

  // Create a block blob client
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
// making user that the content disposition is inline so the file is not automatically downloaded
    // Set the Content-Disposition header
    const options = {
        blobHTTPHeaders: {
          blobContentType: file.mimetype,
          blobContentDisposition: "inline",
        },
      };
  // Upload the file to Azure Blob Storage
  await blockBlobClient.uploadStream(fs.createReadStream(file.path), file.size, 20, options);
  
  
  // Clean up the temporary file
  fs.unlinkSync(file.path);

  // Return the uploaded file URL
  return blockBlobClient.url;
};

export { uploadFileToBlobStorage };
