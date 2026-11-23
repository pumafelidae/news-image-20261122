// The World Herald — Sunday 22 November 2026.
// The front page is built from index.html and stored in this repo as
// entry.png. This entrypoint only validates that file (real PNG,
// 1024x1024, at most 1 MiB) and copies it byte-for-byte to the output
// directory. It never generates, edits or re-encodes the image.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const pngPath = join(repoDir, "entry.png");
const outputDir = "/output";
const outputPath = join(outputDir, "entry.png");

if (!existsSync(pngPath)) {
  throw new Error("entry.png is missing from the repository");
}
const data = readFileSync(pngPath);

// A PNG file always starts with these eight signature bytes.
const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
for (let i = 0; i < signature.length; i++) {
  if (data[i] !== signature[i]) {
    throw new Error("entry.png is not a PNG file");
  }
}

// In the IHDR chunk, width sits at byte 16 and height at byte 20,
// both big-endian 32-bit integers.
const imageWidth = data.readUInt32BE(16);
const imageHeight = data.readUInt32BE(20);
if (imageWidth !== 1024 || imageHeight !== 1024) {
  throw new Error(
    `entry.png must be 1024x1024, got ${imageWidth}x${imageHeight}`,
  );
}
if (data.length > 1024 * 1024) {
  throw new Error(`entry.png must be at most 1 MiB, got ${data.length} bytes`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, data);
console.log(
  `copied entry.png (${data.length} bytes, 1024x1024) to ${outputPath}`,
);
