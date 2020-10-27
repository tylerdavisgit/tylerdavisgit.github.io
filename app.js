//sheetUrl is the shared url, anyone can view the google sheet in google
const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1zj3x6lPobsR6rxsqQAl3NpTuULa8wfeIfHyZxdzh2kk/edit?usp=sharing";

// sheetAsJson is how we will pull the data as JSON(javascript object notation)
const sheetAsJSON =
  "https://spreadsheets.google.com/feeds/list/1zj3x6lPobsR6rxsqQAl3NpTuULa8wfeIfHyZxdzh2kk/od6/public/values?alt=json";

//.ajax returns a Promise and a Promise is reolved using .then()
$.ajax({
  url: sheetAsJSON,
})
  .then((data) => {
    const projects = data.feed.entry.map((project) => {
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        description: project.gsx$description.$t,
        link: project.gsx$link.$t,
      };
    }); //map ends
    app(projects);
  })

  //.catch is meant to handle errors
  .catch((err) => console.log("err", err));

//data.feed.entry is the array that contains our objects...

function app(projectsArr) {
  projectsArr.forEach((project) => {
    let $projectCard = $(`<div style= "background:url('${project.image}');background-size: cover; background-position: center;border: 3px solid white;height:300px;width:300px; margin: 15px; margin-bottom: 300px; position:relative;">
                                <a style = "text-decoration: none; color: rgb(246,246,246);" href = "${project.link}"target ="_blank">
                                <div class = "infoHover">
                                    <div class = "headerHover">${project.title}</div>
                                    <div class = "hoverDescription">${project.description}</div>
                                </div>
                                </a>                                                        
                            </div>
                            `);
    $("#projectsSection").append($projectCard);
  });
}

// I learned the method below from Madaline's Mini Lecture
// create a variable for the element to clink
//create a variable for the class to
//create a function which on clicking hamhurger, navigation two is
//displayed in block form

const $hamburgerbutton = $(".hamburger");
const $navigation2 = $(".navigation2");
$hamburgerbutton.on("click", () => {
  $navigation2.toggleClass("show");
});

//Below allows the use to click an X to close the mobile nav without making a selection

const $closeNav2 = $("#closeNav2");
const $navigationcloseX2 = $(".navigation2");
$closeNav2.on("click", () => {
  $navigation2.toggleClass("show");
});

//Below makes sure that the mobile nav closes once a <li> is selected/clicked.

const $closeNavGeneral = $(".closeOnClick");
const $navigationcloseGeneral2 = $(".navigation2");
$closeNavGeneral.on("click", () => {
  $navigation2.toggleClass("show");
});
