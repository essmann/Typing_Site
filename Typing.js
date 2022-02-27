/* eslint-disable no-unused-vars */







    //generate random array



    
    function main(){
        var output = document.querySelector(".type"); // What you are supposed to type
    var input = document.querySelector("#typing"); // What you input
    let typed_arr = []
    let spaces = 0;
    let words_typed = 0;
    let total_words_typed = 0
    var letters = 0;
    let seconds = 1;
    var  k = 0
    var accuracy;
    var arrays = [
        ["this","take","on","when","it","why","is","someone","take","type","while","at","lemon","do","evaluate","considerate","doing"],
        [],
        [],
    
    ]
    var start = (function() {
        var executed = false;
        return function() {
            if (!executed) {
                executed = true;
                timer()
            }
        };
    })()
    document.querySelector(".sixty").style.color = "#d40e4a"
    
    document.querySelector(".data").innerHTML = "Typed: " + words_typed + " " + "Total spaces done: " + total_words_typed  +  " " + "Accuracy: " + accuracy  + " %"
    input.addEventListener("keypress",(e)=>{
        
       
        
        
        
       start()
        if(e.code == 'Space'){
        let typed = input.value.split(" ")
        let length = typed.length;
        
        total_words_typed ++
        typed_arr.push(typed[length-1])
        input.value = ''
        try{
            if(typed_arr[spaces].length){
                letters += typed_arr[spaces].length
            }
            else{
                letters += 5;
            }
        } catch(err){
            spaces = 0;
            letters += typed_arr[spaces].length
        }   

        console.log(spaces +  "  SPACES ")
         k += letters/5
         //let wpm = k /(seconds/60)
         var wpm = words_typed/(seconds/60)
         console.log(rand_array);
         let h = words_typed/total_words_typed
        let accuracy = h * 100
        
         document.querySelector(".data").innerHTML = "Typed: " + words_typed + " " + "Total spaces done: " + total_words_typed +  " " + "Accuracy: " + accuracy + " %"
         document.querySelector("h1").textContent = "WPM: " + Math.floor(wpm)
        //console.log(wpm);
        document.querySelector(".data").innerHTML = "Typed: " + words_typed + " " + "Total spaces done: " + total_words_typed  +  " " + "Accuracy: " + accuracy + " %"
        if(typed_arr[spaces] + " "==output.childNodes[spaces].textContent){
            console.log(spaces +  "  SPACES ")
            console.log(typed_arr[spaces] ," typed")
            console.log(output.children[spaces] ,"children")
            words_typed++
            output.children[spaces].classList.add("correct")
            
            document.querySelector(".data").innerHTML = "Typed: " + words_typed + " " + "Total spaces done: " + total_words_typed  +  " " + "Accuracy: " + accuracy + " %"
            
            console.log(output.children[spaces])
            console.log(total_words_typed)
        }
        else{
                console.log(typed_arr[spaces])
                console.log(output.childNodes[spaces].textContent)
            output.children[spaces].classList.add("incorrect")
            console.log(typed_arr[spaces], "typed arr")
            console.log(output.childNodes[spaces].textContent, "output.childnodes")
            console.log(output)
            console.log(spaces +  "  SPACES ")
        }
        
        if(total_words_typed==31||total_words_typed==62||total_words_typed==93||total_words_typed==93+31||total_words_typed==93+31+31||total_words_typed==93+31+31+31){
            console.log(spaces +  "  SPACES ")
            typed_arr = [];
            typed_arr.length = 0;
            typed_arr.splice(0,typed_arr.length)
            spaces = 0;
            
            function removeAllChildNodes() {
                while (output.firstChild) {
                    output.removeChild(output.firstChild);
                }
            }
            removeAllChildNodes()
    
            console.log("WORDS TYPED IS 31, NEW LINE NOW")
            for(let i = 0; i< 31; i++){
    
                var rand = Math.floor(Math.random() * arrays[0].length);
                var rand_array = []
                var el = document.createElement("span");
                el.textContent = arrays[0][rand] + " "
                
                
                rand_array.push(arrays[0][rand])
                console.log(rand_array)
                output.appendChild(el)
            }
            
            //typed_arr[spaces] + " "==output.childNodes[spaces].textContent
            console.log(typed_arr[spaces], "typed arr")
            console.log(output.childNodes[spaces].textContent, "output.childnodes")
            input.value = ''
        }
        if(total_words_typed==62){
            typed_arr = [];
            typed_arr.length = 0;
            typed_arr.splice(0,typed_arr.length)
            spaces = 0;
            
            function removeAllChildNodes() {
                while (output.firstChild) {
                    output.removeChild(output.firstChild);
                }
            }
            removeAllChildNodes()
    
            console.log("WORDS TYPED IS 31, NEW LINE NOW")
            for(let i = 0; i< 31; i++){
    
                var rand = Math.floor(Math.random() * arrays[0].length);
                var rand_array = []
                var el = document.createElement("span");
                el.textContent = arrays[0][rand] + " "
                
                rand_array.push(arrays[0][rand])
                console.log(rand_array)
                output.appendChild(el)
            }
            
            //typed_arr[spaces] + " "==output.childNodes[spaces].textContent
            console.log(typed_arr[spaces], "typed arr")
            console.log(output.childNodes[spaces].textContent, "output.childnodes")
            input.value = ''
        }
        
        spaces++
        
        
        
        
    }
    
    })
    
    for(let i = 0; i< 31; i++){
        var rand = Math.floor(Math.random() * arrays[0].length);
        var rand_array = []
        var el = document.createElement("span");
        var br = document.createElement("br")
        el.textContent = arrays[0][rand] + " "
       
        rand_array.push(arrays[0][rand])
        console.log(rand_array)
        output.appendChild(el)
    }
    document.querySelector("#typing").addEventListener("keypress",(e)=>{
        console.log(output.children[spaces])
        console.log(typed_arr[spaces])
        if(typed_arr[spaces]==output.textContent.split(" ")[spaces] + " "){
            output.children[spaces].classList.add("correct");
            console.log(2);
        }
    })
    function timer(){
       const x = setInterval(()=>{
           let save_count = 0;
            if(document.querySelector(".timer").innerHTML==0){
                add_score(document.querySelector("h1").textContent,"accuracy",d.getTime(),"1")
                localStorage.setItem("WPM",document.querySelector("h1").textContent)
                localStorage.setItem("Accuracy", accuracy)
                localStorage.setItem("Date", d)
                localStorage.setItem("Title",prompt("Save result with name: "));
                
                
                clearInterval(x)
                document.location.reload()
                
            }
            
            
              else if (document.querySelector(".timer").innerHTML!==0){
                document.querySelector(".timer").innerHTML -= 1;
                seconds++
              }
            
            
        },1000)
    }
    
        
        
        function add_score(word,acc,date,title){
            let br = document.createElement("br")
            let el = document.createElement("div");
            let word_score = document.createElement("div")
            let accuracy_score = document.createElement("div")
            let date_time = document.createElement("div")
            el.class = 'score_header'
            el.textContent = title
            el.class = 'score'
            word_score.textContent =   word
            el.appendChild(word_score)
            accuracy_score.textContent = "Accuracy: " + acc
            date_time.textContent = "Date: " + date
            el.appendChild(accuracy_score)
            el.appendChild(date_time)
            
            
            
             document.querySelector(".scores").appendChild(el)
             document.querySelector(".scores").appendChild(br)
            
    
        }
        
        let d = new Date()
        
       // document.getElementById("60").addEventListener("click",change_time(60))
        
        if (localStorage.getItem("WPM") === null) {
            //...
          }
          else{
            add_score(localStorage.getItem("WPM"),localStorage.getItem("Accuracy"),localStorage.getItem("Date"),localStorage.getItem("Title"))
          }
        
    }
  
    
    main()
    
