let randomNumber;
let oldRandomNumber;

let isWide;

var oldValue;
var newValue;


var uiWatch = window.setInterval(function(){

    if(IsUIChanged() == true){
        GetScrambleFromUI();
        document.getElementById("scramble").blur();
    }

}, 10);

function GetScrambleFromUI(){
    document.getElementById("ScrambleText").innerHTML = GenerateScramble(document.getElementById("scramble").value).toString();
}

function GenerateScramble(scrambleType){
    let generatedScramble;

    if(scrambleType == "2"){
        generatedScramble = "";

        for(let i = 0; i < 15; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }
            
            if(randomNumber == 0){
                generatedScramble += "R";
            }
            else if(randomNumber == 1){
                generatedScramble += "U";
            }
            else{
                generatedScramble += "F";
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 1){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if(scrambleType == "3" || scrambleType == "3bld" || scrambleType == "3oh"){
        generatedScramble = "";

        for(let i = 0; i < 20; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }
            
            if(randomNumber == 0){
                //U, D
                if(Random(2) == 0){
                    generatedScramble += "U"
                }
                else{
                    generatedScramble += "D"
                }
            }
            else if(randomNumber == 1){
                //L, R
                if(Random(2) == 0){
                    generatedScramble += "L"
                }
                else{
                    generatedScramble += "R"
                }
            }
            else{
                //F, B
                if(Random(2) == 0){
                    generatedScramble += "F"
                }
                else{
                    generatedScramble += "B"
                }
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 1){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if(scrambleType == "4"){
        generatedScramble = "";

        for(let i = 0; i < 40; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }
            
            if(randomNumber == 0){
                //U, D
                if(Random(2) == 0){
                    generatedScramble += "U"
                }
                else{
                    generatedScramble += "D"
                }
            }
            else if(randomNumber == 1){
                //L, R
                if(Random(2) == 0){
                    generatedScramble += "L"
                }
                else{
                    generatedScramble += "R"
                }
            }
            else{
                //F, B
                if(Random(2) == 0){
                    generatedScramble += "F"
                }
                else{
                    generatedScramble += "B"
                }
            }

            if(Random(4) == 0){
                generatedScramble += "w"
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 0){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if(scrambleType == "5"){
        generatedScramble = "";

        for(let i = 0; i < 60; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }
            
            if(randomNumber == 0){
                //U, D
                if(Random(2) == 0){
                    generatedScramble += "U"
                }
                else{
                    generatedScramble += "D"
                }
            }
            else if(randomNumber == 1){
                //L, R
                if(Random(2) == 0){
                    generatedScramble += "L"
                }
                else{
                    generatedScramble += "R"
                }
            }
            else{
                //F, B
                if(Random(2) == 0){
                    generatedScramble += "F"
                }
                else{
                    generatedScramble += "B"
                }
            }

            if(Random(4) == 0){
                generatedScramble += "w"
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 0){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if(scrambleType == "6"){
        generatedScramble = "";

        for(let i = 0; i < 80; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }

            if(Random(4) == 0){
                generatedScramble += "3";
                isWide = true;
            }else if(Random(3) == 1){
                isWide = true;
            }
            
            if(randomNumber == 0){
                //U, D
                if(Random(2) == 0){
                    generatedScramble += "U"
                }
                else{
                    generatedScramble += "D"
                }
            }
            else if(randomNumber == 1){
                //L, R
                if(Random(2) == 0){
                    generatedScramble += "L"
                }
                else{
                    generatedScramble += "R"
                }
            }
            else{
                //F, B
                if(Random(2) == 0){
                    generatedScramble += "F"
                }
                else{
                    generatedScramble += "B"
                }
            }

            if(isWide == true){
                generatedScramble += "w"
                isWide = false;
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 0){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    if(scrambleType == "7"){
        generatedScramble = "";

        for(let i = 0; i < 100; i++){
            while(randomNumber == oldRandomNumber){
                randomNumber = Random(3);
            }

            if(Random(4) == 0){
                generatedScramble += "3";
                isWide = true;
            }else if(Random(3) == 1){
                isWide = true;
            }
            
            if(randomNumber == 0){
                //U, D
                if(Random(2) == 0){
                    generatedScramble += "U"
                }
                else{
                    generatedScramble += "D"
                }
            }
            else if(randomNumber == 1){
                //L, R
                if(Random(2) == 0){
                    generatedScramble += "L"
                }
                else{
                    generatedScramble += "R"
                }
            }
            else{
                //F, B
                if(Random(2) == 0){
                    generatedScramble += "F"
                }
                else{
                    generatedScramble += "B"
                }
            }

            if(isWide == true){
                generatedScramble += "w"
                isWide = false;
            }

            if(Random(2) == 1){
                generatedScramble += `'`;
            }
            else if(Random(4) == 0){
                generatedScramble += "2";
            }

            generatedScramble += " ";

            oldRandomNumber = randomNumber;
        }
    }

    //I'd rather die than add support to clock, #ENDCLOCK
    if(scrambleType == "garbage"){
        generatedScramble = "You need to get a life";
    }

    //Fix, outputs "Undefined" before any notations
    if(scrambleType == "megaminx"){
        generatedScramble = "";
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 9; j++){
                if(Random(2)==0){
                    generatedScramble += "R";
                }
                else{
                    generatedScramble += "D"
                }

                if(Random(2)==0){
                    generatedScramble += "++ ";
                }
                else{
                    generatedScramble += "-- "
                }
            }

            if(Random(2)==0){
                generatedScramble += " U \n";
            }
            else{
                generatedScramble += " U' \n"
            }
        }
    }

    return(generatedScramble);
}

function Random(highBound){
    return(Math.round(Math.random() * (highBound - 1)));
}

function IsUIChanged(){
    oldvalue = newValue;
    newValue = document.getElementById("scramble").value;

    if(oldValue == newValue){
        console.log("No Change detected");
        return false;
    }
    else if(oldvalue != newValue){
        console.log("Change detected");
        return true;
    }
}