function encodeCeasar(text, key) {
  encodeText = '';

  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      encodeText += String.fromCharCode(65 + ((code - 65 + key) % 26));
    } else if (code >= 97 && code <= 122) {
      encodeText += String.fromCharCode(97 + ((code - 97 + key) % 26));
    } else {
      encodeText += String.fromCharCode(code);
    }
  }

  return encodeText;
}

function decodeCeasar(encodeText, key) {
  let decodeText = '';

  for (let i = 0; i < encodeText.length; i++) {
    let code = encodeText.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      let coef = (code - 65 - key) % 26;
      if (coef >= 0)
        decodeText += String.fromCharCode(coef + 65);
      else
        decodeText += String.fromCharCode(coef + 90)
    } else if (code >= 97 && code <= 122) { 
      let coef = (code - 97 - key) % 26;
      if (coef >= 0)
        decodeText += String.fromCharCode(coef + 97);
      else
        decodeText += String.fromCharCode(coef + 122)
    } else {
      decodeText += String.fromCharCode(code);
    }
  }

  return decodeText;
}

module.exports = {
  encodeCeasar,
  decodeCeasar
}
