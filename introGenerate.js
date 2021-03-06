var imported = document.createElement('script');
imported.src = './number.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './constant.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './empty.js';
document.head.appendChild(imported);


window.addEventListener('DOMContentLoaded', _e => {
  
    document.getElementById('intro').addEventListener('click', generateIntroFunction);
    document.getElementById('scene2').addEventListener('click', generateIntroFunction);
    document.getElementById('scene3').addEventListener('click', generateIntroFunction);
    document.getElementById('outro').addEventListener('click', generateIntroFunction);

    document.getElementById('intro').addEventListener('click', generateClip1Function);
    document.getElementById('scene2').addEventListener('click', generateClip2Function);
    document.getElementById('scene3').addEventListener('click', generateClip3Function);
    document.getElementById('outro').addEventListener('click', generateClip4Function);

    function generateClip1Function(event){
        loc = event.target.gen_locations;
        let a = event.target.gen_a;
        if(!a){
            clip_loc1 += loc;
            button += 1;
            a = "true";
        }
        event.target.gen_a = a;
        if (button == 4){
            document.getElementById('clipButton').innerHTML = "<button id=clip>Clip</button>";
        }
    }

    function generateClip2Function(event){
        loc = event.target.gen_locations;
        let a = event.target.gen_a;
        if(!a){
            clip_loc2 += loc;
            button += 1;
            a = "true";
        }
        event.target.gen_a = a;
        if (button == 4){
            document.getElementById('clipButton').innerHTML = "<button id=clip>Clip</button>";
        }
    }

    function generateClip3Function(event){
        loc = event.target.gen_locations;
        let a = event.target.gen_a;
        if(!a){
            clip_loc3 += loc;
            button += 1;
            a = "true";
        }
        event.target.gen_a = a;
        if (button == 4){
            document.getElementById('clipButton').innerHTML = "<button id=clip>Clip</button>";
        }
    }

    function generateClip4Function(event){
        loc = event.target.gen_locations;
        let a = event.target.gen_a;
        if(!a){
            clip_loc4 += loc;;
            button += 1;
            a = "true";
        }
        event.target.gen_a = a;
        if (button == 4){
            document.getElementById('clipButton').innerHTML = "<button id=clip>Clip</button>";
        }
    }
  
    function generateIntroFunction(event) {   
///---Vaste waardes scenes
        const locs = all_locs;
        let loc = event.target.gen_locations;
        if (!loc) {
            loc = locs[Math.floor(Math.random() * locs.length)];
        }  
        
        const acts = all_acts;
        let act = event.target.gen_act;
        if (!act) {
            act = acts[Math.floor(Math.random() * acts.length)]
            }
            
        const mensen = all_mensen;
        let mens = event.target.gen_mens;
        if (!mens) {
            mens = mensen[Math.floor(Math.random()*mensen.length)];
            }

        const kleurmodes = all_kleurmodes;
        let kleurmode = event.target.gen_kleurmode;
        if (!kleurmode) {
            kleurmode = kleurmodes[Math.floor(Math.random()*kleurmodes.length)];
        }

        if (kleurmode == 'Black & White'){
            var all_kleuren1 = all_kleurenZW;
        }
        else {
            var all_kleuren1 = all_kleuren;
        }

        const kleuren = all_kleuren1;
        let kleur = event.target.gen_kleur;
        if (!kleur) {
                kleur = kleuren[Math.floor(Math.random()*kleuren.length)];
        }
        
        const asps = all_asps;
        let asp = event.target.gen_asp;
        if (!asp) {
            asp = asps[Math.floor(Math.random()*asps.length)];
        }

        const sauzen = all_sauzen;
        let saus = event.target.gen_saus;
        if (!saus) {
            saus = sauzen[Math.floor(Math.random()*sauzen.length)];
        }

///---Take 01        

        const kads1 = all_kads;
        let kad1 = event.target.gen_kad1;
        if (!kad1) {
            kad1 = kads1[Math.floor(Math.random()*kads1.length)];
        }

        const shots1 = all_shots;
        let shot1 = event.target.gen_shot1;
        if (!shot1) {
            shot1 = shots1[Math.floor(Math.random()*shots1.length)];
        }

        const grips1 = all_grips;
        let grip1 = event.target.gen_grip1;
        if (!grip1){
            grip1 = grips1[Math.floor(Math.random()*grips1.length)];
        }

        const perfs1 = all_perfs;
        let perf1 = event.target.gen_perf1;
        if (!perf1) {
            perf1 = perfs1[Math.floor(Math.random()*perfs1.length)];
        }

///---Take 2

        const kads2 = all_kads;
        let kad2 = event.target.gen_kad2;
        if (!kad2) {
            kad2 = kads2[Math.floor(Math.random()*kads2.length)];
        }

        const shots2 = all_shots;
        let shot2 = event.target.gen_shot2;
        if (!shot2) {
            shot2 = shots2[Math.floor(Math.random()*shots2.length)];
        }

        const grips2 = all_grips;
        let grip2 = event.target.gen_grip2;
        if (!grip2){
            grip2 = grips2[Math.floor(Math.random()*grips2.length)];
        }

        const perfs2 = all_perfs;
        let perf2 = event.target.gen_perf2;
        if (!perf2) {
            perf2 = perfs2[Math.floor(Math.random()*perfs2.length)];
        }

///---Take 3

        const kads3 = all_kads;
        let kad3 = event.target.gen_kad3;
        if (!kad3) {
            kad3 = kads3[Math.floor(Math.random()*kads3.length)];
        }

        const shots3 = all_shots;
        let shot3 = event.target.gen_shot3;
        if (!shot3) {
            shot3 = shots3[Math.floor(Math.random()*shots3.length)];
        }

        const grips3 = all_grips;
        let grip3 = event.target.gen_grip3;
        if (!grip3){
            grip3 = grips3[Math.floor(Math.random()*grips3.length)];
        }

        const perfs3 = all_perfs;
        let perf3 = event.target.gen_perf3;
        if (!perf3) {
            perf3 = perfs3[Math.floor(Math.random()*perfs3.length)];
        }

///---Take 4

        const kads4 = all_kads;
        let kad4 = event.target.gen_kad4;
        if (!kad4) {
            kad4 = kads4[Math.floor(Math.random()*kads4.length)];
        }

        const shots4 = all_shots;
        let shot4 = event.target.gen_shot4;
        if (!shot4) {
            shot4 = shots4[Math.floor(Math.random()*shots4.length)];
        }

        const grips4 = all_grips;
        let grip4 = event.target.gen_grip4;
        if (!grip4){
            grip4 = grips4[Math.floor(Math.random()*grips4.length)];
        }

        const perfs4 = all_perfs;
        let perf4 = event.target.gen_perf4;
        if (!perf4) {
            perf4 = perfs4[Math.floor(Math.random()*perfs4.length)];
        }


            
        event.target.gen_locations = loc;
        event.target.gen_act = act;
        event.target.gen_mens = mens;
        event.target.gen_kleurmode = kleurmode;
        event.target.gen_kleur = kleur;
        event.target.gen_asp = asp;
        event.target.gen_saus = saus;

        event.target.gen_kad1 = kad1;
        event.target.gen_shot1 = shot1;
        event.target.gen_grip1 = grip1;
        event.target.gen_perf1 = perf1;

        event.target.gen_kad2 = kad2;
        event.target.gen_shot2 = shot2;
        event.target.gen_grip2 = grip2;
        event.target.gen_perf2 = perf2;

        event.target.gen_kad3 = kad3;
        event.target.gen_shot3 = shot3;
        event.target.gen_grip3 = grip3;
        event.target.gen_perf3 = perf3;

        event.target.gen_kad4 = kad4;
        event.target.gen_shot4 = shot4;
        event.target.gen_grip4 = grip4;
        event.target.gen_perf4 = perf4;

      
      document.getElementById('inhoud').innerHTML = 
      "<table id=sceneInhoud><tr><th id=tabletopth>Setting</th><td id=tabletoptd>" + loc + "</td></tr>" 
      + "<tr><th>Prompt</th><td>" + act + "</td></tr>"
      + "<tr><th>People</th><td>" + mens + "</td></tr>"
      + "<tr><th>Color</th><td>" + kleurmode + " " + kleur + "</td></tr>"
      + "<tr><th>Aspect ratio</th><td>" + asp + "</td></tr>"
      + "<tr><th id=tablebottomth>Extra</th><td id=tablebottomtd>" + saus + "</td></tr></table>" 
      + "<br><br>"
      + "<table><tr><th id=tabletopth></th><th id=tableTake>Performance 01</th><th id=tableTake>Performance 02</th><th id=tableTake>Performance 03</th><th id=tableTake2>Performance 04</th></tr>"
      + "<tr><th>Frame</th><td>" + kad1 + "</td><td>" + kad2 + "</td><td>" + kad3 + "</td><td>" + kad4 + "</td></tr>"
      + "<tr><th>Shot type</th><td>" + shot1 + "</td><td>" + shot2 + "</td><td>" + shot3 + "</td><td>" + shot4 + "</td></tr>"
      + "<tr><th id=tablebottomth>Movement</th><td>" + grip1 + "</td><td>" + grip2 + "</td><td>" + grip3 + "</td><td>" + grip4 + "</td></tr></table>"
      + "<br>"
      + "<a href=Clip_generator.html><button>Refresh</button></a>";
    }
  
  });