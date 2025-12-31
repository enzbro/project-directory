// ----------------------------
// 1. DATA: language snippets
// ----------------------------

const languageData = {
     French: [
          "Je ne sais pas quoi faire aujourd’hui.",
          "Il faisait très froid ce matin.",
          "Où est la bibliothèque la plus proche ?",
          "J’aimerais un café avec un peu de lait.",
          "Est-ce que tu veux venir au cinéma ce soir ?",
          "Il est important de finir ses devoirs à temps.",
          "Je pense que c’est une bonne idée.",
          "Elle a acheté une robe rouge magnifique.",
          "Nous allons voyager en France cet été.",
          "As-tu déjà vu ce film français ?",
          "Le chat dort sur le canapé toute la journée.",
          "J’ai perdu mes clés hier soir.",
          "Pouvez-vous m’aider à trouver cette adresse ?",
          "Il faut que je parte maintenant.",
          "Les enfants jouent dans le parc derrière la maison.",
          "C’est incroyable comme il a changé depuis l’année dernière.",
          "Je voudrais réserver une table pour deux personnes.",
          "Elle parle très bien anglais et espagnol.",
          "Le train part à huit heures précises du matin.",
          "Je me demande si nous aurons de la pluie demain."
          ],
     German: [
          "Ich weiß nicht, was ich heute tun soll.",
          "Das Wetter ist heute sehr schön.",
          "Können Sie mir bitte den Weg zum Bahnhof zeigen?",
          "Ich hätte gern eine Tasse Kaffee mit Milch.",
          "Willst du heute Abend ins Kino gehen?",
          "Es ist wichtig, die Hausaufgaben rechtzeitig zu machen.",
          "Ich denke, das ist eine gute Idee.",
          "Sie hat ein wunderschönes rotes Kleid gekauft.",
          "Wir werden diesen Sommer nach Deutschland reisen.",
          "Hast du diesen deutschen Film schon gesehen?",
          "Die Katze schläft den ganzen Tag auf dem Sofa.",
          "Ich habe gestern meine Schlüssel verloren.",
          "Kannst du mir helfen, diese Adresse zu finden?",
          "Ich muss jetzt losgehen.",
          "Die Kinder spielen im Park hinter dem Haus.",
          "Es ist unglaublich, wie sehr er sich seit letztem Jahr verändert hat.",
          "Ich möchte einen Tisch für zwei Personen reservieren.",
          "Sie spricht sehr gut Englisch und Spanisch.",
          "Der Zug fährt genau um acht Uhr morgens ab.",
          "Ich frage mich, ob es morgen regnen wird."
          ],
     Spanish: [
          "No sé qué hacer hoy.",
          "Hace mucho frío esta mañana.",
          "¿Dónde está la biblioteca más cercana?",
          "Quisiera un café con leche, por favor.",
          "¿Quieres venir al cine esta noche?",
          "Es importante terminar la tarea a tiempo.",
          "Creo que es una buena idea.",
          "Ella compró un vestido rojo muy bonito.",
          "Vamos a viajar a España este verano.",
          "¿Has visto ya esa película española?",
          "El gato duerme todo el día en el sofá.",
          "Perdí mis llaves ayer por la noche.",
          "¿Puedes ayudarme a encontrar esta dirección?",
          "Tengo que irme ahora.",
          "Los niños juegan en el parque detrás de la casa.",
          "Es increíble cómo ha cambiado desde el año pasado.",
          "Quisiera reservar una mesa para dos personas.",
          "Ella habla muy bien inglés y francés.",
          "El tren sale a las ocho en punto de la mañana.",
          "Me pregunto si lloverá mañana."
          ],
     Portuguese: [
          "Não sei o que fazer hoje.",
          "Está muito frio esta manhã.",
          "Onde fica a biblioteca mais próxima?",
          "Gostaria de um café com leite, por favor.",
          "Você quer ir ao cinema hoje à noite?",
          "É importante terminar o dever de casa a tempo.",
          "Acho que é uma boa ideia.",
          "Ela comprou um vestido vermelho muito bonito.",
          "Vamos viajar para Portugal neste verão.",
          "Você já viu esse filme português?",
          "O gato dorme o dia todo no sofá.",
          "Perdi minhas chaves ontem à noite.",
          "Pode me ajudar a encontrar este endereço?",
          "Preciso ir agora.",
          "As crianças brincam no parque atrás da casa.",
          "É incrível como ele mudou desde o ano passado.",
          "Gostaria de reservar uma mesa para duas pessoas.",
          "Ela fala muito bem inglês e espanhol.",
          "O trem parte exatamente às oito da manhã.",
          "Pergunto-me se vai chover amanhã."
     ],
     English: [
          "I don't know what to do today.",
          "It was very cold this morning.",
          "Where is the nearest library?",
          "I would like a cup of coffee with milk, please.",
          "Do you want to go to the movies tonight?",
          "It's important to finish your homework on time.",
          "I think this is a good idea.",
          "She bought a beautiful red dress.",
          "We are going to travel to England this summer.",
          "Have you seen that English movie yet?",
          "The cat sleeps on the sofa all day.",
          "I lost my keys last night.",
          "Can you help me find this address?",
          "I need to leave now.",
          "The children are playing in the park behind the house.",
          "It's amazing how much he has changed since last year.",
          "I would like to reserve a table for two people.",
          "She speaks very good French and Spanish.",
          "The train leaves at exactly eight in the morning.",
          "I wonder if it will rain tomorrow."
     ],
     Italian: [
          "Non so cosa fare oggi.",
          "Faceva molto freddo questa mattina.",
          "Dove si trova la biblioteca più vicina?",
          "Vorrei un caffè con un po’ di latte, per favore.",
          "Vuoi venire al cinema stasera?",
          "È importante finire i compiti in tempo.",
          "Penso che sia una buona idea.",
          "Ha comprato un bellissimo vestito rosso.",
          "Andremo in Italia quest’estate.",
          "Hai già visto quel film italiano?",
          "Il gatto dorme sul divano tutto il giorno.",
          "Ho perso le mie chiavi ieri sera.",
          "Puoi aiutarmi a trovare questo indirizzo?",
          "Devo andare adesso.",
          "I bambini giocano nel parco dietro la casa.",
          "È incredibile quanto sia cambiato dall’anno scorso.",
          "Vorrei prenotare un tavolo per due persone.",
          "Parla molto bene inglese e spagnolo.",
          "Il treno parte esattamente alle otto di mattina.",
          "Mi chiedo se pioverà domani."
     ],
     Russian: [
          "Я не знаю, что делать сегодня.",
          "Сегодня утром было очень холодно.",
          "Где находится ближайшая библиотека?",
          "Я хотел бы чашку кофе с молоком, пожалуйста.",
          "Ты хочешь пойти в кино сегодня вечером?",
          "Важно вовремя закончить домашнее задание.",
          "Я думаю, что это хорошая идея.",
          "Она купила красивое красное платье.",
          "Мы собираемся поехать в Россию этим летом.",
          "Ты уже видел этот русский фильм?",
          "Кот спит на диване весь день.",
          "Я потерял свои ключи вчера вечером.",
          "Можешь помочь мне найти этот адрес?",
          "Мне нужно идти сейчас.",
          "Дети играют в парке за домом.",
          "Это удивительно, как сильно он изменился с прошлого года.",
          "Я хотел бы забронировать столик на двоих.",
          "Она очень хорошо говорит по-английски и по-испански.",
          "Поезд отправляется ровно в восемь утра.",
          "Интересно, будет ли завтра дождь."
     ],
     Ukrainian: [
          "Я не знаю, що робити сьогодні.",
          "Сьогодні вранці було дуже холодно.",
          "Де знаходиться найближча бібліотека?",
          "Я хотів би чашку кави з молоком, будь ласка.",
          "Хочеш піти в кіно сьогодні ввечері?",
          "Важливо вчасно закінчити домашнє завдання.",
          "Я думаю, що це гарна ідея.",
          "Вона купила гарну червону сукню.",
          "Ми збираємося поїхати в Україну цього літа.",
          "Ти вже бачив цей український фільм?",
          "Кіт спить на дивані весь день.",
          "Я вчора загубив свої ключі.",
          "Можеш допомогти мені знайти цю адресу?",
          "Мені потрібно йти зараз.",
          "Діти грають у парку за будинком.",
          "Це дивовижно, як сильно він змінився з минулого року.",
          "Я хотів би забронювати стіл на двох.",
          "Вона дуже добре говорить англійською та іспанською.",
          "Поїзд відправляється точно о восьмій ранку.",
          "Цікаво, чи буде завтра дощ."
     ],
     Icelandic: [
          "Ég veit ekki hvað ég á að gera í dag.",
          "Það var mjög kalt í morgun.",
          "Hvar er næsta bókasafn?",
          "Mig langar í kaffibolla með smá mjólk, takk.",
          "Viltu koma í bíó í kvöld?",
          "Það er mikilvægt að klára heimanámið á réttum tíma.",
          "Ég held að þetta sé góð hugmynd.",
          "Hún keypti fallegan rauðan kjól.",
          "Við ætlum að ferðast til Íslands í sumar.",
          "Hefur þú séð þessa íslensku kvikmynd?",
          "Kötturinn sefur á sófanum allan daginn.",
          "Ég missti lykla mína í gærkvöldi.",
          "Getur þú hjálpað mér að finna þessa heimilisfang?",
          "Ég þarf að fara núna.",
          "Börn leika sér í garðinum fyrir aftan húsið.",
          "Það er ótrúlegt hversu mikið hann hefur breyst frá síðasta ári.",
          "Mig langar að panta borð fyrir tvo.",
          "Hún talar mjög vel ensku og spænsku.",
          "Lest fer frá nákvæmlega klukkan átta að morgni.",
          "Ég spyr mig hvort það rigni á morgun."
     ],
     Norwegian: [
          "Jeg vet ikke hva jeg skal gjøre i dag.",
          "Det var veldig kaldt i morges.",
          "Hvor er det nærmeste biblioteket?",
          "Jeg vil gjerne ha en kopp kaffe med litt melk, takk.",
          "Vil du bli med på kino i kveld?",
          "Det er viktig å gjøre leksene i tide.",
          "Jeg tror det er en god idé.",
          "Hun kjøpte en vakker rød kjole.",
          "Vi skal reise til Norge i sommer.",
          "Har du allerede sett denne norske filmen?",
          "Katten sover på sofaen hele dagen.",
          "Jeg mistet nøklene mine i går kveld.",
          "Kan du hjelpe meg med å finne denne adressen?",
          "Jeg må gå nå.",
          "Barna leker i parken bak huset.",
          "Det er utrolig hvor mye han har forandret seg siden i fjor.",
          "Jeg vil gjerne reservere et bord for to personer.",
          "Hun snakker veldig godt engelsk og spansk.",
          "Toget går presis klokken åtte om morgenen.",
          "Jeg lurer på om det vil regne i morgen."
     ],
     Swedish: [
          "Jag vet inte vad jag ska göra idag.",
          "Det var mycket kallt i morse.",
          "Var ligger det närmaste biblioteket?",
          "Jag skulle vilja ha en kopp kaffe med lite mjölk, tack.",
          "Vill du gå på bio ikväll?",
          "Det är viktigt att göra läxorna i tid.",
          "Jag tror att det är en bra idé.",
          "Hon köpte en vacker röd klänning.",
          "Vi ska resa till Sverige i sommar.",
          "Har du redan sett den här svenska filmen?",
          "Katten sover på soffan hela dagen.",
          "Jag tappade mina nycklar igår kväll.",
          "Kan du hjälpa mig att hitta den här adressen?",
          "Jag måste gå nu.",
          "Barnen leker i parken bakom huset.",
          "Det är otroligt hur mycket han har förändrats sedan förra året.",
          "Jag skulle vilja reservera ett bord för två personer.",
          "Hon talar mycket bra engelska och spanska.",
          "Tåget går exakt klockan åtta på morgonen.",
          "Jag undrar om det kommer att regna imorgon."
     ],
     Finnish: [
          "En tiedä, mitä tehdä tänään.",
          "Tänä aamuna oli hyvin kylmä.",
          "Missä on lähin kirjasto?",
          "Haluaisin kupillisen kahvia maidon kanssa, kiitos.",
          "Haluatko mennä elokuviin tänä iltana?",
          "On tärkeää tehdä kotitehtävät ajallaan.",
          "Luulen, että se on hyvä idea.",
          "Hän osti kauniin punaisen mekon.",
          "Aiomme matkustaa Suomeen tänä kesänä.",
          "Oletko nähnyt tämän suomalaisen elokuvan jo?",
          "Kissa nukkuu sohvalla koko päivän.",
          "Kadotin avaimeni eilen illalla.",
          "Voitko auttaa minua löytämään tämän osoitteen?",
          "Minun täytyy lähteä nyt.",
          "Lapset leikkivät puistossa talon takana.",
          "On uskomatonta, kuinka paljon hän on muuttunut viime vuodesta.",
          "Haluaisin varata pöydän kahdelle henkilölle.",
          "Hän puhuu erittäin hyvin englantia ja espanjaa.",
          "Juna lähtee tarkalleen kello kahdeksan aamulla.",
          "Mietin, sataako huomenna."
     ],
     Danish: [
          "Jeg ved ikke, hvad jeg skal lave i dag.",
          "Det var meget koldt i morges.",
          "Hvor ligger det nærmeste bibliotek?",
          "Jeg vil gerne have en kop kaffe med lidt mælk, tak.",
          "Vil du med i biografen i aften?",
          "Det er vigtigt at lave lektierne til tiden.",
          "Jeg tror, det er en god idé.",
          "Hun købte en smuk rød kjole.",
          "Vi skal rejse til Danmark denne sommer.",
          "Har du allerede set denne danske film?",
          "Katten sover på sofaen hele dagen.",
          "Jeg mistede mine nøgler i går aftes.",
          "Kan du hjælpe mig med at finde denne adresse?",
          "Jeg skal gå nu.",
          "Børnene leger i parken bag huset.",
          "Det er utroligt, hvor meget han har ændret sig siden sidste år.",
          "Jeg vil gerne reservere et bord til to personer.",
          "Hun taler meget godt engelsk og spansk.",
          "Toget går præcis klokken otte om morgenen.",
          "Jeg spekulerer på, om det vil regne i morgen."
     ],
     Estonian: [
          "Ma ei tea, mida täna teha.",
          "Täna hommikul oli väga külm.",
          "Kus asub lähim raamatukogu?",
          "Tahaksin tassi kohvi veidi piimaga, palun.",
          "Kas sa tahad täna õhtul kinno minna?",
          "Oluline on kodutööd õigel ajal teha.",
          "Ma arvan, et see on hea idee.",
          "Ta ostis ilusa punase kleidi.",
          "Me kavatseme sel suvel Eestisse reisida.",
          "Kas sa oled juba seda eesti filmi näinud?",
          "Kass magab kogu päeva diivanil.",
          "Ma kaotasin eile õhtul oma võtmed.",
          "Kas sa saad mind aidata selle aadressi leidmisel?",
          "Mul on vaja nüüd minna.",
          "Lapsed mängivad pargis maja taga.",
          "See on uskumatu, kui palju ta on möödunud aastaga muutunud.",
          "Tahaksin broneerida laua kahele inimesele.",
          "Ta räägib väga hästi inglise ja hispaania keelt.",
          "Rong väljub täpselt kell kaheksa hommikul.",
          "Ma mõtlen, kas homme sajab."
     ],
     Latvian: [
          "Es nezinu, ko darīt šodien.",
          "Šorīt bija ļoti auksts.",
          "Kur atrodas tuvākā bibliotēka?",
          "Es gribētu tasi kafijas ar pienu, lūdzu.",
          "Vai tu gribi iet uz kino šovakar?",
          "Ir svarīgi pabeigt mājasdarbus laikā.",
          "Es domāju, ka tā ir laba ideja.",
          "Viņa nopirka skaistu sarkanu kleitu.",
          "Mēs plānojam ceļot uz Latviju šovasar.",
          "Vai tu jau esi redzējis šo latviešu filmu?",
          "Kaķis guļ uz dīvāna visu dienu.",
          "Es vakar pazaudēju savas atslēgas.",
          "Vai tu vari man palīdzēt atrast šo adresi?",
          "Man tagad jāiet.",
          "Bērni spēlējas parkā aiz mājas.",
          "Ir neticami, cik daudz viņš ir mainījies kopš pagājušā gada.",
          "Es gribētu rezervēt galdiņu divām personām.",
          "Viņa runā ļoti labi angliski un spāniski.",
          "Vilciens izbrauc precīzi pulksten astoņos no rīta.",
          "Es domāju, vai rīt līs lietus."
     ],
     Lithuanian: [
          "Aš nežinau, ką daryti šiandien.",
          "Šį rytą buvo labai šalta.",
          "Kur yra arčiausia biblioteka?",
          "Norėčiau puodelio kavos su pienu, prašau.",
          "Ar nori eiti į kiną šį vakarą?",
          "Svarbu laiku atlikti namų darbus.",
          "Manau, kad tai gera idėja.",
          "Ji nusipirko gražią raudoną suknelę.",
          "Mes planuojame keliauti į Lietuvą šią vasarą.",
          "Ar jau matei šį lietuvišką filmą?",
          "Katė miega ant sofos visą dieną.",
          "Vakar praradau savo raktus.",
          "Ar gali man padėti surasti šį adresą?",
          "Man reikia eiti dabar.",
          "Vaikai žaidžia parke už namo.",
          "Neįtikėtina, kiek jis pasikeitė nuo praėjusių metų.",
          "Norėčiau užsirezervuoti stalą dviems žmonėms.",
          "Ji kalba labai gerai angliškai ir ispaniškai.",
          "Traukinys išvyksta tiksliai aštuntą valandą ryto.",
          "Įdomu, ar rytoj lis lietus."
     ],
     Czech: [
          "Nevím, co mám dnes dělat.",
          "Dnes ráno bylo velmi chladno.",
          "Kde se nachází nejbližší knihovna?",
          "Chtěl bych šálek kávy s trochou mléka, prosím.",
          "Chceš jít dnes večer do kina?",
          "Je důležité dokončit domácí úkoly včas.",
          "Myslím, že je to dobrý nápad.",
          "Koupila si krásné červené šaty.",
          "V létě plánujeme cestovat do Česka.",
          "Už jsi viděl tento český film?",
          "Kočka spí celý den na gauči.",
          "Včera jsem ztratil své klíče.",
          "Můžeš mi pomoct najít tuto adresu?",
          "Musím teď odejít.",
          "Děti si hrají v parku za domem.",
          "Je neuvěřitelné, jak moc se od loňského roku změnil.",
          "Chtěl bych rezervovat stůl pro dvě osoby.",
          "Mluví velmi dobře anglicky a španělsky.",
          "Vlak odjíždí přesně v osm hodin ráno.",
          "Zajímá mě, jestli zítra bude pršet."
     ],
     Slovak: [
          "Neviem, čo mám dnes robiť.",
          "Dnes ráno bolo veľmi chladno.",
          "Kde sa nachádza najbližšia knižnica?",
          "Chcel by som šálku kávy s troškou mlieka, prosím.",
          "Chceš ísť dnes večer do kina?",
          "Je dôležité dokončiť domáce úlohy včas.",
          "Myslím, že je to dobrý nápad.",
          "Kúpila si krásne červené šaty.",
          "V lete plánujeme cestovať na Slovensko.",
          "Už si videl tento slovenský film?",
          "Mačka spí celý deň na pohovke.",
          "Včera som stratil svoje kľúče.",
          "Môžeš mi pomôcť nájsť túto adresu?",
          "Musím ísť teraz.",
          "Deti sa hrajú v parku za domom.",
          "Je neuveriteľné, koľko sa zmenil od minulého roka.",
          "Chcel by som rezervovať stôl pre dve osoby.",
          "Hovorí veľmi dobre po anglicky a španielsky.",
          "Vlak odchádza presne o ôsmej ráno.",
          "Zaujíma ma, či zajtra bude pršať."
     ],
     Bulgarian: [
          "Не знам какво да правя днес.",
          "Тази сутрин беше много студено.",
          "Къде се намира най-близката библиотека?",
          "Бих искал чаша кафе с малко мляко, моля.",
          "Искаш ли да отидем на кино тази вечер?",
          "Важно е да се свършат домашните навреме.",
          "Мисля, че това е добра идея.",
          "Тя купи красива червена рокля.",
          "Планираме да пътуваме до България това лято.",
          "Вече видя ли този български филм?",
          "Котката спи на дивана през целия ден.",
          "Вчера загубих ключовете си.",
          "Можеш ли да ми помогнеш да намеря този адрес?",
          "Трябва да тръгвам сега.",
          "Децата играят в парка зад къщата.",
          "Невероятно е колко много се е променил от миналата година.",
          "Бих искал да резервирам маса за двама.",
          "Тя говори много добре английски и испански.",
          "Влакът тръгва точно в осем сутринта.",
          "Интересувам се дали утре ще вали."
     ],
     Hungarian: [
          "Nem tudom, mit csináljak ma.",
          "Ma reggel nagyon hideg volt.",
          "Hol van a legközelebbi könyvtár?",
          "Szeretnék egy csésze kávét egy kis tejjel, kérem.",
          "Akarsz ma este moziba menni?",
          "Fontos, hogy időben elkészítsd a házi feladatot.",
          "Azt hiszem, ez egy jó ötlet.",
          "Vett egy gyönyörű piros ruhát.",
          "Ezen a nyáron Magyarországra fogunk utazni.",
          "Már láttad ezt a magyar filmet?",
          "A macska egész nap a kanapén alszik.",
          "Tegnap elvesztettem a kulcsaimat.",
          "Tudnál segíteni megtalálni ezt a címet?",
          "Most el kell mennem.",
          "A gyerekek a ház mögötti parkban játszanak.",
          "Hihetetlen, mennyit változott az elmúlt évben.",
          "Szeretnék egy asztalt foglalni két személyre.",
          "Nagyon jól beszél angolul és spanyolul.",
          "A vonat pontosan nyolc órakor indul reggel.",
          "Kíváncsi vagyok, esni fog-e holnap."
     ],
     Dutch: [
          "Ik weet niet wat ik vandaag moet doen.",
          "Het was vanochtend erg koud.",
          "Waar is de dichtstbijzijnde bibliotheek?",
          "Ik wil graag een kop koffie met een beetje melk, alstublieft.",
          "Wil je vanavond naar de bioscoop gaan?",
          "Het is belangrijk om je huiswerk op tijd af te maken.",
          "Ik denk dat dit een goed idee is.",
          "Zij heeft een mooie rode jurk gekocht.",
          "We gaan deze zomer naar Nederland reizen.",
          "Heb je die Nederlandse film al gezien?",
          "De kat slaapt de hele dag op de bank.",
          "Ik ben gisteravond mijn sleutels kwijtgeraakt.",
          "Kun je me helpen dit adres te vinden?",
          "Ik moet nu gaan.",
          "De kinderen spelen in het park achter het huis.",
          "Het is ongelooflijk hoeveel hij sinds vorig jaar is veranderd.",
          "Ik wil graag een tafel voor twee personen reserveren.",
          "Zij spreekt heel goed Engels en Spaans.",
          "De trein vertrekt precies om acht uur 's ochtends.",
          "Ik vraag me af of het morgen zal regenen."
     ],
     Greek: [
          "Δεν ξέρω τι να κάνω σήμερα.",
          "Ήταν πολύ κρύο σήμερα το πρωί.",
          "Πού βρίσκεται η πιο κοντινή βιβλιοθήκη;",
          "Θα ήθελα ένα φλιτζάνι καφέ με λίγιο γάλα, παρακαλώ.",
          "Θέλεις να πάμε σινεμά απόψε;",
          "Είναι σημαντικό να τελειώσεις την εργασία σου εγκαίρως.",
          "Νομίζω ότι είναι καλή ιδέα.",
          "Αγόρασε ένα όμορφο κόκκινο φόρεμα.",
          "Σχεδιάζουμε να ταξιδέψουμε στην Ελλάδα αυτό το καλοκαίρι.",
          "Έχεις ήδη δει αυτή την ελληνική ταινία;",
          "Η γάτα κοιμάται στον καναπέ όλη μέρα.",
          "Χάσα τα κλειδιά μου χθες το βράδυ.",
          "Μπορείς να με βοηθήσεις να βρω αυτή τη διεύθυνση;",
          "Πρέπει να φύγω τώρα.",
          "Τα παιδιά παίζουν στο πάρκο πίσω από το σπίτι.",
          "Είναι απίστευτο πόσο πολύ έχει αλλάξει από πέρυσι.",
          "Θα ήθελα να κλείσω ένα τραπέζι για δύο άτομα.",
          "Μιλάει πολύ καλά αγγλικά και ισπανικά.",
          "Το τρένο φεύγει ακριβώς στις οκτώ το πρωί.",
          "Αναρωτιέμαι αν θα βρέξει αύριο."
     ],
     Romanian: [
          "Nu știu ce să fac astăzi.",
          "A fost foarte frig în această dimineață.",
          "Unde se află cea mai apropiată bibliotecă?",
          "Aș dori o ceașcă de cafea cu puțin lapte, vă rog.",
          "Vrei să mergem la cinema în seara asta?",
          "Este important să termini temele la timp.",
          "Cred că este o idee bună.",
          "Ea a cumpărat o rochie roșie frumoasă.",
          "Plănuim să călătorim în România vara aceasta.",
          "Ai văzut deja acest film românesc?",
          "Pisica doarme pe canapea toată ziua.",
          "Am pierdut cheile ieri seară.",
          "Poți să mă ajuți să găsesc această adresă?",
          "Trebuie să plec acum.",
          "Copiii se joacă în parc în spatele casei.",
          "Este incredibil cât de mult s-a schimbat de anul trecut.",
          "Aș dori să rezerv o masă pentru două persoane.",
          "Vorbește foarte bine engleza și spaniola.",
          "Trenul pleacă exact la ora opt dimineața.",
          "Mă întreb dacă va ploua mâine."
     ],
     Polish: [
          "Nie wiem, co mam dzisiaj robić.",
          "Dziś rano było bardzo zimno.",
          "Gdzie jest najbliższa biblioteka?",
          "Chciałbym filiżankę kawy z odrobiną mleka, proszę.",
          "Chcesz iść dzisiaj wieczorem do kina?",
          "Ważne jest, aby wykonać zadanie domowe na czas.",
          "Myślę, że to dobry pomysł.",
          "Kupiła piękną czerwoną sukienkę.",
          "Planujemy podróż do Polski tego lata.",
          "Czy już widziałeś ten polski film?",
          "Kot śpi cały dzień na kanapie.",
          "Wczoraj zgubiłem swoje klucze.",
          "Czy możesz mi pomóc znaleźć ten adres?",
          "Muszę teraz iść.",
          "Dzieci bawią się w parku za domem.",
          "To niesamowite, jak bardzo się zmienił od zeszłego roku.",
          "Chciałbym zarezerwować stolik dla dwóch osób.",
          "Mówi bardzo dobrze po angielsku i hiszpańsku.",
          "Pociąg odjeżdża dokładnie o ósmej rano.",
          "Zastanawiam się, czy jutro będzie padać."
     ],
     Turkish: [
          "Bugün ne yapacağımı bilmiyorum.",
          "Bu sabah hava çok soğuktu.",
          "En yakın kütüphane nerede?",
          "Bir fincan kahve ve biraz süt istiyorum, lütfen.",
          "Bu akşam sinemaya gitmek ister misin?",
          "Ödevlerini zamanında yapmak önemlidir.",
          "Bence bu iyi bir fikir.",
          "Güzel kırmızı bir elbise aldı.",
          "Bu yaz Türkiye'ye seyahat etmeyi planlıyoruz.",
          "Bu Türk filmini zaten gördün mü?",
          "Kedi bütün gün kanepede uyuyor.",
          "Dün anahtarlarımı kaybettim.",
          "Bu adresi bulmama yardım edebilir misin?",
          "Şimdi gitmem gerekiyor.",
          "Çocuklar evin arkasındaki parkta oynuyor.",
          "Geçen yıldan bu yana ne kadar değiştiğine inanmak zor.",
          "İki kişilik bir masa ayırtmak istiyorum.",
          "İngilizceyi ve İspanyolcayı çok iyi konuşuyor.",
          "Tren sabah tam sekizde kalkıyor.",
          "Yarın yağmur yağacak mı merak ediyorum."
     ],
     Irish: [
          "Ní féidir liom a thuiscint cad atá le déanamh inniu.",
          "Bhí sé an-fhuar ar maidin.",
          "Cá bhfuil an leabharlann is gaire?",
          "Ba mhaith liom cupán caife le beagán bainne, le do thoil.",
          "Ar mhaith leat dul go dtí an phictiúrlann anocht?",
          "Tá sé tábhachtach na tascanna baile a dhéanamh in am.",
          "Ceapaim gurb é seo smaoineamh maith.",
          "Cheannaigh sí gúna dearg álainn.",
          "Táimid ag pleanáil taisteal go hÉirinn i rith an tsamhraidh.",
          "An bhfaca tú an scannán Éireannach seo cheana féin?",
          "Tá an cat ag codladh ar an tolg ar feadh an lae.",
          "Chaill mé mo eochracha inné tráthnóna.",
          "An féidir leat cabhrú liom an seoladh seo a fháil?",
          "Caithfidh mé imeacht anois.",
          "Tá na páistí ag imirt sa pháirc taobh thiar den teach.",
          "Is dochreidte cé mhéad a d’athraigh sé ó bhliain go bliain.",
          "Ba mhaith liom bord a chur in áirithe do bheirt.",
          "Labhraíonn sí Béarla agus Spáinnis go han-mhaith.",
          "Fágann an traein go díreach ar a hocht a chlog ar maidin.",
          "Táim fiosrach an mbeidh sé ag cur báistí amárach."
     ],
     Slovenian: [
          "Ne vem, kaj naj danes naredim.",
          "Danes zjutraj je bilo zelo mrzlo.",
          "Kje je najbližja knjižnica?",
          "Rad bi skodelico kave z malo mleka, prosim.",
          "Ali želiš danes zvečer iti v kino?",
          "Pomembno je, da domačo nalogo opraviš pravočasno.",
          "Mislim, da je to dobra ideja.",
          "Kupila je lepo rdečo obleko.",
          "Poleti načrtujemo potovanje v Slovenijo.",
          "Si že videl ta slovenski film?",
          "Mačka spi cel dan na kavču.",
          "Včeraj sem izgubil svoje ključe.",
          "Mi lahko pomagaš najti ta naslov?",
          "Moram iti zdaj.",
          "Otroci se igrajo v parku za hišo.",
          "Neverjetno je, koliko se je spremenil od lanskega leta.",
          "Rad bi rezerviral mizo za dve osebi.",
          "Zelo dobro govori angleško in špansko.",
          "Vlak odpelje natančno ob osmih zjutraj.",
          "Zanimam se, ali bo jutri deževalo."
     ],
     Croatian: [
          "Ne znam što bih danas radio.",
          "Jutros je bilo vrlo hladno.",
          "Gdje se nalazi najbliža knjižnica?",
          "Želio bih šalicu kave s malo mlijeka, molim.",
          "Hoćeš li večeras ići u kino?",
          "Važno je napraviti domaću zadaću na vrijeme.",
          "Mislim da je to dobra ideja.",
          "Kupila je lijepu crvenu haljinu.",
          "Ove godine planiramo putovati u Hrvatsku.",
          "Jesi li već gledao ovaj hrvatski film?",
          "Mačka spava cijeli dan na sofi.",
          "Jučer sam izgubio svoje ključeve.",
          "Možeš li mi pomoći pronaći ovu adresu?",
          "Moram ići sada.",
          "Djeca se igraju u parku iza kuće.",
          "Nevjerojatno je koliko se promijenio od prošle godine.",
          "Želio bih rezervirati stol za dvoje.",
          "Vrlo dobro govori engleski i španjolski.",
          "Vlak polazi točno u osam ujutro.",
          "Pitam se hoće li sutra padati kiša."
     ],
     Maltese: [
          "Ma nafx x’għandi nagħmel illum.",
          "Kien kiesaħ ħafna din il-morge.",
          "Fejn tinsab il-librerija l-qrib?",
          "Nixtieq tazza kafè b’ftit ħalib, jekk jogħġbok.",
          "Trid tmur il-filmat illejla?",
          "Huwa importanti li tlesti d-dar fl-ħin.",
          "Naħseb li hi idea tajba.",
          "Xtrajt libsa ħamra sabiħa.",
          "Qegħdin nippjanaw li nivvjaġġaw lejn Malta din is-sajf.",
          "Diġà rajt dan il-filmat Malti?",
          "Il-qattus jonfoħ fuq is-sufan tul il-ġurnata.",
          "Ilbieraħ għedt tħallast iċ-ċwievet tiegħi.",
          "Tista’ tgħinni ssib din l-indirizz?",
          "Għandi mmur issa.",
          "It-tfal qed jilagħbu fil-park wara d-dar.",
          "Huwa tassew inkredibbli kemm nbidel minn sena ilu.",
          "Nixtieq nibbukkja mejda għal żewġ persuni.",
          "Titkellem bl-Ingliż u Spanjol tajjeb ħafna.",
          "It-tren jitlaq eżatt fis-siegħa t-tmienja filgħodu.",
          "Qed nistaqsi jekk se jżomm ix-xita għada."
     ],

};

// ----------------------------
// 2. STATE VARIABLES
// ----------------------------

let currentLanguage = "";
let currentSentence = "";
let streak = 0;

// ----------------------------
// 3. DOM ELEMENTS
// ----------------------------

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("guess");
const feedbackEl = document.getElementById("feedback");
const streakEl = document.getElementById("streak");
const buttonEl = document.getElementById("submit");

// ----------------------------
// 4. PICK RANDOM LANGUAGE + SENTENCE
// ----------------------------

function pickNewSentence() {
     const languages = Object.keys(languageData);
     const randomLanguage =
       languages[Math.floor(Math.random() * languages.length)];
   
     const sentences = languageData[randomLanguage];
     const randomSentence =
       sentences[Math.floor(Math.random() * sentences.length)];
   
     currentLanguage = randomLanguage;
     currentSentence = randomSentence;
   
     sentenceEl.textContent = currentSentence;
     inputEl.value = "";
   }


// ----------------------------
// 5. CHECK USER GUESS
// ----------------------------

function checkAnswer() {
     const userGuess = inputEl.value.trim().toLowerCase();

     if (userGuess === currentLanguage.toLowerCase()) {
          streak++;
          feedbackEl.textContent = "✅ Correct! It was indeed " + currentLanguage;
     } else {
          streak = 0;
          feedbackEl.textContent =
          "❌ Wrong — that was " + currentLanguage + ", not " + userGuess;
     }

     streakEl.textContent = "Current Streak: " + streak;

     pickNewSentence();
}

// ----------------------------
// 6. EVENT LISTENER
// ----------------------------

//button click
buttonEl.addEventListener("click", checkAnswer);

//enter key
inputEl.addEventListener("keydown", function (event) {
     if (event.key === "Enter") {
          checkAnswer();
     }
});

// ----------------------------
// 7. START GAME
// ----------------------------

pickNewSentence();
