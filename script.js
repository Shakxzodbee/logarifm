        function calculate() {
            const multiplier = parseFloat(document.getElementById('multiplier').value);
            const logs = [2.723, 2.75, 2.728, 2.735, 2.737, 2.744, 2.746, 2.763]; // Log qiymatlari
            const customWords = [
                "ENG KICHIK ATKAT UCHUN",
                "JUDA KICHIK",
                "KICHIK ",
                "ORTACHA PUNKT",
                "SREDNIY ISHLASA BOLADI",
                "ORTACHA ISHLASA BOLADI",
                "KATTA PUNKT ISHLEDI ",
                "KATTA PUNKT"
            ];
            let results = '';

            logs.forEach((logValue, index) => {
                const result = multiplier * Math.log(logValue);
                const formattedResult = result.toString().split('.'); // Nuqtadan ajratish
                const finalResult = `${formattedResult[0]}.${formattedResult[1].substring(0, 2)}`; // 2 ta raqam olish
                results += `${customWords[index]}: ${finalResult}<br>`;
            });

            document.getElementById('result').innerHTML = results;
        }

        document.getElementById('multiplier').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                calculate();
            }
        });