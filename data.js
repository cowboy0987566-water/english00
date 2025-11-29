// ============================================================
//  GEPT 單字資料庫
//  格式說明：
//  level: 'elem' (初級), 'inter' (中級), 'adv' (高級)
//  pos: 詞性 (v. n. adj. adv.)
// ============================================================

const fullDictionary = [
    // --- 初級 (Elementary) ---
    {
        word: "Break",
        level: "elem",
        kk: "[brek]",
        pos: "v.",
        verbForms: "break / broke / broken",
        defEn: "To separate into two or more pieces.",
        defCh: "打破；損壞；休息",
        keyPoint: { 
            title: "Trap!", 
            desc: "作名詞時 'Take a break' 是休息，不是打破東西。", 
            exEn: "I need to take a break.", 
            exCh: "我需要休息一下。" 
        },
        synonyms: [{en: "Smash", ch: "粉碎"}, {en: "Crack", ch: "裂開"}],
        antonyms: [{en: "Repair", ch: "修理"}, {en: "Fix", ch: "固定"}],
        collocs: [
            { en: "break the law", ch: "違法", sentEn: "He broke the law by stealing.", sentCh: "他因偷竊而違法。" },
            { en: "take a break", ch: "休息一下", sentEn: "Let's take a break for lunch.", sentCh: "我們休息一下吃午餐吧。" }
        ],
        media: [
            { type: "TV Show", source: "Friends", en: "We were on a break!", ch: "我們當時在冷靜期！" },
            { type: "Song", source: "Queen", en: "I want to break free.", ch: "我想要自由。" },
            { type: "Movie", source: "Titanic", en: "Don't break my heart.", ch: "別傷我的心。" }
        ]
    },

    // --- 中級 (Intermediate) ---
    {
        word: "Ability",
        level: "inter",
        kk: "[əˋbɪlətɪ]",
        pos: "n.",
        defEn: "The physical or mental power or skill needed to do something.",
        defCh: "能力；才能",
        keyPoint: { 
            title: "Exam Focus", 
            desc: "後面常接不定詞 to V (ability to do something)。", 
            exEn: "She has the ability to solve complex problems.", 
            exCh: "她有解決複雜問題的能力。" 
        },
        synonyms: [{en: "Capability", ch: "能力"}, {en: "Skill", ch: "技巧"}],
        antonyms: [{en: "Inability", ch: "無能"}],
        collocs: [
            { en: "ability to do", ch: "做某事的能力", sentEn: "She has the ability to learn quickly.", sentCh: "她有快速學習的能力。" },
            { en: "natural ability", ch: "天賦", sentEn: "He has a natural ability for music.", sentCh: "他有音樂天賦。" }
        ],
        media: [
            { type: "Movie", source: "Spider-Man", en: "With great power comes great responsibility.", ch: "能力越強，責任越大。" },
            { type: "Book", source: "Harry Potter", en: "It is our choices that show what we truly are, far more than our abilities.", ch: "決定我們成為怎樣的人的，是我們的選擇，而不僅是我們的能力。" }
        ]
    },

    // --- 高級 (Advanced) ---
    {
        word: "Advocate",
        level: "adv",
        kk: "[ˋædvəkɪt]",
        pos: "v.",
        verbForms: "advocate / advocated / advocated",
        defEn: "To publicly support or suggest an idea.",
        defCh: "擁護；提倡",
        keyPoint: { 
            title: "Usage Note", 
            desc: "作動詞時，結構為 Advocate (for) sth。作名詞時，重音在最後音節 -cate /keɪt/。", 
            exEn: "Doctors advocate a healthy lifestyle.", 
            exCh: "醫生提倡健康的生活方式。" 
        },
        synonyms: [{en: "Support", ch: "支持"}, {en: "Recommend", ch: "推薦"}],
        antonyms: [{en: "Oppose", ch: "反對"}, {en: "Criticize", ch: "批評"}],
        collocs: [
            { en: "strongly advocate", ch: "強力主張", sentEn: "The group strongly advocates for human rights.", sentCh: "該團體強力主張人權。" },
            { en: "advocate peace", ch: "提倡和平", sentEn: "We must advocate peace in times of war.", sentCh: "戰時我們必須提倡和平。" }
        ],
        media: [
            { type: "Speech", source: "MLK Jr.", en: "I advocate for nonviolence and love.", ch: "我提倡非暴力與愛。" },
            { type: "Movie", source: "Hunger Games", en: "I advocate for the people of Panem.", ch: "我為施惠國的人民請命。" }
        ]
    }
];
