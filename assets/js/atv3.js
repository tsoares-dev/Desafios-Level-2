        function BracketMatcher(string) {
            var conteudo = [];
            [...string].forEach(a => {
                if (a === "(") {
                    conteudo.push(a);
                } else if (a === ")" && conteudo.length !== 0) {
                    conteudo.pop(a);
                } else if (a === ")" && conteudo.length === 0) {
                    conteudo.push(a);
                }
            });
            return conteudo.length === 0 ? 1 + " VERDADEIRO" : 0 + " FALSO";
        }

        function checkBrackets() {
            var string = document.getElementById("stringInput").value;
            var result = BracketMatcher(string);
            document.getElementById("result").innerHTML = result;
        }
