class ColorTheme {
    constructor(themeName, mainColor, altColor, highlightColor, fillerColor){
        this.themeName = themeName;
        this.mainColor = mainColor;ColorTheme
        this.altColor = altColor;
        this.highlightColor = highlightColor;
        this.fillerColor = fillerColor;
    }
}

function changeTheme(colorTheme){
    console.log(colorTheme);
    // document.querySelectorAll(".color-main").forEach(item => { item.style.color = colorTheme.mainColor });
    $(".color-main").css("color", colorTheme.mainColor);
    $(".color-alt").css("color", colorTheme.altColor);
    $(".color-highlight").css("color", colorTheme.highlightColor);
    $(".color-filler").css("color", colorTheme.fillerColor);

    $(".bg-color-main").css("background-color", colorTheme.mainColor);
    $(".bg-color-alt").css("background-color", colorTheme.altColor);
    $(".bg-color-highlight").css("background-color", colorTheme.highlightColor);
    $(".bg-color-filler").css("background-color", colorTheme.fillerColor);
}

function appendThemeElementButton(colorTheme){
    $(".configuration-theme").append("<button class='btn "+colorTheme.themeName+" "+colorTheme.themeName+"-color-2'><div class='square "+colorTheme.themeName+"-color-1'></div> <div class='square "+colorTheme.themeName+"-color-3'></div> <div class='square "+colorTheme.themeName+"-color-4'></div></button>&nbsp;");        
    $("."+colorTheme.themeName+" ."+colorTheme.themeName+"-color-1").css("background-color", colorTheme.mainColor);
    $("."+colorTheme.themeName+"."+colorTheme.themeName+"-color-2").css("background-color", colorTheme.altColor);
    $("."+colorTheme.themeName+" ."+colorTheme.themeName+"-color-3").css("background-color", colorTheme.highlightColor);
    $("."+colorTheme.themeName+" ."+colorTheme.themeName+"-color-4").css("background-color", colorTheme.fillerColor);
    $(".btn."+colorTheme.themeName).click(function () { changeTheme(colorTheme) });
}

// SCRIPT =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var theme_original  = new ColorTheme("theme-original","#222831","#393E46","#FFD369","#EEEEEE");
var theme_cold      = new ColorTheme("theme-cold","#06283D","#256D85","#47B5FF","#DFF6FF");
var theme_coffee    = new ColorTheme("theme-coffee","#2D2424","#5C3D2E","#B85C38","#E0C097");
var theme_unknown   = new ColorTheme("theme-unknown","#F0E3CA","#FF8303","#A35709","#1B1A17");

var pallets = [theme_original,theme_cold,theme_coffee,theme_unknown];

pallets.forEach(pallet => appendThemeElementButton(pallet));

changeTheme(pallets[0]);//Start with the original theme