insert data to mongodb
const insertData = async () => {
  try {
    await connectTODB();
    console.log(result);
    await IconModel.insertMany(result);
    console.log('Data inserted');
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
insertData();