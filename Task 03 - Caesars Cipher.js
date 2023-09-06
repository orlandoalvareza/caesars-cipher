function rot13(str) {
    let newCode = 0;
    let arr = [];
  
    for(let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
  
      if(code <= 77 && code >= 65) {
        newCode = code + 13;
      } else if(code > 77 && code <= 90){
        newCode = code - 13;
      } else {
        newCode = code;
      }
  
      arr.push(String.fromCharCode(newCode));
    }
  
    let newStr = arr.join('');
    return newStr;
  }
  
  rot13("SERR CVMMN!");