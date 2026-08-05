import sharp from "sharp";
import path from "node:path";

const SRC = "src/assets/images/about";
const OUT = "src/assets/images/about/optimized";

const jobs = [
  // feature photos — "attention" strategy picked the signage text over
  // the people in both of these (busy graphics beat faces on saliency),
  // so these use a manual extract region (in rotated source-pixel
  // coordinates) aimed at where the people actually are, then resize to
  // match the rendered box ratio (measured via Playwright: side-note
  // 499x300, how-we-work container 1280x381).
  {
    in: "befunky_2026-6-5_1-22-47.jpg",
    out: "feature-mining-show.jpg",
    extract: { left: 0, top: 580, width: 874, height: 525 },
    resizeWidth: 1000,
    quality: 80,
  },
  {
    in: "IMG-20251118-WA0025.jpg",
    out: "feature-tomarok-team.jpg",
    extract: { left: 0, top: 576, width: 1200, height: 357 },
    resizeWidth: 1400,
    quality: 78,
  },

  // timeline strip photos — pre-cropped to the 3:4 card ratio using
  // sharp's "attention" strategy (saliency-based) so the people in each
  // shot stay in frame instead of a blind center-crop cutting them off.
  { in: "20180417_115613.jpg", out: "timeline-2018.jpg", w: 800, h: 620, quality: 78, smartCrop: true },
  { in: "IMG-20211208-WA0001.jpg", out: "timeline-2021.jpg", w: 800, h: 620, quality: 78, smartCrop: true },
  { in: "20240428_141128.jpg", out: "timeline-2024.jpg", w: 800, h: 620, quality: 78, smartCrop: true },
  { in: "IMG-20240925-WA0021.jpg", out: "timeline-2024b.jpg", w: 800, h: 620, quality: 78, smartCrop: true },
  { in: "20250529_114541(0).jpg", out: "timeline-2025.jpg", w: 800, h: 620, quality: 78, smartCrop: true },
  { in: "IMG-20260410-WA0012.jpg", out: "timeline-2026.jpg", w: 800, h: 620, quality: 78, smartCrop: true, flop: true },
];

for (const job of jobs) {
  const inPath = path.join(SRC, job.in);
  const outPath = path.join(OUT, job.out);

  let pipeline = sharp(inPath).rotate();
  if (job.flop) pipeline = pipeline.flop();

  if (job.smartCrop) {
    pipeline = pipeline.resize(job.w, job.h, {
      fit: "cover",
      position: sharp.strategy.attention,
    });
  } else if (job.extract) {
    pipeline = pipeline.extract(job.extract).resize({ width: job.resizeWidth });
  } else {
    pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });
  }

  await pipeline.jpeg({ quality: job.quality, mozjpeg: true }).toFile(outPath);

  console.log(`${job.out} done`);
}

console.log("All done.");
