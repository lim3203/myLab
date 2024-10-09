const nextButtton = document.querySelector(".next"),
buttonBox = document.querySelector(".buttons"),
buttonNumList = [4,9];

let level = [[['김자','감자'],['몰리','물리'],['코딤','코딩']],[['믈고기','물고기'],['섀우튀김','새우튀김'],['이마드','이마트']]];


let pageCount = 0, 
a = 0, 
buttonNum = 3, 
pageStatus = 1, 
answer = 10,
levelInside = 0,
success = 3;


nextButtton.addEventListener("click", () => {next()});

function next(){
    if(pageCount == 2 & pageStatus != 0){
        alert("끝");
        pageRemove();
    } else if (pageCount > 0 & pageStatus != 0){
        pageRemove();
        setTimeout(() => {
            game(pageCount);
            pageCount += 1;
        }, 500);
        // console.log("next");
    } else if (pageCount == 0){
        game(0);
        pageCount += 1;
        console.log(pageCount);
    }
    
}

function pageRemove(){
    const buttonremove = document.querySelectorAll('.quiz');
    buttonremove.forEach(box => {
        box.remove();
    });
    document.querySelector(`.quiz${answer}`).remove();
}

function game(lev){
    a = 0
    buttonBox.style.gridTemplateColumns = `repeat(${lev+2}, minmax(0, 1fr))`;
    console.log(lev);
    levelInside = Math.floor(Math.random()*3);
    console.log(buttonNumList[lev]);
    pageStatus = 0;
    while (a<buttonNumList[lev]){
        const addButtons = document.createElement("button");
        addButtons.classList.add(`quiz${a}`);
        addButtons.classList.add("quiz");
        addButtons.classList.add("quizButton");
        addButtons.innerHTML = `${level[lev][levelInside][1]}`;
        buttonBox.append(addButtons);
        a += 1;
    }
    answer = Math.floor(Math.random()*buttonNumList[lev]);
    console.log(answer);
    document.querySelector(`.quiz${answer}`).innerHTML = `${level[lev][levelInside][0]}`;
    document.querySelector(`.quiz${answer}`).classList.remove("quiz");

    document.querySelector(`.quiz${answer}`).addEventListener("click", () => {
        alert("정답!");
        pageStatus=1;
    });
    let buttonsEvnet = document.querySelectorAll(".quiz");
    buttonsEvnet.forEach(function (event) {
        event.addEventListener("click", () => {
            alert("실패!");
        });
    });

}

function init() {
    console.log("hello");

   
    // addButtons.append('새로생긴버튼');
}


init();



