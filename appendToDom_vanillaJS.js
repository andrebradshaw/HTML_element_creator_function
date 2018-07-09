//lets build something together!!

//I do not like my current method for building pop-up boxes on a web page. It is tedious and prevents me from thinking about what I am building.

//today I am going to build some functions to handle this task.

//we will need to pass a few things into this function.
/*/
  1) a name of the element ID. this will be a string
  2) an element type. this will be a string
  3) a bunch of CSS data. This will be handled with an array object. This will be fun :)
/*/

var cssStyleR = {
  "disp": "block",
  "posn": "fixed",
  "top": "200px",
  "wdth": "40%",
  "hght": "40%",
  "bg": "DarkSlateGrey",
  "br": "1em",
  "pad": "3px",
  "zi": "10000"
};

var elmDeetz = ["new_boxContainer", "div", "body"];

function newContainer(elmD, jdat){ //for the n00bs, keep in mind that variables created within a function stay in that function. They cannot be called upon elsewhere.
  var el = document.createElement(elmD[1]);
  el.setAttribute("id", elmD[0]);
  if(elmD[2] === "body"){
    document.body.appendChild(el);
  }else{
    document.getElementById(elmD[2]).appendChild(el);
  }
  el.style.display = jdat.disp;
  el.style.position = jdat.posn;
  el.style.top = jdat.top; //this forces the element to position itself 200 pixels from the top of the page body.
  el.style.width = jdat.wdth; //40% of the page size
  el.style.height = jdat.hght;
  el.style.background = jdat.bg;
  el.style.borderRadius = jdat.br; //this curves the box border.
  el.style.padding = jdat.pad;
  el.style.zIndex = jdat.zi; //this specifies the stacking order of the elements on a page. We want ours on top! reference: https://www.w3schools.com/cssref/pr_pos_z-index.asp
}

//now let's call the function with a promise to ensure the container is created before our children.

var container = new Promise(resolve =>{
  resolve(newContainer(elmDeetz, cssStyleR));
});

container.then(newContainer(["ibox1", "input", "new_boxContainer"], {
  "disp": "block",
  "posn": "absolute",
  "top": "1px",
  "wdth": "100%",
  "hght": "20px",
  "bg": "white",
  "br": "2em",
  "pad": "3px",
  "zi": "10000"
}));

