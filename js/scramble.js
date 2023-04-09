let randomNumber;
let oldRandomNumber;

let isWide;

var oldValue;
var newValue;


var uiWatch = window.setInterval(function () {
    if (IsUIChanged() == true) {
        GetScrambleFromUI();
        document.getElementById("scramble").blur();
    }

}, 10);

function GetScrambleFromUI() {
    if (document.getElementById("scramble").value != "notSet") {
        document.getElementById("ScrambleText").innerHTML = GenerateScramble(document.getElementById("scramble").value);
    }
}

function GenerateScramble(scrambleType) {
    let generatedScramble;

    if (scrambleType == "2") {
        ChangeTextSize(1.5);
        generatedScramble = "";

        for (let i = 0; i < 15; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                generatedScramble += "R";
            }
            else if (randomNumber == 1) {
                generatedScramble += "U";
            }
            else {
                generatedScramble += "F";
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(4) == 1) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "3" || scrambleType == "3bld" || scrambleType == "3oh") {
        ChangeTextSize(1.5);
        generatedScramble = "";

        for (let i = 0; i < 20; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(2) == 0) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "4" || scrambleType == "4bld") {
        ChangeTextSize(1.25);
        generatedScramble = "";

        for (let i = 0; i < 40; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (Random(4) == 0) {
                generatedScramble += "w"
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(4) == 0) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "5" || scrambleType == "5bld") {
        ChangeTextSize(1.2);

        generatedScramble = "";

        for (let i = 0; i < 60; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (Random(2) == 0) {
                generatedScramble += "w"
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(4) == 0) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "6") {
        ChangeTextSize(1.1);
        generatedScramble = "";

        for (let i = 0; i < 80; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (Random(4) == 0) {
                generatedScramble += "3";
                isWide = true;
            } else if (Random(3) == 1) {
                isWide = true;
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (isWide == true) {
                generatedScramble += "w"
                isWide = false;
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(4) == 0) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "7") {
        ChangeTextSize(1);
        generatedScramble = "";

        for (let i = 0; i < 100; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (Random(4) == 0) {
                generatedScramble += "3";
                isWide = true;
            } else if (Random(2) == 1) {
                isWide = true;
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (isWide == true) {
                generatedScramble += "w"
                isWide = false;
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }
            else if (Random(4) == 0) {
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    //I'd rather die than add support to clock, #ENDCLOCK
    if (scrambleType == "garbage") {
        generatedScramble = "You need to get a life";
    }

    if (scrambleType == "megaminx") {
        ChangeTextSize(1.25);
        generatedScramble = "";

        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 5; j++){
                generatedScramble += "R";

                if(Random(2) == 0){
                    generatedScramble += "++ ";
                }else{
                    generatedScramble += "-- ";
                }

                generatedScramble += "D";

                if(Random(2) == 0){
                    generatedScramble += "++ ";
                }else{
                    generatedScramble += "-- ";
                }
            }

            if(Random(2) == 0){
                generatedScramble += "U ";
            }else{
                generatedScramble += "U' ";
            }
        }
    }

    if (scrambleType == "pyraminx") {
        generatedScramble = "";

        for (let i = 0; i < 12; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }

        for (let i = 0; i < 2; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "u"
                }
                else {
                    generatedScramble += "d"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "l"
                }
                else {
                    generatedScramble += "r"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "f"
                }
                else {
                    generatedScramble += "b"
                }
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "skewb") {
        generatedScramble = "";

        for (let i = 0; i < 8; i++) {
            while (randomNumber == oldRandomNumber) {
                randomNumber = Random(3);
            }

            if (randomNumber == 0) {
                //U, D
                if (Random(2) == 0) {
                    generatedScramble += "U"
                }
                else {
                    generatedScramble += "D"
                }
            }
            else if (randomNumber == 1) {
                //L, R
                if (Random(2) == 0) {
                    generatedScramble += "L"
                }
                else {
                    generatedScramble += "R"
                }
            }
            else {
                //F, B
                if (Random(2) == 0) {
                    generatedScramble += "F"
                }
                else {
                    generatedScramble += "B"
                }
            }

            if (Random(2) == 1) {
                generatedScramble += `'`;
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if (scrambleType == "3multi") {
        ChangeTextSize(0.6);
        generatedScramble = "";

        for (var j = 0; j < 5; j++) {
            generatedScramble += (j + 1) + ". ";

            for (let i = 0; i < 20; i++) {
                while (randomNumber == oldRandomNumber) {
                    randomNumber = Random(3);
                }

                if (randomNumber == 0) {
                    //U, D
                    if (Random(2) == 0) {
                        generatedScramble += "U"
                    }
                    else {
                        generatedScramble += "D"
                    }
                }
                else if (randomNumber == 1) {
                    //L, R
                    if (Random(2) == 0) {
                        generatedScramble += "L"
                    }
                    else {
                        generatedScramble += "R"
                    }
                }
                else {
                    //F, B
                    if (Random(2) == 0) {
                        generatedScramble += "F"
                    }
                    else {
                        generatedScramble += "B"
                    }
                }

                if (Random(2) == 1) {
                    generatedScramble += `'`;
                }
                else if (Random(4) == 1) {
                    generatedScramble += "2";
                }

                generatedScramble += " ";

                oldRandomNumber = randomNumber;
            }
            generatedScramble += "<br>"
        }
    }

    if (scrambleType == "sq1") {
        ChangeTextSize(1.25);
        generatedScramble = ""
        for (var i = 0; i < 15; i++) {
            var TopNotation = Random(12) - 5;
            var BottomNotation = Random(12) - 5;

            //Eliminates the chance of having a "(0, 0)" notation
            while (TopNotation == 0 && BottomNotation == 0) {
                TopNotation = Random(10) - 5;
                BottomNotation = Random(10) - 5;
            }

            generatedScramble += "(" + TopNotation + ", " + BottomNotation + ")" + " / "
        }
    }

    return (generatedScramble);
}

function Random(highBound) {
    return (Math.round(Math.random() * (highBound - 1)));
}

function IsUIChanged() {
    oldvalue = newValue;
    newValue = document.getElementById("scramble").value;

    if (oldValue == newValue) {
        return false;
    }
    else if (oldvalue != newValue) {
        return true;
    }
}

//Works off of em
function ChangeTextSize(newSize) {
    document.getElementById("ScrambleText").style.fontSize = (newSize + "em")
}