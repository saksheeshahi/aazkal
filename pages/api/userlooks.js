import fs from "fs";
import path from "path";
import formidable from "formidable";
import cloudinary from "cloudinary";

// 🚀 Disable default Next.js body parser (required for file uploads)
export const config = {
  api: {
    bodyParser: false,
  },
};

// 🌤️ Cloudinary setup using environment variables from .env.local
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  try {
    // ✅ Parse multipart form (fields + files)
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const uploadFile = files.Image?.[0] || files.image?.[0];
    let imageUrl = "";

    // ✅ Upload image to Cloudinary (if present)
    if (uploadFile) {
      const uploadResult = await cloudinary.v2.uploader.upload(uploadFile.filepath, {
        folder: "aazkal/userlooks",
        resource_type: "image",
      });
      imageUrl = uploadResult.secure_url;
    }

    // ✅ Construct user look object
    const newLook = {
      id: Date.now().toString(),
      celebritySlug: fields.CelebritySlug?.[0] || "",
      name: fields.Name?.[0] || "Anonymous",
      email: fields.Email?.[0] || "",
      phone: fields.Phone?.[0] || "",
      story: fields.Story?.[0] || "",
      affiliateLink: fields.AffiliateLink?.[0] || "",
      whatsapp: fields.WhatsApp?.[0] || "",
      consentGiven: fields.ConsentGiven?.[0] === "true",
      isOriginalLook: fields.IsOriginalLook?.[0] === "true",
      imageUrl,
      createdAt: new Date().toISOString(),
    };

    // ✅ File path to JSON
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "userLooks.json");

    // ✅ Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    // ✅ Read existing JSON safely
    let existing = [];
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, "utf8");
        existing = content.trim() ? JSON.parse(content) : [];
      } catch (error) {
        console.error("⚠️ Error parsing userLooks.json, resetting file:", error);
        existing = [];
      }
    }

    // ✅ Append new entry
    existing.push(newLook);

    // ✅ Write updated data safely
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf8");

    console.log("✅ New look submitted:", newLook.name);

    return res.status(200).json({
      message: "Look submitted successfully!",
      data: newLook,
    });
  } catch (err) {
    console.error("❌ Upload error:", err);
    return res.status(500).json({ error: "Failed to process submission." });
  }
}
