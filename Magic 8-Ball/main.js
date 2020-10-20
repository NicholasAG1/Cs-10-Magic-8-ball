// Magic 8 Ball

// Event Listiners
document.getElementById('question').addEventListener('change', Response)

// functions 

function Response() {
    let value = document.getElementById('question').value.toLowerCase();
    let randomNum = Math.floor(Math.random() * 5);
    let answer = "";
    if (value == "is steven epic") {
        answer = "Yes!!!!"
    }else if (value == "nugget?") {
        answer = "Of course."
    }else {
        if (randomNum == 0) {
            answer = "Without a Doubt."
        }else if (randomNum == 1) {
            answer = "As I see it, yes."
        }else if (randomNum == 2) {
            answer = "Concentrate and ask again."
        }else if (randomNum == 3) {
            answer = "Don't count on it."
        }else if (randomNum == 4) {
            answer = "Outlook not so good."
        }
    }
   document.getElementById('response').innerHTML = "" + answer + "";
}