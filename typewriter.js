const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the char here
    let out = sentence[i];
    if (i === sentence.length - 1) {
      out += '\n';
    }
    process.stdout.write(out);
  }, 50 * i) // <= 1s delay to make it noticeable. Can dial it down later.
}

