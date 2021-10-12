function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LWsYwNIvR/model.json", modelready);
}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        r = Math.floor(Math.random()* 255) + 1;
        g = Math.floor(Math.random()* 255) + 1;
        b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("noise").innerHTML = "I can hear- " + result[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy- " + (result[0].confidence* 100).toFixed(2) + " %";
        document.getElementById("noise").style.color = "rgb("+ r +"," + g + "," + b + ")";
        document.getElementById("accuracy").style.color = "rgb("+ r +"," + g + "," + b + ")";

        img = document.getElementById("alien_1")
        img1 = document.getElementById("alien_2")
        img2 = document.getElementById("alien_3")
        img3 = document.getElementById("alien_4")

        if(result[0].label == "Clap"){
            img.src = "aliens-01.gif"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }
        else if(result[0].label == "Snap"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.gif"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.png"
        }
        else if(result[0].label == "Tongue Snap"){
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.gif"
            img3.src = "aliens-04.png"
        }
        else{
            img.src = "aliens-01.png"
            img1.src = "aliens-02.png"
            img2.src = "aliens-03.png"
            img3.src = "aliens-04.gif"
        }
    }
}