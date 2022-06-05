let mobilenet;
let video;
let label = '';



modelReady = () => {
  console.log('Model Loaded');
  mobilenet.predict(gotResults); 
};

gotResults = (err, results) => {
  if(err) {
    console.error(err);
  } else {
    label = results[0].label;
    mobilenet.predict(gotResults);
  }
};


setup = () => {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide(); 
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
};


draw = () => {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
};