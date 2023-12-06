const extendHex = (shortHex) => {
  // write your code here
  shortHex = shortHex.replace("#", "").toUpperCase();

	if (!/^[0-9A-F]{3}$/.test(shortHex)) {
    throw new Error("Invalid short hex code");
  }

	 const fullHex = shortHex
    .split("")
    .map((char) => char.repeat(2))
    .join("");

  return `#${fullHex}`;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
