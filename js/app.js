//General Items Creation
var generalItem=[
    {
        "categories":"FIND COLLEGE",
        "icons":"fa-university",
    },
    {
        "categories":"EXPLORE EXAMS",
        "icons":"fa-book",
    },
    {
        "categories":"GET LATEST NEWS",
        "icons":"fa-newspaper",
    },
    {
        "categories":"TOP REVIEWS",
        "icons":"fa-comments",
    },
    {
        "categories":"TOP COURSES",
        "icons":"fa-award",
    },
    {
        "categories":"GET ADMISSION",
        "icons":"fa-graduation-cap",
    },
    {
        "categories":"RANK PREDICTOR",
        "icons":"fa-users",
    },
    {
        "categories":"CUT OFF",
        "icons":"fa-bars",
    },
    {
        "categories":"WRITE A REVIEW",
        "icons":"fa-pencil-alt",
    },
]

var cardicon = "card-icon fas fa-2x";

var sideItems = document.getElementById("side-items");

for (let i = 0; i < generalItem.length; i++) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const icon = document.createElement("li");
  const iconClass = document.createElement("i");
  const category = document.createElement("li");
  iconClass.classList += cardicon + " " + generalItem[i].icons;
  category.appendChild(document.createTextNode(generalItem[i].categories));
  icon.appendChild(iconClass);
  ul.appendChild(icon);
  ul.appendChild(category);
  div.appendChild(ul);
  sideItems.firstElementChild.appendChild(div);
}

//College Items Creation
var collegeDetails=[
    {
        "clgType":"MANAGEMENT",
        "clgNumber":"5720",
        "examNumber":"81",
        "clgIcon":"fa-chart-pie",
    },
    {
        "clgType":"ENGINEERING",
        "clgNumber":"4502",
        "examNumber":"130",
        "clgIcon":"fa-cogs",
    },
    {
        "clgType":"MEDICAL",
        "clgNumber":"1435",
        "examNumber":"27",
        "clgIcon":"fa-briefcase-medical",
    },
    {
        "clgType":"AGRICULTURE",
        "clgNumber":"629",
        "examNumber":"16",
        "clgIcon":"fa-cannabis",
    },
    {
        "clgType":"ARCHITECTURE",
        "clgNumber":"479",
        "examNumber":"28",
        "clgIcon":"fa-torii-gate",
    },
    {
        "clgType":"ARTS",
        "clgNumber":"4045",
        "examNumber":"38",
        "clgIcon":"fa-brush",
    },
    {
        "clgType":"AVIATION",
        "clgNumber":"124",
        "examNumber":"0",
        "clgIcon":"fa-plane",
    },
    {
        "clgType":"COMMERCE",
        "clgNumber":"3684",
        "examNumber":"32",
        "clgIcon":"fa-file-invoice-dollar",
    },
    {
        "clgType":"DENTAL",
        "clgNumber":"381",
        "examNumber":"15",
        "clgIcon":"fa-tooth",
    },
    {
        "clgType":"DESIGN",
        "clgNumber":"643",
        "examNumber":"21",
        "clgIcon":"fa-crop",
    },
    {
        "clgType":"EDUCATION",
        "clgNumber":"2672",
        "examNumber":"35",
        "clgIcon":"fa-desktop",
    },
    {
        "clgType":"LAW",
        "clgNumber":"950",
        "examNumber":"50",
        "clgIcon":"fa-gavel",
    },
    {
        "clgType":"PARAMEDICAL",
        "clgNumber":"929",
        "examNumber":"12",
        "clgIcon":"fa-ambulance",
    },
    {
        "clgType":"PHARMACY",
        "clgNumber":"1049",
        "examNumber":"45",
        "clgIcon":"fa-mortar-pestle",
    },
    {
        "clgType":"SCIENCE",
        "clgNumber":"4660",
        "examNumber":"72",
        "clgIcon":"fa-flask",
    },
    {
        "clgType":"COMPUTER",
        "clgNumber":"3764",
        "examNumber":"52",
        "clgIcon":"fa-desktop",
    },
    {
        "clgType":"MASS COMMS",
        "clgNumber":"1479",
        "examNumber":"5",
        "clgIcon":"fa-camera",
    },
    {
        "clgType":"VETERINARY",
        "clgNumber":"93",
        "examNumber":"10",
        "clgIcon":"fa-paw",
    },
    {
        "clgType":"HOTEL MANAGEMENT",
        "clgNumber":"684",
        "examNumber":"11",
        "clgIcon":"fa-utensils",
    },
    {
        "clgType":"VOCATIONAL COURSE",
        "clgNumber":"613",
        "examNumber":"5",
        "clgIcon":"fa-bookmark",
    },

]


var clgDetails = document.querySelector("#clg-items");

for (let i = 0; i < collegeDetails.length; i++) {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const icon = document.createElement("li");
  const iconClass = document.createElement("i");
  const clgName = document.createElement("li");
  const clgNum = document.createElement("li");
  const examNum = document.createElement("li");
  const bold = document.createElement("b");
  clgName.appendChild(bold);
  clgNum.classList.add("college-number");
  examNum.classList.add("exam-number");
  clgNum.appendChild(document.createTextNode(collegeDetails[i].clgNumber + " " + "COLLEGES"));
  examNum.appendChild(document.createTextNode(collegeDetails[i].examNumber + " " + "EXAMS"));
  bold.appendChild(document.createTextNode(collegeDetails[i].clgType));
  iconClass.classList += cardicon + " " + collegeDetails[i].clgIcon;

  icon.appendChild(iconClass);
  ul.appendChild(icon);
  ul.appendChild(clgName);
  ul.appendChild(clgNum);
  ul.appendChild(examNum);
  div.appendChild(ul);
  clgDetails.firstElementChild.appendChild(div);
}


// Show Exam Details
var examBtn = document.getElementById("btn-exam");
examBtn.addEventListener("click", hideExamNumber);

function hideExamNumber() {
  var exam = document.querySelectorAll(".exam-number");
  var college = document.querySelectorAll(".college-number");
  examBtn.classList.add("active");
  collegeBtn.classList.remove("active");
  for (let i = 0; i < exam.length; i++) {
    exam[i].style.display = "block";
    college[i].style.display = "none";
  }
}

// Show College Details
var collegeBtn = document.getElementById("btn-college");
collegeBtn.addEventListener("click", hideCollegeNumber);

function hideCollegeNumber() {
  var exam = document.querySelectorAll(".exam-number");
  var college = document.querySelectorAll(".college-number");
  examBtn.classList.remove("active");
  collegeBtn.classList.add("active");

  for (let i = 0; i < college.length; i++) {
    college[i].style.display = "block";
    exam[i].style.display = "none";
  }
}

// Show Side Menu
var openmenu = document
  .getElementById("menubar")
  .addEventListener("click", openNav);
function openNav() {
  document.getElementById("sidemenu").style.width = "300px";
}

// Close Side Menu
var closemenu = document
  .getElementById("close-menu")
  .addEventListener("click", closeNav);
function closeNav() {
  document.getElementById("sidemenu").style.width = "0px";
}

// Show Login Modal
var loginPage = document
  .getElementById("userlogin")
  .addEventListener("click", openLogin);
function openLogin() {
  document.getElementById("user-cred").style.display = "block";
}

// Close Login Modal
var closelogin = document
  .getElementById("closeoverlay")
  .addEventListener("click", closeLogin);
function closeLogin() {
  document.getElementById("user-cred").style.display = "none";
}

// Scrollable Hero Colleges

var heroColleges = [
  {
    clgImg:
      "https://www.edufever.com/wp-content/uploads/2018/06/Janki-Devi-Memorial-College-Delhi.jpg",
    clgName: "Arch College of Design and Business",
    city: "Jaipur, Rajasthan",
    course: "UG Certificate in...",
  },
  {
    clgImg:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80",
    clgName: "Vatsu Kala Academy",
    city: "New Delhi, Delhi NCR",
    course: "B.Arch",
  },
  {
    clgImg:
      "https://cdn.britannica.com/03/130603-050-37F7F535/Alliman-Administration-Center-Hesston-College-Mennonite-college.jpg",
    clgName: "Bharitya Vidya Peeth",
    city: "New Delhi, Delhi NCR",
    course: "B.Tech",
  },
  {
    clgImg:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&w=1000&q=80",
    clgName: "International Law College",
    city: "Sohna, Bangalore",
    course: "Law",
  },
  {
    clgImg:
      "https://media.istockphoto.com/photos/college-students-on-university-campus-picture-id1142918319?k=20&m=1142918319&s=612x612&w=0&h=bKSmvYR1OI-h-StsjDI-E4SosUuO5jD6oAKqzLlxsOc=",
    clgName: "Aviaition Institute",
    city: "Vadodra, Gujarat",
    course: "Avaition",
  },
];
var link = "VIEW ALL FEES & COURSES";

const collegeContainer = document.querySelector(".college-container");

for (let i = 0; i < heroColleges.length; i++) {
  const singleItem = document.createElement("div");
  const upperDetail = document.createElement("div");
  const image = document.createElement("img");
  const clgInfo = document.createElement("ul");
  const clgName = document.createElement("li");
  const clgCity = document.createElement("li");
  const clgCourse = document.createElement("ul");
  const courseName = document.createElement("li");
  const navLink = document.createElement("li");
  const allCourse = document.createElement("a");

  allCourse.appendChild(document.createTextNode(link));
  navLink.appendChild(allCourse);
  courseName.appendChild(document.createTextNode(heroColleges[i].course));
  clgCourse.classList.add("clg-course");
  clgCourse.appendChild(courseName);
  clgCourse.appendChild(navLink);

  clgInfo.classList.add("clg-info");
  clgName.appendChild(document.createTextNode(heroColleges[i].clgName));
  clgCity.appendChild(document.createTextNode(heroColleges[i].city));
  clgInfo.appendChild(clgName);
  clgInfo.appendChild(clgCity);

  image.src = heroColleges[i].clgImg;

  upperDetail.appendChild(image);
  upperDetail.appendChild(clgInfo);

  singleItem.appendChild(upperDetail);
  singleItem.appendChild(clgCourse);

  collegeContainer.appendChild(singleItem);
}
