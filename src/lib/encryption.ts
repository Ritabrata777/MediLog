import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 16;
const SALT_LENGTH = 64;

// Use pbkdf2 to derive a 32 byte key from the master secret.
function getKey(password: string, salt: Buffer): Buffer {
  return crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");
}

export function encryptData(text: string, secretKey: string): { encryptedData: string } {
  // Generate a random salt and IV
  const salt = crypto.randomBytes(SALT_LENGTH);
  const iv = crypto.randomBytes(IV_LENGTH);
  
  const key = getKey(secretKey, salt);
  
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  
  const authTag = cipher.getAuthTag();
  
  // Pack everything into a single payload string: salt:iv:authTag:encryptedText
  const payload = `${salt.toString("hex")}:${iv.toString("hex")}:${authTag.toString("hex")}:${encrypted}`;
  
  return { encryptedData: payload };
}

export function decryptData(encryptedPayload: string, secretKey: string): string {
  const parts = encryptedPayload.split(":");
  if (parts.length !== 4) {
    throw new Error("Invalid encrypted payload format");
  }
  
  const salt = Buffer.from(parts[0], "hex");
  const iv = Buffer.from(parts[1], "hex");
  const authTag = Buffer.from(parts[2], "hex");
  const encryptedText = parts[3];
  
  const key = getKey(secretKey, salt);
  
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  
  return decrypted;
}
