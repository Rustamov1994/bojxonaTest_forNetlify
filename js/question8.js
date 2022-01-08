// **Question-7**
// *tayyor*
// # 8: “Валюта назорати” йўналиши бўйича малака ошириш курси тингловчилари учун тест саволлари 
"use strick";
// Array of Objects
const quiz = [{
        num: 1,
        q: `Валютани тартибга солувчи давлат органи қайси?`,
        options: [
            ` Давлат божхона қўмитаси`,
            ` Давлат солиқ қўмитаси`,
            ` Марказий банки`,
            ` Молия вазирлиги`,
        ],
        answer: 2
    },
    {
        num: 2,
        q: ` Валюта операцияларининг қандай турлари мавжуд?`,
        options: [
            ` Валюта операциялари ички, ташқи , миллий ва халқаро операцияларга бўлинади`,
            ` Валюта операциялари миллий ва халқаро операцияларга бўлинади`,
            ` Валюта операциялари ички ва ташқи операцияларга бўлинади`,
            ` Валюта операциялари ички ва халқаро операцияларга бўлинади`,
        ],
        answer: 3
    },
    {
        num: 3,
        q: `Ўзбекистон Республикасининг Божхона кодексининг 
        нечанчи бўлим ва начанчи бобида Валюта назорати келтирилган? `,
        options: [
            ` V бўлим,  34-боб.`,
            ` V бўлим,  35-боб`,
            ` VI бўлим, 36-боб`,
            ` VI бўлим, 37-боб`,
        ],
        answer: 0
    },
    {
        num: 4,
        q: `Экспорт божхона режимида товарлар олдиндан тўлов 
        асосида олиб чиқилаётган бўлса Божхона юк 
        декларациясининг 20- графа учинчи қисмида қайси рақамли код кўрсатилади?`,
        options: [
            ` «10»`,
            ` «30»`,
            ` «20»`,
            ` «40»`,
        ],
        answer: 0
    },
    {
        num: 5,
        q: ` Қанча миқдоргача булган товарларни электрон 
        тижорат орқали божхона юк декларациясини 
        расмийлаштирмасдан, ТСОЯЭАТ киритмасдан, почта 
        хизматларини кўрсатиш қоидаларига мувофиқ реализация 
        қилиниши мумкин?`,
        options: [
            ` 1000 (бир минг) АҚШ долларигача`,
            ` 2000 (икки минг) АҚШ долларигача`,
            ` 3000 (уч минг) АҚШ долларигача`,
            ` 5000 (беш минг) АҚШ долларигача`,
        ],
        answer: 3
    },
    {
        num: 6,
        q: `«Валютани тартибга солиш тўғрисида»ги қонуннинг 
        нечанчи моддасида Ўзбекистон Республикаси худудига нақд 
        валютани олиб кириш ва олиб чиқиш тартиби келтирилган?`,
        options: [
            ` 20-модда`,
            ` 22-модда`,
            ` 24-модда`,
            ` 18-модда`,
        ],
        answer: 1
    },
    {
        num: 7,
        q: `Валютани тартибга солиш тўғрисида»ги қонунга асосан 
        Валютани назорат қилувчи органлар калтирилган қаторни топинг?`,
        options: [
            ` Ўзбекистон Республикаси Марказий банки ва Ҳисоб палатаси`,
            ` Молия вазирлиги`,
            ` Давлат солиқ қўмитаси ва Давлат божхона қўмитаси`,
            ` Барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 8,
        q: `Божхона юк декларациясининг нечанчи  графаларида курс валюталар кўрсатилган булади?`,
        options: [
            `  13 ва 20- графалар`,
            ` 13 ва 23- графалар`,
            ` 12 ва 20- графалар`,
            ` 20 ва 24- графалар`,
        ],
        answer: 1
    },
    {
        num: 9,
        q: ` «Иена» қайси давлат пул бирлиги хисобланади?`,
        options: [
            ` Япония`,
            ` Хитой`,
            ` Кореа`,
            ` Ерон`,
        ],
        answer: 0
    },
    {
        num: 10,
        q: ` Божхона юк декларациясининг 44-графасида Контракт (шартнома, келишув) қайси тартиб рақам билан ёзилади?`,
        options: [
            ` 301 КНТ`,
            ` 302 КНТ`,
            ` 301 КНТ`,
            ` 303 КНТ`,
        ],
        answer: 0
    },
    {
        num: 11,
        q: ` Экспорт божхона режимида Божхона юк 
        декларациясининг 20- графа учинчи қисмида «60» коди 
        келтирилган бўлса товарлар қандай шарт асосида олиб чиқилаётган бўлади?`,
        options: [
            ` банк кафолати`,
            ` консигнация бўйича`,
            ` суғурталаш полиси`,
            ` бартер операцияси`,
        ],
        answer: 1
    },
    {
        num: 12,
        q: ` Божхона юк декларациясининг нечанчи графасида Контракт (шартнома, келишув)даги курс валюта кўрсатилади?`,
        options: [
            ` 13- графалар`,
            ` 20- графалар`,
            ` 23- графалар`,
            ` 22- графалар`,
        ],
        answer: 2
    },
    {
        num: 13,
        q: ` Экспорт божхона режимида товарлар банк кафолати 
        асосида олиб чиқилаётган бўлса Божхона юк 
        декларациясининг 20- графа учинчи қисмида қайси рақамли код кўрсатилади?`,
        options: [
            ` «10»`,
            ` «30»`,
            ` «20»`,
            ` «40»`,
        ],
        answer: 1
    },
    {
        num: 14,
        q: ` Экспорт божхона режимида Божхона юк 
        декларациясининг 20- графа учинчи қисмида «80» коди 
        келтирилган бўлса товарлар қандай шарт асосида олиб чиқилаётган бўлади?`,
        options: [
            ` бартер операцияси`,
            ` экспорт факти`,
            ` консигнация`,
            ` беғараз (тўловсиз)`,
        ],
        answer: 3
    },
    {
        num: 15,
        q: ` Экспорт божхона режимида товарлар экспорт 
        контрактларини сиёсий ва тижорат хавфларидан суғурталаш 
        полиси асосида олиб чиқилаётган бўлса Божхона юк 
        декларациясининг 20- графа учинчи қисмида қайси рақамли код кўрсатилади?`,
        options: [
            ` «40»`,
            ` «30»`,
            ` «20»`,
            ` «10»`,
        ],
        answer: 0
    },
    {
        num: 16,
        q: ` Олдиндан ҳақи тўланмасдан, аккредитив очилмасдан, 
        банк кафолати расмийлаштирилмасдан ва экспорт 
        контрактини сиёсий ва тижорат таваккалчиликларидан 
        суғурта қилиш бўйича полис мавжуд бўлмасдан хорижий 
        валютага экспорт қилиш бўйича имтиёзлар татбиқ 
        этилмайдиган товарлар рўйхати қайси меьёори хужжатда келтирилган?`,
        options: [
            ` 2017 йил 15 декабрдаги ПФ-5286-сонли фармонида`,
            ` 2017 йил 3 ноябрдаги ПҚ-3351-сон қарорида`,
            ` 2020 йил 14 майдаги  283-сонли қарорида`,
            ` 2017 йил 3 ноябрьдаги декабрдаги ПФ-5215-сонли фармонида`,
        ],
        answer: 1
    },
    {
        num: 17,
        q: ` Экспорт божхона режимида товарлар бартер 
        операциялари олиб чиқилаётган бўлса Божхона юк 
        декларациясининг 20- графа учинчи қисмида қайси рақамли код кўрсатилади?`,
        options: [
            ` «80»`,
            ` «70»`,
            ` «60»`,
            ` «40»`,
        ],
        answer: 1
    },
    {
        num: 18,
        q: ` Экспорт контракти бўйича тушум тушиши ёки 
        товарларни қайта олиб кириш муддати товарларга нисбатан 
        — «экспорт» божхона режими бўйича божхона юк 
        декларацияси расмийлаштирилган санадан бошлаб қанча муддатдан ошиб кетмаслиги керак.`,
        options: [
            ` 60 кундан`,
            ` 90 кундан`,
            ` 120 кундан`,
            ` 180 кундан`,
        ],
        answer: 3
    },
    {
        num: 19,
        q: ` Ташқи савдо контрактларида қандай асосий бўлимлар ва маълумотлар бўлиши керак?`,
        options: [
            ` Муқаддима, Контрактнинг мавзуси, Контрактнинг 
            умумий суммаси, товарнинг ўлчов бирлигидаги нархи кўрсатилади`,
            ` Етказиб беришнинг базис шартлари, Товарни етказиб 
            бериш, ишларни бажариш ва хизматлар кўрсатиш муддати ёки санаси кўрсатилади`,
            ` Товарнинг келиб чиқиши, ишларни бажариш ва 
            хизматлар кўрсатиш жойи, Томонларнинг жавобгарлиги, Томонларнинг реквизитлари, Ташқи савдо 
            контрактининг матни давлат тилида ёки томонларнинг келишувига кўра бошқа тилда баён қилиниши керак`,
            ` Барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 20,
        q: ` Валюта қимматликлари келтирилмаган қаторни топинг?`,
        options: [
            ` Миллий валюта`,
            ` Чет эл валютаси`,
            ` Номинали чет эл валютасида ифодаланган қимматли қоғозлар ва тўлов ҳужжатлари`,
            ` Соф қуйма олтин`,
        ],
        answer: 0
    },
    {
        num: 21,
        q: ` ТСОЯЭАТда келтирилган  идентификация рақамлар сони нечта?`,
        options: [
            ` 25`,
            ` 27`,
            ` 29`,
            ` 24`,
        ],
        answer: 1
    },
    {
        num: 22,
        q: ` Экспорт-консигнация контрактини  икки рақамдан иборат кодини топинг?`,
        options: [
            ` 07`,
            ` 05`,
            ` 08`,
            ` 10`,
        ],
        answer: 2
    },
    {
        num: 23,
        q: ` ТСОЯЭАТдаги идентификация рақамларининг «23 ва 24» 
        тартиб рақамларида «04» коди кўрсатилган бўлса қандай шартнома эканлигини билдиради?`,
        options: [
            ` Марказлаштирилган экспорт контракти`,
            ` Марказлаштирилган импорт контракти`,
            ` Республика ҳудудида экспорт контракти`,
            ` Бартер контракти`,
        ],
        answer: 0
    },
    {
        num: 24,
        q: ` ТСОЯЭАТдаги идентификация рақамларининг «23 ва 24» 
        тартиб рақамларида «11» коди кўрсатилган бўлса қандай шартнома эканлигини билдиради?`,
        options: [
            ` Интернет жаҳон ахборот тармоғи орқали дастурий таъминот экспорти`,
            ` Интернет жаҳон ахборот тармоғидаги савдо майдончалари орқали экспорт контракти`,
            ` Қайта ишлаш (республикадан ташқарид бўйича импорт контракти`,
            ` Қайта ишлаш (республика ҳудудид бўйича экспорт контракти`,
        ],
        answer: 3
    },
    {
        num: 25,
        q: ` ТСОЯЭАТдаги идентификация рақамларининг «23 ва 24» 
        тартиб рақамларида «07» коди кўрсатилган бўлса қандай шартнома эканлигини билдиради?`,
        options: [
            ` Инвойс асосида экспорт`,
            ` Экспорт-консигнация контракти`,
            ` Экспорт биржа (ярмарк контракти`,
            ` Олиб кириш контракти`,
        ],
        answer: 2
    },
    {
        num: 26,
        q: ` Олиб чиқиш, олиб кириш, сотиш ва сотиб олиш каби 
        янги турдаги контрактлар қайси меьёори хужжатда келтирилган?`,
        options: [
            ` 2021 йил июль майдаги ВМ -428-сонли қарорида`,
            ` 2021 йил июль майдаги ВМ -429-сонли қарорида`,
            ` 2020 йил 14 майдаги ВМ -283-сонли қарорида`,
            ` 2020 йил 26 октиябрдаги ЎРҚ-725`,
        ],
        answer: 1
    },
    {
        num: 27,
        q: ` Олиб чиқиш контракти бўйича тушум тушиши ёки 
        товарларни қайта олиб кириш муддати товарлар реэкспорт 
        божхона режимига расмийлаштирилган санадан бошлаб неча кундан ошиб кетмаслиги керак?`,
        options: [
            ` 60 кундан`,
            ` 180 кундан`,
            ` 120 кундан`,
            ` 90 кундан`,
        ],
        answer: 1
    },
    {
        num: 28,
        q: ` Швецария миллий валютаси қайси қаторда тўғри кўрсатилган?`,
        options: [
            ` Еуро`,
            ` Лира`,
            ` Франк`,
            ` Швецария доллари`,
        ],
        answer: 2
    },
    {
        num: 29,
        q: ` Ўзбекистон Республикаси Давлат божхона хизмати 
        органларига қайси хужжат билан  «валютани назорат қилувчи орган» мақоми барилган?`,
        options: [
            ` Ўзбекистон Республикасининг «Валютани тартибга солиш тоғрисида»ги Қонун`,
            ` Ўзбекистон Республикасининг «Давлат божхона хизмати »ги Қонун тоғрисида»ги Қонун`,
            ` Ўзбекистон Республикасининг Божхона кодекси`,
            ` Ўзбекистон Республикасининг Солиқ кодекси`,
        ],
        answer: 0
    },
    {
        num: 30,
        q: ` «Валютани тартибга солиш тўғрисида»ги қонуннинг асосий принциплари қайси қаторда тўғри кўрсатилган?`,
        options: [
            ` Валютани тартибга солиш ҳамда валютани назорат қилиш тизимининг ягоналиги`,
            ` Валютани тартибга солиш ва валютани назорат қилиш 
            соҳасидаги давлат сиёсатини амалга оширишда иқтисодий чораларнинг устуворлиги`,
            ` Резидентлар ва норезидентларнинг валюта 
            операцияларига давлат органларининг қонунга хилоф равишда аралашувига йўл қўйилмаслиги`,
            ` Барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 31,
        q: `  Давлат божлари, йиғимлари ва бошқа мажбурий тўловлар қандай валютада амалга оширилади?`,
        options: [
            ` Чет эл валютаси`,
            ` Фақат Миллий валюта`,
            ` Фақат Ўзбекистон Республикаси валютасида ундирилади, бундан консуллик йиғимлари мустасно`,
            ` Исталган валютада амалга оширилиши мумкун`,
        ],
        answer: 2
    },
    {
        num: 32,
        q: ` Пул маблағларида ўзаро ҳисоб-китоблар қилмаган 
        ҳолда муайян миқдордаги бир ёки бир неча турдаги 
        товарларни бошқасига алмаштириш назарда тутилган 
        Ўзбекистон Республикасининг резиденти билан норезиденти ўртасида тузилган контракт қандай контракт хисоблнади?`,
        options: [
            ` Бартер контракти`,
            ` Экспорт-консигнация контракти`,
            ` Лизинг контракти`,
            ` Сотиш контракти`,
        ],
        answer: 0
    },
    {
        num: 33,
        q: `  Жисмоний шахслар қанча миқдордаги нақд валютани 
        йўловчи божхона декларациясини тўлдиримасдан  олиб кириш ёки олиб чиқиб кетиши мумкун?`,
        options: [
            ` 50 000 000 (эллик миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 20 000 000 (йигирма миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 70 000 000 (етмиш миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 100 000 000 (юз миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
        ],
        answer: 2
    },
    {
        num: 34,
        q: ` Жисмоний шахслар томонидан Ўзбекистон Республикаси 
        ҳудудига божхона назорати қоидаларига риоя қилган 
        ҳолда,  канчагача нақд валюта маблағларини олиб кириш мумкун?`,
        options: [
            ` 50 000 000 (эллик миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 70 000 000 (етмиш миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 100 000 000 (юз миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` чекланмаган миқдорда`,
        ],
        answer: 3
    },
    {
        num: 35,
        q: ` Жисмоний шахслар томонидан Ўзбекистон Республикаси 
        ҳудудидан божхона назорати қоидаларига риоя қилган 
        ҳолда,  канчагача нақд валюта маблағларини олиб чиқиб кетиши мумкун?`,
        options: [
            ` 70 000 000 (етмиш миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 50 000 000 (эллик миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` 100 000 000 (юз миллион) сўм эквивалентидан ортиқ бўлмаган миқдорда`,
            ` чекланмаган миқдорда`,
        ],
        answer: 2
    },
    {
        num: 36,
        q: ` Қандай холларда резидентлар томонидан белгиланган 
        миқдордан ортиқ нақд валюта маблағларини Ўзбекистон 
        Республикасидан ташқарига олиб чиқиб кетишга йўл қўйилади?`,
        options: [
            ` Йўловчи божхона декларацияси асосида олиб чиқиб кетиш мумкун`,
            ` Хорижий давлатларга хизмат сафарига кетаётган 
            Ҳукумат делегацияси аъзолари учун Вазирлар Маҳкамасининг фармойиши асосида`,
            ` Марказий банки рухсатномаси асосида`,
            ` Олиб чиқиб кетиши мумкун эмас`,
        ],
        answer: 1
    },
    {
        num: 37,
        q: ` Қандай холларда норезидентлар томонидан 
        белгиланган миқдордан ортиқ нақд валюта маблағларини 
        Ўзбекистон Республикасидан ташқарига олиб чиқиб кетишга йўл қўйилади?`,
        options: [
            ` Ўзбекистон Республикасига кириш чоғида 
            расмийлаштирилган йўловчи божхона декларацияси 
            асосида декларация қилинган маблағлар доирасида, 
            шунингдек, республикада белгиланган тартибда ташкил 
            қилинган халқаро мусобақалар (танловлар, олимпиадалар) совриндорлари ёки қатнашчилари 
            томонидан маблағларнинг қонунийлигини тасдиқловчи ҳужжатлар асосида`,
            ` Йўловчи божхона декларацияси асосида олиб чиқиб кетиш мумкун`,
            ` Марказий банки рухсатномаси асосида`,
            ` Олиб чиқиб кетиши мумкун эмас`,
        ],
        answer: 0
    },
    {
        num: 38,
        q: ` Божхона юк декларациясининг нечанчи графасида АҚШ долларининг 
        Ўзбекистон Республикаси миллий валютасига нисбатан курси кўрсатилади?`,
        options: [
            ` 23- графалар`,
            ` 20- графалар`,
            ` 13- графалар`,
            ` 22- графалар`,
        ],
        answer: 2
    },
    {
        num: 39,
        q: `  Божхона юк декларациясининг нечанчи графасида Валюталар 
        таснифлагичига мувофиқ ташқи савдо контракти (шартномаси, келишуви) валютасининг рақамли коди кўрсатилади?`,
        options: [
            ` 13- графалар`,
            ` 20- графалар`,
            ` 22- графалар`,
            ` 24- графалар`,
        ],
        answer: 1
    },
    {
        num: 40,
        q: ` Божхона органлари Валютага оид қонун хужжатлари бузилишларининг 
        белгиларини аниқлаганда қайси давлат органига бу тўғрисида хабар беради?`,
        options: [
            ` Ўзбекистон Республикасининг Давлат солиқ қўмитасига`,
            `  Ўзбекистон Республикасининг Савдо-саноат палатасига`,
            `  Ўзбекистон Республикасининг Марказий банкига`,
            `  Ўзбекистон Республикасининг Молия вазирлигига`,
        ],
        answer: 0
    },
    {
        num: 41,
        q: ` Ўзбекистон Республикаси Президенти ва Ўзбекистон Республикаси 
        Ҳукуматининг қарорлари асосида экспорт қилинадиган буюмлар ва 
        маҳсулотла рўйхати қайси меьёори хужжатда келтирилган?`,
        options: [
            ` 2020 йил 14 майдаги ВМ 283-сонли қарорида`,
            ` 2017 йил 3 ноябрьдаги ПФ-5215-сонли фармонида`,
            ` 2017 йил 3 ноябрдаги ПҚ-3351-сон қарорида`,
            ` 2017 йил 15 декабрдаги ПФ-5286-сонли фармонида`,
        ],
        answer: 3
    },
    {
        num: 42,
        q: ` Ўзбекистон Республикаси ҳудудида товарлар учун тарифлар, нархлар 
        шунингдек юридик шахсларнинг устав фондлари (устав капиталлари) 
        миқдорларига доир талаблар қандай валютада амалга оширилади?`,
        options: [
            ` Фақат Ўзбекистон Республикаси валютасида`,
            ` Фақат чет эл валютасида`,
            ` Ўзбекистон Республикаси ва чет эл валютасида`,
            ` Исталган валютада`,
        ],
        answer: 0
    },
    {
        num: 43,
        q: `Қайси меъёри ҳужжат билан экспорт шартномаларини Ўзбекистон 
        Республикаси давлат божхона хизмати органларида ҳисобга қўйиш борасидаги талаб бекор қилинди?`,
        options: [
            ` 2018 йил 13 апрелдаги ПФ 5414-сонли фармонида`,
            ` 2020 йил 6 июндаги ПФ 6005-сонли фармонида`,
            ` 2018 йил 26 ноябрьдаги ПФ 5582-сонли фармонида`,
            ` 2021 йил 10 сентиябрдаги ПФ 6310-сонли фармонида`,
        ],
        answer: 2
    },
    {
        num: 44,
        q: ` Товарлар (ишлар ва хизматлар) импортига импорт қилувчи билан 
        Ўзбекистон Республикасининг норезиденти ўртасида тузилган контракт қандай  контракт деб юритилад?`,
        options: [
            ` Импорт контракти`,
            ` Сотиб олиш контракти`,
            ` Олиб кириш контракти`,
            ` Импорт биржа  контракти`,
        ],
        answer: 0
    },
    {
        num: 45,
        q: ` Консигнант ва консигнатор орасида товарни консигнатор орқали 
        сотишга тузилган контракт қандай  контракт деб юритилад?`,
        options: [
            `  Экспорт контракти`,
            ` Экспорт консигнация контракти`,
            ` Экспорт биржа (ярмарк контракти`,
            ` Импорт консигнация контракти`,
        ],
        answer: 1
    },
    {
        num: 46,
        q: ` Ҳукумат номидан ёки унинг кафолати остида давлат эхтиёжлари учун 
        зарур хажмларда экспорт ва импорт товарларини етказиб беришга тузилган контракт қандай  контракт деб юритилад?`,
        options: [
            ` Биржа контракти`,
            ` Лизинг асосидаги контракт`,
            ` Марказлаштирилган контракти`,
            ` Бартер контракти`,
        ],
        answer: 2
    },
    {
        num: 47,
        q: ` Инвойсларда қандай асосий маълумотлар бўлиши керак?`,
        options: [
            ` Хўжалик юритувчи субъектнинг номи ва унинг реквизитлари, хорижий 
            шерикнинг номи ва унинг реквизитлари, инвойс суммаси`,
            ` Хўжалик юритувчи субъектнинг идентификация рақами (СТИР), 
            товарлар (ишлар, хизматлар) номи, товарлар (ишлар, хизматлар)нинг ўлчов бирлиги`,
            ` Товарлар (ишлар, хизматлар) миқдори, товарлар (ишлар, хизматлар) 
            нархи, товарлар (ишлар, хизматлар)ни етказиб бериш қиймати, 
            «Инкотермс» бўйича етказиб бериш шартлари;ташиш тури`,
            ` Барча жавоблар тўғри`,
        ],
        answer: 3
    },
    {
        num: 48,
        q: ` Валютани назорат қилувчи органларнинг валютани тартибга солиш 
        тўғрисидаги қонунчилик талабларига резидентлар ва норезидентлар 
        томонидан риоя этилишини таъминлашга қаратилган фаолияти қандай фаолияти деб юритилади?`,
        options: [
            ` Валютани тартибга солиш`,
            ` Валюта операциялари`,
            ` Валютани назорат қилиш`,
            ` Валюта қимматликлари`,
        ],
        answer: 2
    },
    {
        num: 49,
        q: ` Божхона юк декларациясининг нечанчи графасида контракт (шартнома, келишув) рақами ва санаси кўрсатилади?`,
        options: [
            ` 22- графалар`,
            ` 24- графалар`,
            ` 40- графалар`,
            ` 44- графалар`,
        ],
        answer: 3
    },

];

console.log(quiz.length); // 

// === in gitBash: ==== 
// node js/question8.js