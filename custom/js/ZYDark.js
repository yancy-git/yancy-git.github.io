"use strict";var OSTheme=window.matchMedia("(prefers-color-scheme: dark)"),ThemeChange=(OSTheme.addListener(function(e){"Moss"===window.localStorage.getItem("ZYI_Theme_Mode")&&ThemeChange("Moss")}),function(e){"light"===e||"Moss"===e&&!OSTheme.matches?(document.querySelector("html").id="ZYLight",document.querySelector("#start > aside > footer > div > a:nth-child(6)").style.filter="grayscale(0%)",document.querySelector("#start > aside > footer > div > a:nth-child(5)").style.filter="grayscale(100%)"):(document.querySelector("html").id="ZYDark",document.querySelector("#start > aside > footer > div > a:nth-child(5)").style.filter="grayscale(0%)",document.querySelector("#start > aside > footer > div > a:nth-child(6)").style.filter="grayscale(100%)"),document.querySelector("#start > aside > footer > div > a:nth-child(7)").style.filter="Moss"===e?"grayscale(0%)":"grayscale(100%)",window.localStorage.setItem("ZYI_Theme_Mode",e)});switch(window.localStorage.getItem("ZYI_Theme_Mode")){case"light":ThemeChange("light");break;case"dark":ThemeChange("dark");break;default:ThemeChange("Moss")}document.querySelector("#start > aside > footer > div > a:nth-child(5)").onclick=function(){ThemeChange("dark")},document.querySelector("#start > aside > footer > div > a:nth-child(6)").onclick=function(){ThemeChange("light")},document.querySelector("#start > aside > footer > div > a:nth-child(7)").onclick=function(){ThemeChange("Moss")};