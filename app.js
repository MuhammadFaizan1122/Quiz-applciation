window.onload = function() {
    sawal(0)
}

var questions = [{
        ques: "Who is the inventor of pakistan",
        ans: "Quaid-e-azam",
        options: [
            "Quaid-e-azam",
            "Alama Iqbal",
            "Benazeer bhutto",
            "Liaquat ali khan"
        ]
    },
    {

        ques: "Who is the inventor of Apple",
        ans: "Steve jobs",
        options: [
            "Steve jobs",
            "Dennis Ritchiehx",
            "Yunus ali khan",
            "Alexa"
        ]
    },
    {

        ques: "Who is the inventor of Window",
        ans: "Bill Gates",
        options: [
            "Bill Gates",
            "Grid Disson",
            "Alexa rock",
            "JJ Thomsan"
        ]
    },
    {

        ques: "PUBG Stand for ?",
        ans: "Players Unknown battle ground",
        options: [
            "Pub game",
            "Pro unknown battle games",
            "Players Unknown battle ground",
            "Pro unknown battle gamers "
        ]
    },
    {

        ques: "Who is the inventor of light",
        ans: "Edison",
        options: [
            "Shoqat ali",
            "Edison",
            "Henry jorge",
            "Mic watson"
        ]
    },
]

var counter = 0;
var score = 0;


function count() {
    sawal(counter);
    check();
}

function sawal(e) {
    var question = document.getElementById("question");
    var option = document.getElementById("option");
    question.innerHTML = `<h3> ${questions[e].ques} </h3>`;
    var data = `<ol>`;
    for (var op = 0; op < questions[e].options.length; op++) {

        data += `<li class="option" value="${questions[e].options[op]}">${questions[e].options[op]}</li>`
    }
    data += `</ol>`;
    option.innerHTML = data;
    counter++;
    console.log(counter)
    active()
}


function active() {
    let activeOption = document.querySelectorAll("li.option")

    for (var i = 0; i < activeOption.length; i++) {
        activeOption[i].onclick = function() {
            for (var j = 0; j < activeOption.length; j++) {
                if (activeOption[j].classList.contains("active")) {
                    activeOption[j].classList.remove("active")
                }
            }
            this.classList.add("active");
            console.log(this.innerHTML);
        }
    }
}