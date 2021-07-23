class Formatter {
  //add static methods here
  static capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
  }

  static sanitize(text) {
    return text.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(text) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = text.split(" ")
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return result.join(" ");
  }
}
