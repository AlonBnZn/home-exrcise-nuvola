import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./config/database";
import { seedDatabase } from "./config/seed";

const port = process.env.PORT || 3000;
AppDataSource.initialize()
  .then(async () => {
    console.log("✅ Connected to PostgreSQL");
    await seedDatabase();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error connecting to PostgreSQL:", err);
  });
