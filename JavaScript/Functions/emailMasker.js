let email = "myEmail@email.com";

function maskEmail(email) {
  const sliced = email.slice(1, email.indexOf("@") -1);
  const masked = sliced.replace(sliced, "*".repeat(sliced.length));
  return email.slice(0, 1) + masked + email.slice(email.indexOf("@") - 1);
}

console.log(maskEmail(email));