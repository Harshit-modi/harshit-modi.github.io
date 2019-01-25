var refineString = function (mystring) {
    return mystring.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

// set up text to print, each item in array is new line
var aText = new Array(
    "<HelloWorld>",
    "I'm Harshit Modi",
    "def self:", 
    "Current graduate student at the University of Texas at Arlington majoring in Computer Science",
    "Technophile in AI domain. Problem Solver. Competitive coder. Passionate about Linux and Open-source. Love photoshopping. ",
    "</HelloWorld>"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        switch (iRow) {
            case 1:
                sContents += '<div class="indent1">';
                sContents += refineString(aText[iRow++]) + '<br />'; 
                sContents += '</div>';
                break;

            case 2:
                sContents += '<div class="indent1">';
                sContents += refineString(aText[iRow++]) + '<br />';   
                sContents += '</div>';
                break;

            case 3:
            case 4:
                sContents += '<div class="indent1">';
                sContents += '<ul class="desc-wrap">';
                sContents += '<li class="indent2 desc">' + refineString(aText[iRow++]) + '</li>';
                sContents += '</ul>';
                sContents += '</div>';
                break;

            default:
                sContents += refineString(aText[iRow++]) + '<br />';
                break;
        }
    }

    switch (iIndex) {
        case 1:
            $(destination).html(sContents + '<div class="indent1">' + refineString(aText[iIndex].substring(0, iTextPos)) + "<span class='caret'></div>");       
            break;

        case 2:
            $(destination).html(sContents + '<div class="indent1">' + refineString(aText[iIndex].substring(0, iTextPos)) + "<span class='caret'></div>");       
            break;

        case 3:
        case 4:
            $(destination).html(sContents + '<div class="indent1"><ul class="desc-wrap"><li class="indent2 desc">' + refineString(aText[iIndex].substring(0, iTextPos)) + "<span class='caret'></li></ul></div>");       
            break;
    
        default:
            $(destination).html(sContents + refineString(aText[iIndex].substring(0, iTextPos)) + "<span class='caret'>");
            break;
    }

    
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {

        switch (iIndex) {
            case 2:
            case 3:
            case 4:
                setTimeout("typewriter()", 50);
                break;
        
            default:
                setTimeout("typewriter()", iSpeed);
                break;
        }
    }
}


typewriter();