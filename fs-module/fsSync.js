const fs = require("fs");

fs.writeFileSync(
  "sample.txt",
  "This is a sample text file created using fs.writeFileSync method."
);
try {
  console.log("File created successfully.");
} catch (error) {
  console.log("Error creating file:", error);
} 