// **Question-6**
// *tayyor*
// # 6: Барча ходимлар учун юридик соҳа йўналишидаги тест саволлари 
"use strick";
// Array of Objects
const quiz = [{
        num: 1,
        q: `1. Норматив-ҳуқуқий ҳужжатлар қабул қилиш ҳуқуқига 
        эга бўлмаган органлар ёки мансабдор шахслар келтирилган 
        жавобни белгиланг.`,
        options: [`А) Олий Мажлисининг палаталари, маҳаллий давлат ҳокимияти органлари`,
            `Б) Ўзбекистон Республикасининг Президенти, давлат қўмиталари ва идоралар`,
            `В) Адлия вазирлиги ва Бош прокуратура`,
            `Г) Вазирликлар, давлат қўмиталари`,
        ],
        answer: 2
    },
    {
        num: 2,
        q: `2. Вазирликлар, давлат қўмиталари ўз ваколати 
        доирасида қандай турдаги норматив-ҳуқуқий ҳужжатлар қабул қилади?`,
        options: [`А) буйруқлар ва қарорлар `,
            `Б) буйруқлар ва фармойишлар`,
            `В) Фармойиш ва кўрсатмалар`,
            `Г) техник ҳужжатлар ва ички идоравий ҳужжатлар`,
        ],
        answer: 0
    },
    {
        num: 3,
        q: `3. Тадбиркорлик фаолиятини амалга ошириш 
        тартиб-таомили мураккаблаштирилишини ва тадбиркорлик 
        фаолияти субъектлари зиммасига янги мажбуриятлар 
        юклатилишини назарда тутадиган, шунингдек уларнинг 
        жавобгарлигига оид янги чораларни белгилайдиган 
        норматив-ҳуқуқий ҳужжатлар расмий эълон қилинган кундан эътиборан қанча вақтдан кейин кучга киради?`,
        options: [`А) бир ой `,
            `Б) расмий эълон қилинган кундан`,
            `В) уч ой`,
            `Г) оммавий ахборот воситаларда эълон қилинган кундан бошлаб`,
        ],
        answer: 2
    },
    {
        num: 4,
        q: `4. Қонунларга расмий шарҳни қайси орган беради?`,
        options: [`А) Олий Мажлис`,
            `Б) Конституциявий суд`,
            `В) уларни қабул қилган органлар`,
            `Г) Адлия вазирлиги`,
        ],
        answer: 2
    },
    {
        num: 5,
        q: `5. Олий Мажлис Сенати таркиби нечта сенатордан иборат?`,
        options: [`А) 100 та`,
            `Б) 150 та`,
            `В) 250 та`,
            `Г) 16 та`,
        ],
        answer: 0
    },
    {
        num: 6,
        q: `6. Олий Мажлис Қонунчилик палатаси таркиби нечта депутатдан ибора?`,
        options: [`А) 250 та`,
            `Б) 150 та`,
            `В) 100 та`,
            `Г) 16 та`,
        ],
        answer: 1
    },
    {
        num: 7,
        q: `7. Ўзбекистон Республикаси Давлат божхона қўмитаси тўғрисидаги низом қайси орган томонидан тасдиқланади?`,
        options: [`А) Ўзбекистон Республикаси Президенти томонидан`,
            `Б) Вазирлар Маҳкамаси томонидан`,
            `В) Давлат божхона қўмитаси раиси томонидан`,
            `Г) Олий Мажлис томонидан`,
        ],
        answer: 1
    },
    {
        num: 8,
        q: `8. Ўзбекистон Республикаси Давлат божхона қўмитаси раиси ким томонидан лавозимга тасдиқланади?`,
        options: [`А) Бош вазирининг тақдимига биноан 
        Ўзбекистон Республикаси Президенти томонидан лавозимга тасдиқланади`,
            `Б) Сенатнтнг тақдимига биноан Ўзбекистон Республикаси Президенти томонидан лавозимга тасдиқланади`,
            `В) Президент Администрациясининг тақдимига биноан 
            Ўзбекистон Республикаси Президенти томонидан лавозимга тасдиқланади`,
            `Г) Қонунчилик палатасининг тақдимига биноан Бош вазирининг томонидан лавозимга тасдиқланади`,
        ],
        answer: 3
    },
    {
        num: 9,
        q: `9. Ўзбекистон Республикаси Олий Мажлиси Қонунчилик 
        палатаси ва Сенатининг қўшма мажлислари қачон ўтказилади?`,
        options: [`А) Ўзбекистон Республикаси Президенти қасамёд қилганда`,
            `Б) Ўзбекистон Республикаси Президенти мамлакат 
            ижтимоий-иқтисодий ҳаётининг, ички ва ташқи сиёсатининг энг муҳим масалалари юзасидан нутқ сўзлаганда`,
            `В) Чет давлатларнинг раҳбарлари нутқ сўзлаганда`,
            `Г) Барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 10,
        q: `10. Ўзбекистон Республикасининг Божхона кодекси қачон қабул қилинган?`,
        options: [`А) 20.01.2016 йил`,
            `Б) 22.04.2016 йил`,
            `В) 22.04.2017 йил`,
            `Г) 22.04.2015 йил`,
        ],
        answer: 0
    },
    {
        num: 11,
        q: `11. Мурожаатларнинг турлари қайсилар?`,
        options: [`А) Аризалар, таклифлар ва шикоятлар`,
            `Б) Оғзаки, ёзма ёхуд электрон`,
            `В) Аризалар, илтимоснома ва шикоятлар`,
            `Г) барча жавоблар тўғри`,
        ],
        answer: 0
    },
    {
        num: 12,
        q: `12. Ўзбекистон Республикаси Конституциясининг тузилиши тўғри кўрсатилган қаторни белгиланг.`,
        options: [`А) 126 та модда, 28 та боб, 6 та бўлим`,
            `Б) 127 та модда, 28 та боб, 5 та бўлим`,
            `В) 122 та модда, 28 та боб, 6 та бўлим`,
            `Г) 128 та модда, 26 та боб, 6 та бўлим`,
        ],
        answer: 3
    },
    {
        num: 13,
        q: `13. Конституциясининг асосий принциплари нималардан иборат?`,
        options: [`А) Давлат суверенитети, Халқ ҳокимиятчилиги, 
        Конституция ва қонуннинг устунлиги, Ташқи ва ички  сиёсат `,
            `Б) Давлат суверенитети, Конституция ва қонуннинг устунлиги, Ташқи сиёсат`,
            `В) Давлат суверенитети, Халқ ҳокимиятчилиги, Конституция ва қонуннинг устунлиги, Ташқи сиёсат`,
            `Г) Давлат суверенитети, Халқ ҳокимиятчилиги, Конституция ва қонуннинг устунлиги, Ташқи ва ички  сиёсат `,
        ],
        answer: 2
    },
    {
        num: 14,
        q: `14.Фуқароларнинг сиёсий ҳуқуқлари кўрсатилган қаторни топинг! `,
        options: [`А) Шахсий дахлсизлик ҳуқуқи`,
            `Б) Фикрлаш, сўз ва эътиқод эркинлиги ҳуқуқи`,
            `В) Ижтимоий таъминот олиш ҳуқуқи`,
            `Г) Халқ вакилларига ариза, таклиф ва шикоятлар билан мурожаат қилиш`,
        ],
        answer: 3
    },
    {
        num: 15,
        q: `15. Фуқароларнинг шахсий ҳуқуқ ва эркинликлари кўрсатилган қаторни топинг.`,
        options: [`А) Яшаш ҳуқуқи`,
            `Б) Сиёсий партияларга ва бошқа жамоат бирлашмаларига уюшиш ҳуқуқи`,
            `В) Мулкдор бўлиш ҳуқуқи`,
            `Г) Тиббий хизматдан фойдаланиш ҳуқуқи`,
        ],
        answer: 0
    },
    {
        num: 16,
        q: `16. Фуқароларнинг бурчлари  кўрсатилган қаторни топинг.`,
        options: [`А) Одоб-аҳлоқ ва ҳуқуқ нормаларига риоя қилиш `,
            `Б) Халқининг тарихий, маънавий ва маданий меросини авайлаб асраш`,
            `В) Ахборот хавфсизлиги қоидаларига риоя қилиш`,
            `Г) Жамоат хавфсизлигини  таъминлаш`,
        ],
        answer: 1
    },
    {
        num: 17,
        q: `17. Шартнома шартларини бажармаганлик учун 
        жавобгарлик масаласи шартномада белгиланмаган бўлса қандай жавобгарлик юза келиши мумкин?`,
        options: [`А) Моддий ва номоддий жавобгарлик`,
            `Б) Маъмурий жавобгарлик`,
            `В) Жиноий жавобгарлик`,
            `Г) барчаси тўғри`,
        ],
        answer: 3
    },
    {
        num: 18,
        q: `18. Божхона органларининг байроғи қачон тасдиқланган?`,
        options: [`А) 07.08.2018 йилда `,
            `Б) 12.04.2019 йилда`,
            `В) 12.11.2016 йилда `,
            `Г) 12.08.1997 йилда`,
        ],
        answer: 0
    },
    {
        num: 19,
        q: `19.Ўзбекистон Республикасида нечта сиёсий партиялар мавжуд ?`,
        options: [`А) 5 та`,
            `Б) 4 та`,
            `В) 3 та `,
            `Г) 6 та`,
        ],
        answer: 0
    },
    {
        num: 20,
        q: `20. Бош вазири номзоди ким томонидан таклиф этилади?`,
        options: [`А) Олий Мажлисининг Қонунчилик палатаси томонидан`,
            `Б) Олий Мажлис Сенати томонидан`,
            `В) Ўзбекистон Республикаси Президенти томонидан `,
            `Г) Олий Мажлисининг Қонунчилик палатасига сайловда 
            энг кўп депутатлик ўринларини олган сиёсий партия 
            ёки тенг миқдордаги энг кўп депутатлик ўринларини қўлга киритган бир неча сиёсий партия томонидан`,
        ],
        answer: 3
    },
    {
        num: 21,
        q: `21. Давлат божхона қўмитаси қандай шаклдаги ички идоравий ҳужжатлар қабул қилади?`,
        options: [`А) Ҳайъат қарори `,
            `Б) Буйруқ ва фармойиш`,
            `В) Кўрсатма `,
            `Г) Барча жавоб тўғри`,
        ],
        answer: 3
    },
    {
        num: 22,
        q: `22. Ички идоравий ҳужжат қачондан бошлаб кучга киради?`,
        options: [`А) бир ой `,
            `Б) расмий эълон қилинган кундан`,
            `В) уч ой`,
            `Г) имзоланган кундан бошлаб`,
        ],
        answer: 3
    },
    {
        num: 23,
        q: `23. Норматив-ҳуқуқий ҳужжат тушунчасига қайси қаторда тўғри таъриф берилган?`,
        options: [`А) Норматив-ҳуқуқий ҳужжат амалдаги қонун 
        ҳужжатларига мувофиқ қабул қилинган, умуммажбурий 
        давлат кўрсатмалари сифатида ҳуқуқий нормаларни 
        белгилашга, ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
            `Б) Норматив-ҳуқуқий ҳужжат қонунчиликка мувофиқ 
            қабул қилинган, умуммажбурий давлат кўрсатмалари 
            сифатида ҳуқуқий нормаларни белгилашга қаратилган расмий ҳужжатдир.`,
            `В) Норматив-ҳуқуқий ҳужжат қонунчиликка мувофиқ 
            қабул қилинган, умуммажбурий давлат кўрсатмалари 
            сифатида ҳуқуқий нормаларни белгилашга, 
            ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
            `Г) Норматив-ҳуқуқий ҳужжат умуммажбурий давлат 
            кўрсатмалари сифатида ҳуқуқий нормаларни 
            белгилашга, ўзгартиришга ёки бекор қилишга қаратилган расмий ҳужжатдир.`,
        ],
        answer: 2
    },
    {
        num: 24,
        q: `24. Фуқаро қачондан бошлаб муомала лаёқатига эга  бўлади?`,
        options: [`А) Туғилган пайтдан эътиборан`,
            `Б) Ўн саккиз ёшга тўлгач `,
            `В) Никоҳдан ўтган вақтдан эътиборан `,
            `Г) А ва В жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 25,
        q: `25. Фуқароларнинг бурчлари  кўрсатилган қаторни топинг.`,
        options: [`А) Одоб-аҳлоқ ва ҳуқуқ нормаларига риоя қилиш `,
            `Б) Халқининг тарихий, маънавий ва маданий меросини авайлаб асраш`,
            `В) Ахборот хавфсизлиги қоидаларига риоя қилиш`,
            `Г) Жамоат хавфсизлигини  таъминлаш`,
        ],
        answer: 1
    },

];

console.log(quiz.length); // 

// === in gitBash: ==== 
// node js/question5.js