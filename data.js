// ============================================================
//  GEPT 單字資料庫 (v24.0 結構分離版)
//  
//  使用說明：
//  1. 此檔案僅存放資料，不包含程式邏輯。
//  2. 若要新增單字，請複製一個 { ... }, 區塊貼在最後面。
//  3. 記得每個單字之間要用「逗號 ,」隔開。
// ============================================================

const fullDictionary = [
    // ==========================================
    //  🟢 初級 (Elementary)
    // ==========================================
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
    {
        word: "Time",
        level: "elem",
        kk: "[taɪm]",
        pos: "n.",
        defEn: "A particular point in the day or minute of an hour.",
        defCh: "時間；次數；倍數",
        keyPoint: { 
            title: "Exam Focus", 
            desc: "分辨 'On time' (準時) 與 'In time' (及時)。Time 也可以當「倍數」用 (three times 三倍)。", 
            exEn: "We arrived just in time.", 
            exCh: "我們剛好及時趕上。" 
        },
        synonyms: [{en: "Moment", ch: "時刻"}, {en: "Period", ch: "期間"}],
        antonyms: [],
        collocs: [
            { en: "spend time", ch: "花時間", sentEn: "I spend time with my family.", sentCh: "我花時間陪伴家人。" },
            { en: "on time", ch: "準時", sentEn: "The train arrived on time.", sentCh: "火車準時抵達。" }
        ],
        media: [
            { type: "Movie", source: "In Time", en: "For a few to be immortal, many must die.", ch: "為了讓少數人永生，多數人必須犧牲。" },
            { type: "Song", source: "Cyndi Lauper", en: "If you're lost you can look and you will find me, time after time.", ch: "如果你迷路了，只要尋找就能發現我，一次又一次。" }
        ]
    },
    {
        word: "Call",
        level: "elem",
        kk: "[kɔl]",
        pos: "v.",
        verbForms: "call / called / called",
        defEn: "To give someone or something a name, or to speak to someone by phone.",
        defCh: "打電話；稱呼；呼叫",
        keyPoint: { 
            title: "Usage Note", 
            desc: "Call 還有「稱呼」的意思。結構：Call + O + OC (稱呼某人為...)", 
            exEn: "Please call me Andy.", 
            exCh: "請叫我安迪。" 
        },
        synonyms: [{en: "Phone", ch: "打電話"}, {en: "Name", ch: "命名"}],
        antonyms: [],
        collocs: [
            { en: "make a call", ch: "打電話", sentEn: "I need to make a phone call.", sentCh: "我需要打個電話。" },
            { en: "call off", ch: "取消", sentEn: "They called off the meeting.", sentCh: "他們取消了會議。" }
        ],
        media: [
            { type: "Song", source: "Carly Rae Jepsen", en: "Here's my number, so call me, maybe.", ch: "這是我的號碼，或許打給我吧。" },
            { type: "Movie", source: "Ghostbusters", en: "Who you gonna call? Ghostbusters!", ch: "你要打給誰？魔鬼剋星！" }
        ]
    },
    {
        word: "Happy",
        level: "elem",
        kk: "[ˋhæpɪ]",
        pos: "adj.",
        defEn: "Feeling, showing, or causing pleasure or satisfaction.",
        defCh: "快樂的；幸福的",
        keyPoint: { 
            title: "Collocation", 
            desc: "Happy with (對...滿意)。Happy to V (很高興做...)", 
            exEn: "I am happy to help you.", 
            exCh: "我很樂意幫助你。" 
        },
        synonyms: [{en: "Glad", ch: "高興的"}, {en: "Joyful", ch: "喜悅的"}],
        antonyms: [{en: "Sad", ch: "難過的"}, {en: "Unhappy", ch: "不快樂的"}],
        collocs: [
            { en: "happy ending", ch: "快樂結局", sentEn: "I love movies with a happy ending.", sentCh: "我喜歡有快樂結局的電影。" },
            { en: "happy for you", ch: "為你高興", sentEn: "I'm so happy for you!", sentCh: "我真為你感到高興！" }
        ],
        media: [
            { type: "Song", source: "Pharrell Williams", en: "Because I'm happy, clap along if you feel like a room without a roof.", ch: "因為我很快樂，如果你覺得像在沒有屋頂的房間般自由，就跟著拍手吧。" }
        ]
    },
    {
        word: "Abroad",
        level: "elem",
        kk: "[əˋbrɔd]",
        pos: "adv.",
        defEn: "In or to a foreign country.",
        defCh: "在國外；到國外",
        keyPoint: { 
            title: "Grammar", 
            desc: "Abroad 是副詞，前面不加介系詞 (不能說 go to abroad，要說 go abroad)。", 
            exEn: "She plans to study abroad.", 
            exCh: "她計畫出國留學。" 
        },
        synonyms: [{en: "Overseas", ch: "海外"}],
        antonyms: [{en: "Home", ch: "國內/家"}],
        collocs: [
            { en: "go abroad", ch: "出國", sentEn: "We want to go abroad for vacation.", sentCh: "我們想出國度假。" },
            { en: "study abroad", ch: "留學", sentEn: "Studying abroad is a great experience.", sentCh: "留學是很棒的經驗。" }
        ],
        media: [
            { type: "Movie", source: "Spider-Man: Far From Home", en: "I'm going abroad, to Europe.", ch: "我要出國了，去歐洲。" }
        ]
    },
    {
        word: "Absent",
        level: "elem",
        kk: "[ˋæbsənt]",
        pos: "adj.",
        defEn: "Not in the place where you are expected to be.",
        defCh: "缺席的；不在場的",
        keyPoint: { 
            title: "Usage", 
            desc: "常搭配介系詞 from (absent from school/work)。", 
            exEn: "He was absent from school yesterday.", 
            exCh: "他昨天缺課。" 
        },
        synonyms: [{en: "Missing", ch: "失蹤的"}, {en: "Away", ch: "不在的"}],
        antonyms: [{en: "Present", ch: "出席的"}],
        collocs: [
            { en: "absent from", ch: "缺席...", sentEn: "Why were you absent from the meeting?", sentCh: "你為什麼缺席會議？" },
            { en: "absent-minded", ch: "心不在焉的", sentEn: "He is very absent-minded today.", sentCh: "他今天很心不在焉。" }
        ],
        media: [
            { type: "Movie", source: "Ferris Bueller's Day Off", en: "Bueller?... Bueller?... He's absent.", ch: "布勒？...布勒？...他缺席了。" }
        ]
    },
    {
        word: "Accept",
        level: "elem",
        kk: "[əkˋsɛpt]",
        pos: "v.",
        verbForms: "accept / accepted / accepted",
        defEn: "To agree to take something.",
        defCh: "接受；答應；接納",
        keyPoint: { 
            title: "Confusing Words", 
            desc: "Accept (接受) vs. Except (除了...之外)。發音很像但意思不同。", 
            exEn: "I accept your gift, except the card.", 
            exCh: "我收下你的禮物，除了那張卡片。" 
        },
        synonyms: [{en: "Receive", ch: "收到"}, {en: "Agree", ch: "同意"}],
        antonyms: [{en: "Refuse", ch: "拒絕"}, {en: "Reject", ch: "駁回"}],
        collocs: [
            { en: "accept an apology", ch: "接受道歉", sentEn: "Please accept my apology.", sentCh: "請接受我的道歉。" },
            { en: "accept a challenge", ch: "接受挑戰", sentEn: "Are you ready to accept the challenge?", sentCh: "你準備好接受挑戰了嗎？" }
        ],
        media: [
            { type: "Movie", source: "Twilight", en: "I've accepted that.", ch: "我已經接受了這個事實。" },
            { type: "Song", source: "Lady Gaga", en: "I'm on the right track, baby, I was born this way.", ch: "我走在正道上，寶貝，我生來如此（自我接納）。" }
        ]
    },
    {
        word: "Accident",
        level: "elem",
        kk: "[ˋæksədənt]",
        pos: "n.",
        defEn: "Something bad that happens that is not expected or intended.",
        defCh: "意外事故；偶然",
        keyPoint: { 
            title: "Collocation", 
            desc: "By accident (偶然地) = By chance。相反詞是 On purpose (故意地)。", 
            exEn: "We met by accident.", 
            exCh: "我們偶然相遇。" 
        },
        synonyms: [{en: "Crash", ch: "撞車"}, {en: "Mishap", ch: "不幸事故"}],
        antonyms: [{en: "Plan", ch: "計畫"}, {en: "Intent", ch: "意圖"}],
        collocs: [
            { en: "car accident", ch: "車禍", sentEn: "He was injured in a car accident.", sentCh: "他在車禍中受傷了。" },
            { en: "by accident", ch: "意外地", sentEn: "I deleted the file by accident.", sentCh: "我不小心刪掉了檔案。" }
        ],
        media: [
            { type: "Movie", source: "Kung Fu Panda", en: "There are no accidents.", ch: "世上沒有意外。" }
        ]
    },
    {
        word: "Active",
        level: "elem",
        kk: "[ˋæktɪv]",
        pos: "adj.",
        defEn: "Busy with a particular activity.",
        defCh: "活躍的；積極的",
        keyPoint: { 
            title: "Grammar", 
            desc: "Active Voice (主動語態) vs. Passive Voice (被動語態)。", 
            exEn: "Stay active to be healthy.", 
            exCh: "保持活躍以維持健康。" 
        },
        synonyms: [{en: "Energetic", ch: "精力充沛的"}, {en: "Lively", ch: "活潑的"}],
        antonyms: [{en: "Passive", ch: "被動的"}, {en: "Lazy", ch: "懶惰的"}],
        collocs: [
            { en: "active part", ch: "積極參與", sentEn: "She took an active part in the discussion.", sentCh: "她積極參與討論。" },
            { en: "stay active", ch: "保持活力", sentEn: "My grandfather tries to stay active.", sentCh: "我祖父試著保持活力。" }
        ],
        media: [
            { type: "Song", source: "Imagine Dragons", en: "I'm waking up, I feel it in my bones.", ch: "我醒來了，感覺深入骨髓。" }
        ]
    },

    // ==========================================
    //  🟡 中級 (Intermediate)
    // ==========================================
    {
        word: "Ability",
        level: "inter",
        kk: "[əˋbɪlətɪ]",
        pos: "n.",
        defEn: "The physical or mental power or skill needed to do something.",
        defCh: "能力；才能",
        keyPoint: { 
            title: "Exam Focus", 
            desc: "後面常接不定詞 to V (ability to do something)，不可接 V-ing。", 
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
    {
        word: "Advantage",
        level: "inter",
        kk: "[ədˋvæntɪdʒ]",
        pos: "n.",
        defEn: "A condition giving a greater chance of success.",
        defCh: "優勢；好處；利益",
        keyPoint: { 
            title: "Phrase", 
            desc: "Take advantage of (利用、佔便宜)。這是考試超高頻片語。", 
            exEn: "You should take advantage of this opportunity.", 
            exCh: "你應該利用這個機會。" 
        },
        synonyms: [{en: "Benefit", ch: "利益"}, {en: "Edge", ch: "優勢"}],
        antonyms: [{en: "Disadvantage", ch: "劣勢"}, {en: "Drawback", ch: "缺點"}],
        collocs: [
            { en: "competitive advantage", ch: "競爭優勢", sentEn: "Quality gives us a competitive advantage.", sentCh: "品質給了我們競爭優勢。" },
            { en: "to one's advantage", ch: "對某人有利", sentEn: "The delay worked to our advantage.", sentCh: "延誤反而對我們有利。" }
        ],
        media: [
            { type: "Movie", source: "The Perks of Being a Wallflower", en: "We accept the love we think we deserve.", ch: "我們接受我們認為自己配得上的愛。" }
        ]
    },
    {
        word: "Avoid",
        level: "inter",
        kk: "[əˋvɔɪd]",
        pos: "v.",
        verbForms: "avoid / avoided / avoided",
        defEn: "To stay away from someone or something.",
        defCh: "避免；避開",
        keyPoint: { 
            title: "Grammar Trap", 
            desc: "Avoid 後面必須接 V-ing (動名詞)，不可以接 to V。", 
            exEn: "He avoided answering the question.", 
            exCh: "他避開回答這個問題。" 
        },
        synonyms: [{en: "Escape", ch: "逃避"}, {en: "Prevent", ch: "預防"}],
        antonyms: [{en: "Face", ch: "面對"}, {en: "Confront", ch: "對抗"}],
        collocs: [
            { en: "avoid mistakes", ch: "避免錯誤", sentEn: "Check your work to avoid mistakes.", sentCh: "檢查你的工作以避免錯誤。" },
            { en: "avoid contact", ch: "避免接觸", sentEn: "Avoid eye contact with the angry dog.", sentCh: "避免跟那隻憤怒的狗有眼神接觸。" }
        ],
        media: [
            { type: "Song", source: "The Fray", en: "Step one, you say we need to talk. He walks, you say sit down, it's just a talk.", ch: "第一步，你說我們需要談談。" }
        ]
    },
    {
        word: "Career",
        level: "inter",
        kk: "[kəˋrɪr]",
        pos: "n.",
        defEn: "The job or series of jobs that you do during your working life.",
        defCh: "職業生涯；事業",
        keyPoint: { 
            title: "Usage Note", 
            desc: "Career 通常指長期的「職涯」或「事業」，而 Job 通常指單一份「工作」。", 
            exEn: "He wants to pursue a career in medicine.", 
            exCh: "他想從事醫學事業。" 
        },
        synonyms: [{en: "Profession", ch: "專業"}, {en: "Occupation", ch: "職業"}],
        antonyms: [],
        collocs: [
            { en: "career path", ch: "職涯路徑", sentEn: "She is planning her career path.", sentCh: "她正在規劃她的職涯路徑。" },
            { en: "change careers", ch: "轉行", sentEn: "It's never too late to change careers.", sentCh: "轉行永遠不嫌晚。" }
        ],
        media: [
            { type: "Movie", source: "The Devil Wears Prada", en: "A million girls would kill for this job.", ch: "百萬個女孩願意為了這份工作去殺人。" }
        ]
    },

    // ==========================================
    //  🟣 高級 (Advanced)
    // ==========================================
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
    },
    {
        word: "Ambiguous",
        level: "adv",
        kk: "[æmˋbɪgjʊəs]",
        pos: "adj.",
        defEn: "Having or expressing more than one possible meaning, sometimes intentionally.",
        defCh: "模稜兩可的；含糊不清的",
        keyPoint: { 
            title: "Word Root", 
            desc: "字根 'ambi-' 表示「兩者、周圍」，如 ambidextrous (雙手靈巧的)。", 
            exEn: "His reply was ambiguous.", 
            exCh: "他的回答模稜兩可。" 
        },
        synonyms: [{en: "Vague", ch: "模糊的"}, {en: "Unclear", ch: "不清楚的"}],
        antonyms: [{en: "Clear", ch: "清楚的"}, {en: "Explicit", ch: "明確的"}],
        collocs: [
            { en: "ambiguous statement", ch: "含糊的聲明", sentEn: "The politician made an ambiguous statement.", sentCh: "那位政治人物發表了含糊的聲明。" },
            { en: "remain ambiguous", ch: "保持模糊", sentEn: "The ending of the movie remained ambiguous.", sentCh: "電影的結局依然模稜兩可。" }
        ],
        media: [
            { type: "Book", source: "1984", en: "Doublethink means the power of holding two contradictory beliefs.", ch: "雙重思想意味著同時持有兩種矛盾信念的能力。" }
        ]
    },
    {
        word: "Benevolent",
        level: "adv",
        kk: "[bəˋnɛvələnt]",
        pos: "adj.",
        defEn: "Kind and helpful.",
        defCh: "仁慈的；慈善的",
        keyPoint: { 
            title: "Word Root", 
            desc: "字根 'bene-' 表示「好」(Good)，如 benefit (利益)。相反詞是 'male-' (壞)，如 malevolent (惡意的)。", 
            exEn: "She was a benevolent leader.", 
            exCh: "她是位仁慈的領袖。" 
        },
        synonyms: [{en: "Kind", ch: "仁慈的"}, {en: "Generous", ch: "慷慨的"}],
        antonyms: [{en: "Malevolent", ch: "惡意的"}, {en: "Cruel", ch: "殘忍的"}],
        collocs: [
            { en: "benevolent dictator", ch: "仁慈的獨裁者", sentEn: "He acted as a benevolent dictator.", sentCh: "他扮演著仁慈獨裁者的角色。" },
            { en: "benevolent smile", ch: "慈祥的微笑", sentEn: "He gave me a benevolent smile.", sentCh: "他給了我一個慈祥的微笑。" }
        ],
        media: [
            { type: "Book", source: "Les Misérables", en: "To love another person is to see the face of God.", ch: "愛另一個人就是見到了上帝的臉。" }
        ]
    },
    {
        word: "Capability",
        level: "adv",
        kk: "[͵kepəˋbɪlətɪ]",
        pos: "n.",
        defEn: "The ability or power to do something.",
        defCh: "能力；才能；性能",
        keyPoint: { 
            title: "Comparison", 
            desc: "Capability 強調「潛在的能力」或「性能」(常指機械或組織)，而 Ability 泛指一般的「能力」。", 
            exEn: "This phone has the capability to record 4K video.", 
            exCh: "這支手機有錄製4K影片的性能。" 
        },
        synonyms: [{en: "Ability", ch: "能力"}, {en: "Capacity", ch: "容量/能力"}],
        antonyms: [{en: "Inability", ch: "無能"}],
        collocs: [
            { en: "nuclear capability", ch: "核武能力", sentEn: "The country is developing nuclear capability.", sentCh: "該國正在發展核武能力。" },
            { en: "beyond one's capability", ch: "超出能力範圍", sentEn: "This task is beyond my capability.", sentCh: "這項任務超出了我的能力範圍。" }
        ],
        media: [
            { type: "Movie", source: "Limitless", en: "I was blind, but now I see. (Enhanced capability)", ch: "我曾盲目，但現在我看見了。" }
        ]
    }
];
