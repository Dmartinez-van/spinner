let delay = 100;
const spinnerFrames = [
  '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '   '];

for (const frame of spinnerFrames) {
  setTimeout(() => process.stdout.write(frame), delay);
  delay += 200;
}

// Delay at end of spin so we can marvel at the glory that is the SPINNING LINE!
setTimeout(() => {
  console.log();
}, 2300);