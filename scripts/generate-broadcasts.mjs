import fs from "node:fs";
import path from "node:path";

const inputFile = "guests.csv";
const baseUrl = "https://rohimarried.vercel.app/";
const inputPath = path.resolve(inputFile);
const outputPathCsv = path.resolve("invitation-links.csv");
const outputPathTxt = path.resolve("broadcast-messages.txt");

if (!fs.existsSync(inputPath)) {
  console.error(`Error: File tidak ditemukan di ${inputPath}`);
  process.exit(1);
}

const parseCsvLine = (line) => {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current.trim());
  return values;
};

const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
const cleanName = (name) => String(name ?? "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim();

const lines = fs.readFileSync(inputPath, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
const rows = lines.map(parseCsvLine);
const headers = rows.shift()?.map((header) => header.toLowerCase().trim()) ?? [];
const nameIndex = headers.findIndex((header) => ["nama", "name", "tamu", "guest", "kepada"].includes(header));
const targetNameIndex = nameIndex >= 0 ? nameIndex : 0;

const csvOutput = [["nama", "link", "pesan"]];
const txtOutput = [];

for (const row of rows) {
  const name = cleanName(row[targetNameIndex]);
  if (!name) continue;

  const url = new URL(baseUrl);
  url.searchParams.set("to", name);
  const link = url.toString();

  // Template Pesan WhatsApp
  const message = `💌 *UNDANGAN PERNIKAHAN* 💌
━━━━━━━━━━━━━━━━━

*Assalamualaikum Warahmatullahi Wabarakatuh*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${name}* untuk menghadiri acara pernikahan kami:

🤵 *Nurohim, S.Pd*
👰 *Ayu Andika Vemidian*

*Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi:

🔗 ${link}

📅 *Rabu, 10 Juni 2026*
📍 *Sukowidi, Kel. Sidomakmur, Kec. Widodaren, Ngawi*

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

*Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.*

Dan agar selalu menjaga kesehatan bersama serta datang pada waktu yang telah ditentukan.

Terima kasih banyak atas perhatiannya.

*Wassalamualaikum Warahmatullahi Wabarakatuh*

💍 *Nurohim & Ayu*
#SavannahMarried`;

  csvOutput.push([name, link, message]);

  txtOutput.push(`======================================================================
UNTUK: ${name}
======================================================================
${message}
`);
}

// Tulis ke CSV
fs.writeFileSync(outputPathCsv, csvOutput.map((row) => row.map(escapeCsv).join(",")).join("\n"));
// Tulis ke TXT
fs.writeFileSync(outputPathTxt, txtOutput.join("\n\n"));

console.log(`Selesai!`);
console.log(`- ${csvOutput.length - 1} link dan pesan disimpan di: ${outputPathCsv}`);
console.log(`- Format teks copy-paste disimpan di: ${outputPathTxt}`);
