function SoulcodeUsernameValidation(str) {
var condicao = /^[a-zA-Z]([a-zA-Z0-9_])*[a-zA-Z0-9]$/;
var underline = /^[a-zA-Z0-9_]+$/;
          if (str[str.length - 1] === "_" || !underline.test(str) || str.length < 4 || str.length > 25 || !condicao.test(str)){
              alert("nome invalido! - O nome de usuário precisar seguir os seguintes critérios: \n1. Ter entre 4 e 25 caracteres. \n2. Deve começar com uma letra. \n3. Pode conter apenas letras, números e o caractere de sublinhado. \n4. Não pode terminar com um caractere de sublinhado.");
          } else {
              alert(str + ": validado !");
          }
  }
  SoulcodeUsernameValidation(prompt("Digite o seu nome de usuário: "))
  