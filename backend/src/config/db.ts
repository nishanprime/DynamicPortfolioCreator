import mongoose, {
  ConnectOptions,
  Mongoose,
} from 'mongoose';

class Database{
  private readonly dbUrl: string;
  private readonly options: ConnectOptions;

  constructor (dbUrl: string, options: ConnectOptions) {
    this.dbUrl = dbUrl;
    this.options = options;
  }

  public async connectDB(): Promise<void> {
    console.log(this.dbUrl);
    // try connecting to the database
    try {
      const conn: Mongoose = await mongoose.connect(this.dbUrl, this.options);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }
}

export default Database;