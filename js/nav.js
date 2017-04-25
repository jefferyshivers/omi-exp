

var menuOpenClose = 0;
var aboutOpenClose = 0;
var codeOpenClose = 0;
var docsOpenClose = 0;

function toggleNav() {
  if (menuOpenClose === 0) {
    // open the menu
    document.getElementById("leftnav").style.width = "calc(50% - 1px)";
    document.getElementById("rightnav").style.width = "calc(50% - 1px)";
    menuOpenClose = 1;
  } else {
    // close the menu
    document.getElementById("leftnav").style.width = "0";
    document.getElementById("rightnav").style.width = "0";
    menuOpenClose = 0;
    document.getElementById("bottom-about").style.height = "0";
    document.getElementById("bottom-code").style.height = "0";
    document.getElementById("bottom-docs").style.height = "0";
    aboutOpenClose = 0;
    codeOpenClose = 0;
    docsOpenClose = 0;
  }
}





function toggleAbout() {
  if (aboutOpenClose === 0) {
    document.getElementById("bottom-about").style.height = "250px";
    document.getElementById("bottom-code").style.height = "0";
    document.getElementById("bottom-docs").style.height = "0";
    aboutOpenClose = 1;
    codeOpenClose = 0;
    docsOpenClose = 0;
  } else {
    document.getElementById("bottom-about").style.height = "0";
    aboutOpenClose = 0;
  }
}

function toggleCode() {
  if (codeOpenClose === 0) {
    document.getElementById("bottom-code").style.height = "250px";
    document.getElementById("bottom-about").style.height = "0";
    document.getElementById("bottom-docs").style.height = "0";
    codeOpenClose = 1;
    aboutOpenClose = 0;
    docsOpenClose = 0;
  } else {
    document.getElementById("bottom-code").style.height = "0";
    codeOpenClose = 0;
  }
}

function toggleDocs() {
  if (docsOpenClose === 0) {
    document.getElementById("bottom-docs").style.height = "250px";
    document.getElementById("bottom-about").style.height = "0";
    document.getElementById("bottom-code").style.height = "0";
    docsOpenClose = 1;
    codeOpenClose = 0;
    aboutOpenClose = 0;
  } else {
    document.getElementById("bottom-docs").style.height = "0";
    docsOpenClose = 0;
  }
}
