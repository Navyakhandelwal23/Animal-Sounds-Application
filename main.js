function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bMdHkweMN/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}

function gotresults(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        random_r= Math.floor(Math.random()*255)+1
        random_g= Math.floor(Math.random()*255)+1
        random_b= Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML="I can hear:"+results[0].label
        document.getElementById("result_confidence").innerHTML= "accuracy"+(results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color= "rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color= "rgb("+random_r+","+random_g+","+random_b+")";

        img1= document.getElementById("Cat.png")
        img2= document.getElementById("Dog.jpg")
        img3= document.getElementById("images.jpg")

        if(results[0].label== "Cat mewing"){
            img1.src= "mochi-cat.gif"
            img2.src="Dog.jpg"
            img3.src="images.jpg"
        }else if(results[0].label=="Dog barking"){
            img1.src="Cat.png"
            img2.src="cartoon-dog.gif"
            img3.src="images.jpg"
        }else{
            img1.src= "Cat.png"
            img2.src="Dog.jpg"
            img3.src="miniboi.gif"
        }
    }
}