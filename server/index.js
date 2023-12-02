const exporess = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Signup = require("./models/Register");
const pdf = require("html-pdf");
const bodyParser = require("body-parser");
const path = require("path");
const puppeteer = require("puppeteer");
const fs = require("fs");
const app = exporess();

app.use(cors());
app.use(exporess.json());

const pdfTemplate = require("./documents");

// for pdf web cvapp
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/cvapp");

// Rruga për verifikimin e hyrjes së përdoruesit
app.post("/Login", (req, res) => {
  // Marrja e të dhënave të dërguara në kërkesë (email dhe password)
  const { email, pwd } = req.body;

  // Kërkimi i përdoruesit në bazën e të dhënave duke u bazuar në email
  Signup.findOne({ email: email }).then((user) => {
    if (user) {
      // Nëse përdoruesi ekziston, verifikimi i fjalëkalimit
      if (user.pwd === pwd) {
        // Sukses - kthimi i një përgjigjeje JSON
        res.json("Sukses");
      } else {
        // Fjalëkalimi i pasaktë - kthimi i një përgjigjeje JSON
        res.json("fjalëkalimi është i pasaktë");
      }
    } else {
      // Përdoruesi nuk ekziston - kthimi i një përgjigjeje JSON
      res.json("përdoruesi nuk ekziston");
    }
  });
});

// Rruga për regjistrimin e një përdoruesi të ri
app.post("/Signup", (req, res) => {
  // Marrja e të dhënave të dërguara në kërkesë (emër, mbiemër, email dhe password)
  const { name, lastname, email, pwd } = req.body;

  // Kërkimi i përdoruesit në bazën e të dhënave duke u bazuar në email
  Signup.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Përdoruesi ekziston tashmë - kthimi i një përgjigjeje JSON
        res.json("Hyrje");
      } else {
        // Përdoruesi nuk ekziston, kështu që mund të krijojmë një përdorues të ri
        Signup.create({
          name: name,
          lastname: lastname,
          email: email,
          pwd: pwd,
        })
          .then((rezultati) => res.json(rezultati))
          .catch((gabimi) => res.json(gabimi));
      }
    })
    .catch((gabimi) => res.json(gabimi));
});

// update

app.get("/Updateuser/:id", (req, res) => {
  const id = req.params.id;
  console.log("Received request for user with ID:", id);

  Signup.findById({ _id: id })
    .then((user) => {
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((err) => {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: err.message });
    });
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  Signup.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//

app.put("/Signup:id", (req, res) => {
  const id = req.params.id;
  Signup.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      pwd: req.body.pwd,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/Edituser", (req, res) => {
  Signup.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Function to generate PDF using puppeteer
const generatePDF = async (html) => {
  const browser = await puppeteer.launch({
    headless: "new", // Explicitly specify headless mode
  });
  const page = await browser.newPage();

  // Set the HTML content
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  // Generate PDF
  const pdfBuffer = await page.pdf({ format: "A4" });

  await browser.close();

  return pdfBuffer;
};
// POST Route - PDF generation and fetching of the data
app.post("/create-pdf", async (req, res) => {
  try {
    console.log("Before generating PDF");
    const pdfBuffer = await generatePDF(pdfTemplate(req.body));

    // Save the PDF to a file
    const pdfFilePath = path.join(__dirname, "Resume.pdf");
    fs.writeFileSync(pdfFilePath, pdfBuffer);

    console.log("After generating PDF");

    res.send("Success");
    console.log("Success");
  } catch (err) {
    console.error("Error generating PDF:", err);
    res.status(500).json({ error: "Error generating PDF" });
  }
});

// Get - Send generated pdf to the client
app.get("/fetch-pdf", (req, res) => {
  const pdfFilePath = path.join(__dirname, "Resume.pdf");

  fs.readFile(pdfFilePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error reading PDF file" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.send(data);
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("my-cvapp/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "my-cvapp", "build", "index.html"));
  });
}
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
