class ColorPallet {
    constructor(mainColor,altColor,highlightColor,fillerColor){
        this.mainColor = mainColor;
        this.altColor = altColor;
        this.highlightColor = highlightColor;
        this.fillerColor = fillerColor;
    }
}

function changeTheme(colorPallet){
    // document.querySelectorAll(".color-main").forEach(item => { item.style.color = colorPallet.mainColor });
    $(".color-main").css("color", colorPallet.mainColor);
    $(".color-alt").css("color", colorPallet.altColor);
    $(".color-highlight").css("color", colorPallet.highlightColor);
    $(".color-filler").css("color", colorPallet.fillerColor);

    $(".bg-color-main").css("background-color", colorPallet.mainColor);
    $(".bg-color-alt").css("background-color", colorPallet.altColor);
    $(".bg-color-highlight").css("background-color", colorPallet.highlightColor);
    $(".bg-color-filler").css("background-color", colorPallet.fillerColor);
}

// SCRIPT =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var originalColorPallet = new ColorPallet("#222831","#393E46","#FFD369","#EEEEEE");
var alt1ColorPallet     = new ColorPallet("#06283D","#256D85","#47B5FF","#DFF6FF");
var alt2ColorPallet     = new ColorPallet("#2D2424","#5C3D2E","#B85C38","#E0C097");
var alt3ColorPallet     = new ColorPallet("#F0E3CA","#FF8303","#A35709","#1B1A17");

var pallets = [originalColorPallet,alt1ColorPallet,alt2ColorPallet,alt3ColorPallet];

changeTheme(pallets[Math.floor(Math.random() * pallets.length)]);