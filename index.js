const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
// const file = require("./speech.txt");
// console.log(file.toString());

// Python script ka path
const pythonScript = path.join(__dirname, "py", "tts_synthesizer.py");

// Function to run the Python script
function synthesizeText(text, outputPath) {
  const command = `python ${pythonScript} "${text}" "${outputPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Success: ${stdout}`);
  });
}

// Example usage
// const textToString = file.toString();
const text =
  "Aur agar aap chahein toh likhe hue text ko select karke 'enrich content' ka option use kar sakte hain, jo aapke text ko aur expand karke ek solid block mein badal dega. Lekin likhne se pehle, main yeh recommend karta hoon ki aap upar diye gaye templates explore karein, jo online description aur research ke liye kaam aate hain. Ab likhne se pehle hum topic ke baare mein research karenge. Matlab yeh samjhenge ki customers kya chahte hain aur log kis cheez mein interested hain. 'Research' tab mein kai options hain, lekin mujhe Amazon search term analysis best lagta hai. Yahan, aap marketplace select kar sakte ho (jaise .com ya .uk). Main yahan 'decluttering' term dalunga aur number of books 5 kar dunga. Fir 'Search' pe click karte hain. Yeh data generate karne mein thoda time leta hai, lekin video mein time save karne ke liye, main aapko woh result dikhata hoon jo maine kal generate kiya tha. Ab jo result aata hai, usme competitor books ke details hoti hain, jaise product overview aur reviews ka summary. Yeh reviews ko padhta hai aur batata hai ki logon ko kitab mein kya pasand aaya aur kya nahi. Saath hi yeh strengths, weaknesses, aur competitive edge bhi dikhata hai, jo kaafi helpful hota hai. Competitive edge se pata chalta hai ki yeh kitab crowd mein kaise stand out kar rahi hai. Aap yeh information copy ya model kar sakte ho taaki aapki kitab bhi unique lage. Iske alawa, yeh keywords ki analysis bhi deta hai jo aapki kitab ke liye important ho sakte hain. Ab second book ke data ko bhi analyze karte hain. Dekhte hain ki writing style aur language easy aur relatable hai ya nahi. Reviews ke basis pe yeh pata chalta hai ki writing ko relatable aur thoda humorous banana smart idea ho sakta hai. Toh research ke baad aapko yeh clear ho jata hai ki kitab ko kaise likhna hai aur kya cheezein include karni chahiye.Isliye research karna ek important step hai likhne se pehle. Aage ki video mein hum dekhenge ki yeh sab use karke kitab ko aur refine kaise karte hain. Toh dekhte rahiye!";

// const text = `${"./speech.txt"}`;
// const text = textToString;
// const selCli =

// file ka path
// const text = path.join(__dirname, "speech.txt");
// console.log(text);
// const textScript = path.join(__dirname, "speech.txt");
// console.log(textScript);
// const text = fs.readFileSync(textScript, "utf8");
// console.log(text1);
const outputPath = path.join(__dirname, "output12.mp3"); // Audio file ka extension .mp3 rakhein

synthesizeText(text, outputPath);
