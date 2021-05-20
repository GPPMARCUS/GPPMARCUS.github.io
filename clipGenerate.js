var imported = document.createElement('script');
imported.src = './introGenerate.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './constant.js';
document.head.appendChild(imported);

window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('clipButton').addEventListener('click', generateClipFunction);

    function generateClipFunction(event){

        const lenzen1 = all_lenzen;
        let lens1 = event.target.gen_lens1;
        if (!lens1) {
            lens1 = lenzen1[Math.floor(Math.random()*lenzen1.length)];
        }

        var lenzen2 = all_lenzen;
        lenzen2 = lenzen2.filter((n) => {return n != lens1});
        let lens2 = event.target.gen_lens2;
        if (!lens2) {
            lens2 = lenzen2[Math.floor(Math.random()*lenzen2.length)];
        }

        var lenzen3 = all_lenzen;
        lenzen3 = lenzen3.filter((n) => {return n != lens1});
        lenzen3 = lenzen3.filter((n) => {return n != lens2});
        let lens3 = event.target.gen_lens3;
        if (!lens3) {
            lens3 = lenzen3[Math.floor(Math.random()*lenzen3.length)];
        }

        const effecten1 = all_effecten;
        let effect1 = event.target.gen_effect1;
        if (!effect1) {
            effect1 = effecten1[Math.floor(Math.random()*effecten1.length)];
        }

        var effecten2 = all_effecten;
        effecten2 = effecten2.filter((n) => {return n != effect1});
        let effect2 = event.target.gen_effect2;
        if (!effect2) {
            effect2 = effecten2[Math.floor(Math.random()*effecten2.length)];
        }

        var effecten3 = all_effecten;
        effecten3 = effecten3.filter((n) => {return n != effect1});
        effecten3 = effecten3.filter((n) => {return n != effect2});
        let effect3 = event.target.gen_effect3;
        if (!effect3) {
            effect3 = effecten3[Math.floor(Math.random()*effecten3.length)];
        }

        event.target.gen_lens1 = lens1;
        event.target.gen_lens2 = lens2;
        event.target.gen_lens3 = lens3;
        event.target.gen_effect1 = effect1;
        event.target.gen_effect2 = effect2;
        event.target.gen_effect3 = effect3;


        if(button == 4){
        document.getElementById('inhoud').innerHTML = "<table id=clipTable><tr><th id=tabletopth></th><th id=tabletoptdclip>Locatie</th></tr>"
        + "<tr><th>Intro</th><td>" + clip_loc1 + "</td></tr>"
        + "<tr><th>Scene 2</th><td>" + clip_loc2 + "</td></tr>"
        + "<tr><th>Scene 3</th><td>" + clip_loc3 + "</td></tr>"
        + "<tr><th id=tablebottomth>Outro</th><td id=tablebottomtd>" + clip_loc4 + "</td></tr></table>" 
        + "<br><br>"
        + "<table id=clipTable><tr><th id=tabletopth>Lenzen</th><td id=tabletoptd>" + lens1 + ", " + lens2 + ", " + lens3 + "</th></tr>"
        + "<tr><th id=tablebottomth>Effecten</th><td id=tablebottomtd>" + effect1 + ", " + effect2 + ", " + effect3 + "</tr></table>"
        + "<br>"
        + "<button onclick=window.location.reload()>Refresh</button></a>";
        }
        else{
            document.getElementById('inhoud').innerHTML = "<h1>Genereer eerst alle scenes om hier een samenvatting te zien</h1>";
        }
    }
});