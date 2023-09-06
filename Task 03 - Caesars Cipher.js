function caesarsCipher(textToEncrypt) {
  const cipherArr = [];
  let codeToEncrypt = 0;

  for(let i = 0; i < textToEncrypt.length; i++) {
    let code = textToEncrypt.charCodeAt(i);

    if (code <= 77 && code >= 65) {
      codeToEncrypt = code + 13;
    } else if (code > 77 && code <= 90){
      codeToEncrypt = code - 13;
    } else {
      codeToEncrypt = code;
    }

    cipherArr.push(String.fromCharCode(codeToEncrypt));
  }

  return cipherArr.join('');
}

caesarsCipher("SERR CVMMN!");