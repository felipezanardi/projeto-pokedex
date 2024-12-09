const pokemonImagens = {
    "-": "../imagens/Icones-card/Padrao.png",
    "001": "../imagens/Icones-card/001-Bulba.png",
    "002": "../imagens/Icones-card/002-Ivysaur.png",
    "003": "../imagens/Icones-card/003-Venusaur.png",
    "004": "../imagens/Icones-card/004-Charmander.png",
    "005": "../imagens/Icones-card/005-Charmeleon.png",
    "006": "../imagens/Icones-card/006-Charizard.png",
    "007": "../imagens/Icones-card/007-Squirtle.png",
    "008": "../imagens/Icones-card/008-Wartortle.png",
    "009": "../imagens/Icones-card/009-Blastoise.png",
    "010": "../imagens/Icones-card/010-Caterpie.png",
    "011": "../imagens/Icones-card/011-Metapod.png",
    "012": "../imagens/Icones-card/012-Butterfree.png",
    "013": "../imagens/Icones-card/013-Weedle.png",
    "014": "../imagens/Icones-card/014-Kakuna.png",
    "015": "../imagens/Icones-card/015-Beedrill.png",
    "016": "../imagens/Icones-card/016-Pidgey.png",
    "017": "../imagens/Icones-card/017-Pidgeotto.png",
    "018": "../imagens/Icones-card/018-Pidgeot.png",
    "019": "../imagens/Icones-card/019-Rattata.png",
    "020": "../imagens/Icones-card/020-Raticate.png",
    "021": "../imagens/Icones-card/021-Spearow.png",
    "022": "../imagens/Icones-card/022-Fearow.png",
    "023": "../imagens/Icones-card/023-Ekans.png",
    "024": "../imagens/Icones-card/024-Arbok.png",
    "025": "../imagens/Icones-card/025-Pikachu.png",
    "026": "../imagens/Icones-card/026-Raichu.png",
    "027": "../imagens/Icones-card/027-Sandshrew.png",
    "028": "../imagens/Icones-card/028-Sandslash.png",
    "029": "../imagens/Icones-card/029-NidoranF.png",
    "030": "../imagens/Icones-card/030-Nidorina.png",
    "031": "../imagens/Icones-card/031-Nidoqueen.png",
    "032": "../imagens/Icones-card/032-NidoranM.png",
    "033": "../imagens/Icones-card/033-Nidorino.png",
    "034": "../imagens/Icones-card/034-Nidoking.png",
    "035": "../imagens/Icones-card/035-Clefairy.png",
    "036": "../imagens/Icones-card/036-Clefable.png",
    "037": "../imagens/Icones-card/037-Vulpix.png",
    "038": "../imagens/Icones-card/038-Ninetales.png",
    "039": "../imagens/Icones-card/039-Jigglypuff.png",
    "040": "../imagens/Icones-card/040-Wigglytuff.png",
    "041": "../imagens/Icones-card/041-Zubat.png",
    "042": "../imagens/Icones-card/042-Golbat.png",
    "043": "../imagens/Icones-card/043-Oddish.png",
    "044": "../imagens/Icones-card/044-Gloom.png",
    "045": "../imagens/Icones-card/045-Vileplume.png",
    "046": "../imagens/Icones-card/046-Paras.png",
    "047": "../imagens/Icones-card/047-Parasect.png",
    "048": "../imagens/Icones-card/048-Venonat.png",
    "049": "../imagens/Icones-card/049-Venomoth.png",
    "050": "../imagens/Icones-card/050-Diglett.png",
    "051": "../imagens/Icones-card/051-Dugtrio.png",
    "052": "../imagens/Icones-card/052-Meowth.png",
    "053": "../imagens/Icones-card/053-Persian.png",
    "054": "../imagens/Icones-card/054-Psyduck.png",
    "055": "../imagens/Icones-card/055-Golduck.png",
    "056": "../imagens/Icones-card/056-Mankey.png",
    "057": "../imagens/Icones-card/057-Primeape.png",
    "058": "../imagens/Icones-card/058-Growlithe.png",
    "059": "../imagens/Icones-card/059-Arcanine.png",
    "060": "../imagens/Icones-card/060-Poliwag.png",
    "061": "../imagens/Icones-card/061-Poliwhirl.png",
    "062": "../imagens/Icones-card/062-Poliwrath.png",
    "063": "../imagens/Icones-card/063-Abra.png",
    "064": "../imagens/Icones-card/064-Kadabra.png",
    "065": "../imagens/Icones-card/065-Alakazam.png",
    "066": "../imagens/Icones-card/066-Machop.png",
    "067": "../imagens/Icones-card/067-Machoke.png",
    "068": "../imagens/Icones-card/068-Machamp.png",
    "069": "../imagens/Icones-card/069-Bellsprout.png",
    "070": "../imagens/Icones-card/070-Weepinbell.png",
    "071": "../imagens/Icones-card/071-Victreebel.png",
    "072": "../imagens/Icones-card/072-Tentacool.png",
    "073": "../imagens/Icones-card/073-Tentacruel.png",
    "074": "../imagens/Icones-card/074-Geodude.png",
    "075": "../imagens/Icones-card/075-Graveler.png",
    "076": "../imagens/Icones-card/076-Golem.png",
    "077": "../imagens/Icones-card/077-Ponyta.png",
    "078": "../imagens/Icones-card/078-Rapidash.png",
    "079": "../imagens/Icones-card/079-Slowpoke.png",
    "080": "../imagens/Icones-card/080-Slowbro.png",
    "081": "../imagens/Icones-card/081-Magnemite.png",
    "082": "../imagens/Icones-card/082-Magneton.png",
    "083": "../imagens/Icones-card/083-Farfetchd.png",
    "084": "../imagens/Icones-card/084-Doduo.png",
    "085": "../imagens/Icones-card/085-Dodrio.png",
    "086": "../imagens/Icones-card/086-Seel.png",
    "087": "../imagens/Icones-card/087-Dewgong.png",
    "088": "../imagens/Icones-card/088-Grimer.png",
    "089": "../imagens/Icones-card/089-Muk.png",
    "090": "../imagens/Icones-card/090-Shellder.png",
    "091": "../imagens/Icones-card/091-Cloyster.png",
    "092": "../imagens/Icones-card/092-Gastly.png",
    "093": "../imagens/Icones-card/093-Haunter.png",
    "094": "../imagens/Icones-card/094-Gengar.png",
    "095": "../imagens/Icones-card/095-Onix.png",
    "096": "../imagens/Icones-card/096-Drowzee.png",
    "097": "../imagens/Icones-card/097-Hypno.png",
    "098": "../imagens/Icones-card/098-Krabby.png",
    "099": "../imagens/Icones-card/099-Kingler.png",
    "100": "../imagens/Icones-card/100-Voltorb.png",
    "101": "../imagens/Icones-card/101-Electrode.png",
    "102": "../imagens/Icones-card/102-Exeggcute.png",
    "103": "../imagens/Icones-card/103-Exeggutor.png",
    "104": "../imagens/Icones-card/104-Cubone.png",
    "105": "../imagens/Icones-card/105-Marowak.png",
    "106": "../imagens/Icones-card/106-Hitmonlee.png",
    "107": "../imagens/Icones-card/107-Hitmonchan.png",
    "108": "../imagens/Icones-card/108-Lickitung.png",
    "109": "../imagens/Icones-card/109-Koffing.png",
    "110": "../imagens/Icones-card/110-Weezing.png",
    "111": "../imagens/Icones-card/111-Rhyhorn.png",
    "112": "../imagens/Icones-card/112-Rhydon.png",
    "113": "../imagens/Icones-card/113-Chansey.png",
    "114": "../imagens/Icones-card/114-Tangela.png",
    "115": "../imagens/Icones-card/115-Kanghaskan.png",
    "116": "../imagens/Icones-card/116-Horsea.png",
    "117": "../imagens/Icones-card/117-Seadra.png",
    "118": "../imagens/Icones-card/118-Goldeen.png",
    "119": "../imagens/Icones-card/119-Seaking.png",
    "120": "../imagens/Icones-card/120-Staryu.png",
    "121": "../imagens/Icones-card/121-Starmie.png",
    "122": "../imagens/Icones-card/122-MrMime.png",
    "123": "../imagens/Icones-card/123-Scyther.png",
    "124": "../imagens/Icones-card/124-Jynx.png",
    "125": "../imagens/Icones-card/125-Electabuzz.png",
    "126": "../imagens/Icones-card/126-Magmar.png",
    "127": "../imagens/Icones-card/127-Pinsir.png",
    "128": "../imagens/Icones-card/128-Tauros.png",
    "129": "../imagens/Icones-card/129-Magikarp.png",
    "130": "../imagens/Icones-card/130-Gyarados.png",
    "131": "../imagens/Icones-card/131-Lapras.png",
    "132": "../imagens/Icones-card/132-Ditto.png",
    "133": "../imagens/Icones-card/133-Eevee.png",
    "134": "../imagens/Icones-card/134-Vaporeon.png",
    "135": "../imagens/Icones-card/135-Jolteon.png",
    "136": "../imagens/Icones-card/136-Flareon.png",
    "137": "../imagens/Icones-card/137-Porygon.png",
    "138": "../imagens/Icones-card/138-Omanyte.png",
    "139": "../imagens/Icones-card/139-Omastar.png",
    "140": "../imagens/Icones-card/140-Kabuto.png",
    "141": "../imagens/Icones-card/141-Kabutops.png",
    "142": "../imagens/Icones-card/142-Aerodactyl.png",
    "143": "../imagens/Icones-card/143-Snorlax.png",
    "144": "../imagens/Icones-card/144-Articuno.png",
    "145": "../imagens/Icones-card/145-Zapdos.png",
    "146": "../imagens/Icones-card/146-Moltres.png",
    "147": "../imagens/Icones-card/147-Dratini.png",
    "148": "../imagens/Icones-card/148-Dragonair.png",
    "149": "../imagens/Icones-card/149-Dragonite.png",
    "150": "../imagens/Icones-card/150-Mewtwo.png",
    "151": "../imagens/Icones-card/151-Mew.png"
};

function gerarCarteirinha() {
    const trainerName = document.getElementById('trainerNome').value;
    document.getElementById('trainerNomeDisplay').innerText = trainerName || "Nome do Treinador";
    
    const trainerImagemInput = document.getElementById('trainerImagem');
    const trainerImagemDisplay = document.getElementById('trainerImagemDisplay');
    if (trainerImagemInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            trainerImagemDisplay.src = e.target.result;
        }
        reader.readAsDataURL(trainerImagemInput.files[0]);
    }

    for (let i = 1; i <= 6; i++) {
        const Pokemonselecionado = document.getElementById(`pokemon${i}`).value;
        const pokemonSlot = document.getElementById(`pokemonSlot${i}`);
        pokemonSlot.src = pokemonImagens[Pokemonselecionado] || pokemonImagens["-"];
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadButton').addEventListener('click', function() {
        const trainerCard = document.getElementById('trainerCard');
        
        html2canvas(trainerCarteirinha).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'carteirinha.png';
            link.click();
        }).catch(error => {
            console.error("Erro ao gerar a imagem:", error);
        });
    });
});