document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("show");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");

  showBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

// swiper

var timeOnSlide = 3,
  timeBetweenSlides = 1,
  animationstring = "animation",
  animation = false,
  keyframeprefix = "",
  domPrefixes = "Webkit Moz O Khtml".split(" "),
  pfx = "",
  slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) {
  animation = true;
}

if (animation === false) {
  for (var i = 0; i < domPrefixes.length; i++) {
    if (slidy.style[domPrefixes[i] + "AnimationName"] !== undefined) {
      pfx = domPrefixes[i];
      animationstring = pfx + "Animation";
      keyframeprefix = "-" + pfx.toLowerCase() + "-";
      animation = true;
      break;
    }
  }
}

if (animation === false) {
  // animate in JavaScript fallback
} else {
  var images = slidy.getElementsByTagName("img"),
    firstImg = images[0],
    imgWrap = firstImg.cloneNode(false); // copy it.
  slidy.appendChild(imgWrap); // add the clone to the end of the images
  var imgCount = images.length, // count the number of images in the slide, including the new cloned element
    totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
    slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
    moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
    basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
    position = 0, // set the initial position of the slidy element
    css = document.createElement("style"); // start marking a new style sheet
  css.type = "text/css";
  css.innerHTML +=
    "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " +
    imgCount * 100 +
    "%;  }\n"; // set the width for the slidy container
  css.innerHTML +=
    "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
  for (i = 0; i < imgCount - 1; i++) {
    //
    position += slideRatio; // make the keyframe the position of the image
    css.innerHTML += position + "% { left: -" + i * 100 + "%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position + "% { left: -" + (i + 1) * 100 + "%; }\n";
  }
  css.innerHTML += "}\n";
  css.innerHTML +=
    "#slidy { left: 0%; " +
    keyframeprefix +
    "transform: translate3d(0,0,0); " +
    keyframeprefix +
    "animation: " +
    totalTime +
    "s slidy infinite; }\n"; // call on the completed keyframe animation sequence
  document.body.appendChild(css); // add the new stylesheet to the end of the document
}

const button = document.getElementById("catalogButton");
const popup = document.getElementById("infoPopup");

button.addEventListener("click", () => {
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
});

document.getElementById("closeWindow").addEventListener("click", function () {
  document.getElementById("infoPopup").style.display = "none";
});
