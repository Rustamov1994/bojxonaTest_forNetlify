// **Question-4**
// *tayyor*
// # 4: Божхона омбори йўналиши бўйича 
"use strick";
// Array of Objects
const quiz = [{
        q: `1. Тез бузиладиган товарлар “вақтинча сақлаш” божхона режимида туришининг 
        энг кўп муддати қанчани ташкил этади? `,
        options: [
            `ўн календарь кун`,
            `уч календарь кун`,
            `беш календарь кун`,
            `олтмиш календарь кун`,
        ],
        answer: 0
    },
    {
        q: `2. Божхона назорати остидаги товарларга нисбатан юк операцияларини амалга ошириш 
        тартиби қайси норматив ҳужжат билан тартибга солинади?`,
        options: [
            ` Вазирлар Маҳкамасининг 20.08.2021 йилдаги 531-сонли қарори`,
            ` Вазирлар Маҳкамасининг 09.11.2020 йилдаги 700-сонли қарори`,
            ` Вазирлар Маҳкамасининг 24.11.2021 йилдаги 712-сонли қарори`,
            ` Вазирлар Маҳкамасининг 31.12.2020 йилдаги 833-сонли қарори`,
        ],
        answer: 0
    },
    {
        q: `3. Агар божхона омборида турган товарлар йўқотилган тақдирда жавобгарлик кимнинг зиммасида бўлади?`,
        options: [
            ` Божхона омбори эгасининг. `,
            ` Божхона омборига жойлаштирган шахснинг.`,
            ` Товарларни декларацияловчи шахснинг.`,
            ` Расмийлаштирувчи божхона ходимининг.`,
        ],
        answer: 0
    },
    {
        q: `4. Божхона чегарасидан электр узатиш линиялари орқали олиб 
        ўтилаётган товарларни декларациялаш қачон амалга оширилади?`,
        options: [
            `Электр энергияси етказиб берилган ойдан кейинги ойнинг ўнинчи 
            санасидан  кечиктирмай БЮДни тақдим этиш йўли билан `,
            `электр энергияси етказиб берилган ойдан кейинги ойнинг бешинчи 
            санасидан кечиктирмай БЮДни тақдим этиш йўли билан `,
            `электр энергияси етказиб берилишидан аввал, ҳисобот давридан 
            олдинги ойнинг йигирманчи санасидан кечиктирмай БЮДни тақдим этиш йўли билан `,
            `электр энергияси етказиб берилишидан аввал, ҳисобот давридан 
            олдинги ойнинг бешинчи санасидан кечиктирмай БЮДни тақдим этиш йўли билан `,
        ],
        answer: 0
    },
    {
        q: `5. Божхона омбори, бож олинмайдиган савдо дўкони ва эркин омбор 
        фаолияти учун бериладиган лицензия қанча муддатга амал қилади?`,
        options: [
            ` Чекланмаган`,
            ` 10 йил`,
            ` 5 йил`,
            ` 3 йил`,
        ],
        answer: 0
    },
    {
        q: `6. Божхона транзити божхона режими талаблари ва шартларига 
        риоя этилиши учун ким жавобгар бўлади?`,
        options: [
            ` Ташувчи `,
            ` Декларант`,
            ` Юк жўнатувчи шахс`,
            ` Юк эгаси`,
        ],
        answer: 0
    },
    {
        q: `7. Қандай товарлар божхона омбори божхона режимига жойлаштирилмайди?`,
        options: [
            `Барча жавоблар тўғри. `,
            `Божхона ҳудудига олиб кирилиши тақиқланган товар.`,
            `Божхона ҳудудидан олиб чиқилиши тақиқланган Ўзбекистон товари.`,
            `Қонунчиликка мувофиқ божхона ҳудуди орқали транзит қилиниши тақиқланган товар.`,
        ],
        answer: 0
    },
    {
        q: `8. Агар божхона омбори божхона органлари томонидан таъсис 
        этилаётган бўлса, қайси ташкилот томонидан лицензия олинади? `,
        options: [
            `Лицензия олиш талаб қилинмайди.`,
            `Вазирлар Маҳкамаси.`,
            `Адлия вазирлиги.`,
            `Молия вазирлиги`,
        ],
        answer: 0
    },
    {
        q: `9. Божхона омбори ва бож олинмайдиган савдо дўкони тугатилаётганда 
        уларда турган товарлар божхона омбори ва бож олинмайдиган савдо дўкони 
        тугатилган кундан эътиборан қанча муддатда бошқа божхона омборига 
        ўтказилиши ёхуд бошқа божхона режимига жойлаштирилиши керак?`,
        options: [
            ` Ўн беш календарь кун `,
            ` Йигирма беш календарь кун`,
            ` Олтмиш календарь кун`,
            ` Ўттиз календарь кун`,
        ],
        answer: 0
    },
    {
        q: `10. Агар божхона омбори бўлмаган омборларда ва бошқа жойларда 
        турган товар йўқотилган тақдирда жавобгарлик кимнинг зиммасида бўлади?`,
        options: [
            ` Божхона омборига жойлаштирган шахснинг.`,
            ` Божхона омбори эгасининг.`,
            ` Товарларни декларацияловчи шахснинг.`,
            ` Расмийлаштирувчи божхона ходимининг.`,
        ],
        answer: 0
    },
];

console.log(quiz.length); // 10

// === in gitBash: ==== 
// node js/question5.js