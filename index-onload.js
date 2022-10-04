class ColorPallet {
    constructor(mainColor,altColor,highlightColor,fillerColor){
        this.mainColor = mainColor;
        this.altColor = altColor;
        this.highlightColor = highlightColor;
        this.fillerColor = fillerColor;
    }
}

function changeTheme(colorPallet){
    document.querySelectorAll(".color-main").forEach(item => { item.style.color = colorPallet.mainColor });
    document.querySelectorAll(".color-alt").forEach(item => { item.style.color = colorPallet.altColor });
    document.querySelectorAll(".color-highlight").forEach(item => { item.style.color = colorPallet.highlightColor });
    document.querySelectorAll(".color-filler").forEach(item => { item.style.color = colorPallet.fillerColor });

    document.querySelectorAll(".bg-color-main").forEach(item => { item.style.backgroundColor = colorPallet.mainColor });
    document.querySelectorAll(".bg-color-alt").forEach(item => { item.style.backgroundColor = colorPallet.altColor });
    document.querySelectorAll(".bg-color-highlight").forEach(item => { item.style.backgroundColor = colorPallet.highlightColor });
    document.querySelectorAll(".bg-color-filler").forEach(item => { item.style.backgroundColor = colorPallet.fillerColor });
}

// SCRIPT =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var originalColorPallet = new ColorPallet("#222831","#393E46","#FFD369","#EEEEEE");
var alt1ColorPallet = new ColorPallet("#06283D","#256D85","#47B5FF","#DFF6FF");
var alt2ColorPallet = new ColorPallet("#2D2424","#5C3D2E","#B85C38","#E0C097");
var alt3ColorPallet = new ColorPallet("#F0E3CA","#FF8303","#A35709","#1B1A17");

var pallets = [originalColorPallet,originalColorPallet,alt1ColorPallet,alt2ColorPallet,alt3ColorPallet];

changeTheme(pallets[Math.floor(Math.random() * pallets.length)]);