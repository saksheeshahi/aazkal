// ✅ scripts/sync-data.js (CommonJS compatible)

const fs = require("fs");
const path = require("path");

const source = path.join(process.cwd(), "data", "celebrityPosts.json");
const destinationDir = path.join(process.cwd(), "public", "data");
const destination = path.join(destinationDir, "celebrityPosts.json");

try {
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  fs.copyFileSync(source, destination);
  console.log("✅ Synced celebrityPosts.json → /public/data/");
} catch (err) {
  console.error("❌ Error syncing celebrityPosts.json:", err);
  process.exit(1);
}
