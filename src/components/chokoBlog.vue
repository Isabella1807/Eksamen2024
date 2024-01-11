<script setup></script>
<template>
    <!-- chokoladeblog -->
    <div class="chokoAndEcoSetup">
        <div class="chokoblogcomplete">
            <div>
                <h2>Mortens chokolade blog</h2>
            </div>

            <div class="blogSetup">
                <div>
                    <img class="chokoBlogImage" src="../assets/images/chokoblog.png"
                        alt="lækker jule kakao fra Mortens chokolade">
                </div>

                <div class="blogContent">
                    <div class="blogText">
                        <p>Julen i chokoladebutikken 2023
                            I år består Mortens Julekollektion af: <br>
                            Mørk chokolade med pomerans
                            Mørk chokolade med med praliné af råmandler og muskatnød Lys chokolade med julens krydderier
                            Hvid chokolade a la risalamande
                            Mørk chokolade med hjemmelavet gløgg
                            Mørk chokolade med julesnaps <br> <br>
                            Derudover laver vi nye jule-chokoladestænger
                            Mørk chokolade med appelsincreme
                        </p>
                    </div>
                    <div class="blogButtons">
                        <button class="blogButton">Læs mere</button>
                        <button class="blogButton">Gå til blog</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="ecoChokoComplete">
            <h2>Bæredygtig chokolade</h2>

            <div class="ecoChokoSetup">
                <div class="ecoChokoimages">
                    <img class="ecoChokoimage1" src="../assets/images/ecochoko1.png"
                        alt="Økologisk chokolade fra Mortens chokolade">
                    <img class="ecoChokoimage2" src="../assets/images/ecochoko2.png"
                        alt="Økologisk chokolade fra Mortens Chokolade">
                </div>

                <div class="ecoChokocontent">
                    <div class="ecoChokoText">
                        <p>
                            Det er vigtigt, at os der arbejder med chokolade er med til at skabe og udvikle bæredygtighed i
                            kakaoindustrien. Derfor er jeg glad for, at netop den chokolade jeg bruger, har holdning til
                            netop
                            dette.

                            Størstedelen af verdens kakao kommer fra Vestafrika, og området står over for de mest alvorlige
                            bæredygtighedsudfordringer i kakaoindustrien. Hele 60% af kakaolandmændene lever under
                            fattigdomsgrænsen. </p>
                    </div>

                    <div>
                        <button class="ecoChokoButton">Læs mere</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.chokoBlogImage {
    width: 300px;
}

.blogText {
    width: 300px;
    line-height: 30px;
    margin-bottom: 10%;
}

.blogButton {
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 2px;
}

.blogButtons {
    display: flex;
    flex-direction: column;
    width: 150px;
    gap: 10px;
}

.blogContent {
    display: flex;
    flex-direction: column;
}

.blogSetup {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.chokoblogcomplete {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    gap: 20px;
}

.ecoChokoimage1 {
    width: 300px;
}

.ecoChokoimage2 {
    width: 300px;
}

.ecoChokoimages {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.ecoChokoText {
    width: 250px;
    line-height: 30px;
    margin-bottom: 10%;
}

.ecoChokoButton {
    width: 150px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 2px;
}

.ecoChokocontent {
    display: flex;
    flex-direction: column;
}

.ecoChokoSetup {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
}

.chokoAndEcoSetup {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 7%;
    margin-bottom: 7%;
}

.ecoChokoComplete {
    display: flex;
    flex-direction: column;
    gap: 20px;
}


/*responsivitet*/

/* Media query for smaller screens (e.g., mobile devices) */
@media screen and (max-width: 600px) {

    .chokoAndEcoSetup {
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }

    .ecoChokoSetup,
    .blogSetup {
        flex-direction: column;
    }
}</style>