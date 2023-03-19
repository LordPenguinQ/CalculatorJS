const buttons=[
    "AC","⭠","÷",
    7,8,9,"*",
    4,5,6,"-",
    1,2,3,"+",
    0,".","="]

const op=["+","-","*","÷"]
function gen() {
    const main = document.getElementById("main")
    const display =document.createElement("div")
    const showD=document.createElement("div")

    let numb=0
    
    display.className="display"
    showD.className="showD"
    display.innerText=0;
    
    showD.appendChild(display)
    main.appendChild(showD)

    createButtons(main)

    calculation(display,numb)

}

function createButtons(main) {
    for(let i=0;i<buttons.length;i++){
        let cKey=document.createElement("button")
        cKey.className="operkey"
        if(typeof buttons[i]==='number'){
            cKey.className="numkey"
        }
        if(buttons[i]=="AC"){
            cKey.className="clear"
        }
        if(buttons[i]==0){
            cKey.className="zero"
        }
        if(buttons[i]=="⭠"){
            cKey.className="del"
        }
        if(buttons[i]=="="){
            cKey.className="equalkey"
        }
        cKey.id=buttons[i]
        cKey.innerText=buttons[i]
        main.appendChild(cKey)
    }
}
function calculation(display,numb){
    for(let i=0;i<10;i++){
        let pushed=document.getElementById(i)
        pushed.onclick=
        function (){
            if(display.innerText.length >= 16){
                return
            }
            if(display.innerText=="0"){
                display.innerText=pushed.innerText
            }
            else{
                display.innerText+=pushed.innerText
            }
        }
        let opValue="e"
        for(let i=0;i<op.length;i++){
            document.getElementById(op[i]).onclick=
            function(){
                opValue=op[i]
                numb=display.innerText
                display.innerText=0
            }
        }
        document.getElementById(".").onclick=
        function (){
            if(display.innerText.indexOf(".") == -1) {
                display.innerText += "."
            }
        }

        document.getElementById("=").onclick=
        function (){
            let output="Wynik"
            if(opValue=="+"){
                output =+numb+ +display.innerText
                display.innerText=output
            }
            else if(opValue=="-"){
                output =numb-display.innerText
                display.innerText=output
            }
            else if(opValue=="*"){
                output =numb*display.innerText
                display.innerText=output
            }
            else if(opValue=="÷"){
                if(display.innerText==0){
                    display.innerText="Ło panie :O"
                }
                else{
                    output=numb/display.innerText
                    display.innerText=output
                }
            }            
        }
        document.getElementById("AC").onclick=
        function (){
            numb=0
            opValue="e"
            display.innerText=0
        }
        document.getElementById("⭠").onclick=
        function (){
            if(display.innerText.length==1){
                display.innerText=0
            }
            else{
                display.innerText=display.innerText.slice(0,-1)
            }
        }
    }

}
