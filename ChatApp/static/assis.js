function voice() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.onresult = function (event) {
        var text = event.results[0][0].transcript.toLowerCase();

        console.log(event);

        function ttp(x) {
            let utterance = new SpeechSynthesisUtterance(x);
            speechSynthesis.speak(utterance);

        }
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];

        if (text.includes("pop") || text.includes("hello pop") || text.includes("hi pop")) {
            var a = ["yes {{username}}, tell what", "i am not feel well today, I need to take bed rest, ba bye.", "Yes, {{username}}", "Hi {{username}}, How do you do", "whatsapp, tell what"]
            var b = a[Math.floor(Math.random() * a.length)];
            ttp(b)
        } else if (text.includes("day") || (text.includes("date")) || (text.includes("time"))) {
            ttp("Today is" + day)
        } else if (text.includes("your name")) {
            ttp("I am pop")
        } else if (text.includes("search")) {
            ttp("okay")
            window.location = 'https://www.google.com/';
        } else if (text.includes("song") || (text.includes("music"))) {
            ttp("okay, this song for you")
            var ran = ["{% static 'jhoom.mp3' %}", "{% static 'shamat.mp3' %}", "{% static 'roz.mp3' %}", "{% static 'iloveyou.mp3' %}", "{% static 'manva.mp3' %}", "{% static 'chittiyank.mp3' %}"]
            var ran_song = ran[Math.floor(Math.random() * ran.length)]
            var audio = new Audio(ran_song);
            audio.play();
        } else if (text.includes("google")) {
            ttp("Who's that google, do not say again, Just say pop am always here.")
        } else if (text.includes("who are you")) {
            ttp("I am harshith personal assistant, He gave birth to me")

        } else if (text.includes("old are you")) {
            var a = ["I am still young, do not ask my age", "I don't get old, i'll last long as you {{username}}", "I am new born baby, just one month old"]
            var b = a[Math.floor(Math.random() * a.length)];
            ttp(b)

        } else if (text.includes("how are you")) {
            ttp("yup, I am good, thanks for caring")
        } else if (text.includes("my name")) {
            ttp("fun fact...You don't know your name atleast...ok, i will tell you, your name is {{username}}")
        } else if (text.includes("good morning") || text.includes("good night") || text.includes("good afternoon") || text.includes("good evening")) {
            ttp("wish you same {{username}}")
        } else if (text.includes("something")) {
            var a = ['um, I give you one suggestion, when you get bored, drink one liter of water, then see the changes, you will show interest on something you left earlier.', 'You can get everything in life you want if you will just help enough other people get what they want', 'inspiration does exist, but it must find you working', "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it"]
            var b = a[Math.floor(Math.random() * a.length)];
            ttp(b)
        } else if (text.includes("getting bored")) {
            ttp("watch this")
            window.location = 'https://www.youtube.com/watch?v=JtOMlDLxEy0';
        } else if (text.includes("bf") || text.includes("blue film") || text.includes("sex")) {
            ttp("shut up rascal")
        } else if (text.includes("bye")) {
            ttp("bye, have a good day")
        } else if (text.includes("open whatsapp")) {
            ttp("sure")
            window.location = 'https://www.whatsapp.com/';
        } else if (text.includes("open instagram")) {
            ttp('opening')
            window.location = 'https://www.instagram.com/';
        } else if (text.includes("open facebook")) {
            ttp('opening')
            window.location = 'https://www.facebook.com/';
        } else if (text.includes("hello") || text.includes("hi")) {
            ttp('hello {{username}}')
        } else if (text.includes("message")) {
            ttp('okay tell')

            function autosend() {

                miccolor.setAttribute("src", "{% static 'mic2.svg' %}")

                var recognition = new webkitSpeechRecognition();
                recognition.lang = "en-GB";
                recognition.onresult = function (event) {
                    var text = event.results[0][0].transcript.toLowerCase();

                    valueInput = document.getElementById("textbox");
                    submitValue = document.getElementById("sender");
                    valueInput.value = text;
                    submitValue.click()

                    miccolor.setAttribute("src", "{% static 'mic.svg' %}");
                    ttp("message sent")

                }
                recognition.start();

            }
            setTimeout(autosend, 1600)

        } else {
            var a = ['Really sorry, Please say something other than this', "oh sorry, i don't know that", "I don't know about this, I will get this soon, please ask something other than this"]
            var b = a[Math.floor(Math.random() * a.length)];
            ttp(b)
        }

        x1 = document.getElementById("textbox").placeholder;
        console.log(text)
        x1.value = text;
    }
    recognition.start();
}