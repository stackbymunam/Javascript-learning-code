class Password {
  constructor(length) {
    this.length = length;
    this.lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
  }

  generate() {
    const randomLower = this.getRandom(this.lowercase);
    const randomUpper = this.getRandom(this.uppercase);
    const randomDigit = this.getRandom(this.digits);
    const randomSpecial = this.getRandom(this.special);

    const allChars = [...this.lowercase, ...this.uppercase, ...this.digits, ...this.special];

    const passwordArray = [randomLower, randomUpper, randomDigit, randomSpecial];

    for (let i = 4; i < this.length; i++) {
      passwordArray.push(this.getRandom(allChars));
    }

    return this.shuffle(passwordArray).join('');
  }

  getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

// ✨ Create the password and show in an alert
const myPassword = new Password(12); // you can change 12 to any length you want
const password = myPassword.generate();

alert(`Your generated password is: ${password}`);
