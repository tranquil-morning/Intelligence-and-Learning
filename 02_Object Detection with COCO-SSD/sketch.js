let video;
let detector;
let detections = [];

preload = () => {
  detector = ml5.objectDetector('cocossd');
};

gotDetections = (err, results) => {
  if (err) {
    console.log(err);
  }
    detections = results;
    detector.detect(video,gotDetections);

      

  };

setup = () => {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections); 
};


draw = () => {
  image(video, 0, 0);

  for (const e of detections) {
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(e.x, e.y, e.width, e.height);
    noStroke();
    fill(255);
    textSize(24);
    text(e.label, e.x + 10, e.y + 24);
  }

};