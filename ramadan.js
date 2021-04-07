const localQuotes = [
    {
      "text": "«اللهم افتح لي أبواب فضلك، وأنزل عليَّ فيه بركاتك. ووفقني فيه لموجبات مرضاتك، وأسكني فيه بحبوحات جناتك، يا مجيب دعوة المضطرين»",
      "author": ""
    },
    {
      "text": "اللهم اغمرني فيه بالرحمة، وارزقني فيه التوفيق والعصمة، وطهر غياهب قلبي من التهمة، يا رحيماً بعبادك المؤمنين.",
      "author": ""
    },
    {
      "text": "اللهم اجعل صيامي فيه بالشكر والقبول، وعلى ما ترضاه ويرضاه الرسول، وصلِّ اللهم على سيدنا محمد وعلى آله وصحبه أجمعين.",
      "author": ""
    },
    {
      "text": "اللهم أعني على صيامه وقيامه بتوفيقك، يا هادي الضالين، وقربني إليك برحمة الأيتام، وإطعام الطعام، وإفشاء السلام، وصحبة الكرام.",
      "author": ""
    },
    {
        "text": "اَللّهُمَّ اجْعَل لي فيهِ نَصيباً مِن رَحمَتِكَ الواسِعَة، واهْدِني فيهِ لِبَراهينِكَ السّاطِعَة، وخُذْ بِناصِيَتي إلى مَرْضاتِكَ الجامِعَة بِمَحَبَّتِكَ يا أَمَلَ المُشتاقينَ.",
        "author": ""
    },
    {
      "text": "اَللّهُمَّ اجْعَلني فيهِ مِنَ المُتَوَكِلينَ عَلَيْكَ، واجْعَلني فيهِ مِنَ الفائِزينَ لَدَيْكَ، واجعَلني فيه مِنَ المُقَرَّبينَ إليكَ بِإحْسانِكَ يا غايَة الطّالبينَ.",
      "author": ""
    },
    {
      "text": "اَللّهُمَّ حَبب إليَّ فيهِ الْإحسانَ، وكَرِّهْ إليَّ فيهِ الْفُسُوقَ والعِصيانَ، وحَرِّمْ عَلَيَّ فيهِ السَخَطَ والنّيرانَ، بعَوْنِكَ يا غياثَ المُستَغيثينَ.      ",
      "author": ""
    },
    {
      "text": "اَللّهُمَّ اجعَلني فيهِ مِنَ المُستَغْفِرينَ، واجعَلني فيهِ مِن عِبادِكَ الصّالحينَ القانِتينَ، واجعَلني فيهِ مِن أوْليائِكَ المُقَرَّبينَ، بِرَأفَتِكَ يا اَرحَمَ الرّاحمينَ.",
      "author": ""
    },
    {
      "text": "اللهم قد حضر أول يوم -أو ثاني يوم أو ثالث يوم وهكذا- من شهر رمضان، وقد فرضت علينا صيامه، وأنزلت فيه القرآن هدى للناس وبينات من الهدى والفرقان؛ فاللهم أعنَّا على صيامه وقيامه، وتقبله منا، يا أكرم الأكرمين، إنك على كل شيء قدير.",
      "author": ""
    },
    {
      "text": "اللهم قربني فيه إلى مرضاتك، وجنبني فيه من سخطك ونقماتك، ووفقني فيه لقراءة آياتك، برحمتك يا أرحم الراحمين.",
      "author": ""
    },
    {
      "text": "اللهم زيّني فيه بالستر والعفاف، واسترني فيه بلباس القنوع والكفاف، واحملني فيه على العدل والإنصاف، وأمّني فيه من كل ما أخاف بعصمتك يا عصمة الخائفين، وارزقني فيه ذكرك دائماً، بتوفيقك يا هادي الضالين.      ",
      "author": ""
    },
    {
      "text": "اللهم أعني فيه على صيامه وعلى قيامه، وجنبني فيه من هفواتي وآثامي، وارزفي فيه ذكرك دائماً يا رب العالمين",
      "author": ""
    },
    {
      "text": "اللهم طهرني فيه من الدنس والأقذار، وصبرني فيه على كائنات الأقدار، ووفقني فيه للتُّقَى وصحبة الأبرار، بعونك يا قرة عين المساكين.      ",
      "author": ""
    },
    {
      "text": "اللهم ارزقني فيه طاعة الخاشعين، واشرح فيه صدري بإنابة المخبتين، بأمانك يا أمان الخائفين.      ",
      "author": ""
    },
    {
      "text": "اللهم اهدني فيه إلى صالح الأعمال، واقضِ لي فيه الحوائج والآمال، يا من لا يحتاج إلى التفسير والسؤال، يا عالماً بما في صدور العالمين، وصلِّ اللهم على محمد وعلى آله الطاهرين.      ",
      "author": ""
    },
    {
      "text": "اللهم نبهني فيه لبركات أسحاره، وأنر قلبي بضياء أنواره، وخذ بكل أعضائي إلى اتباع آثاره بنورك الذي أنار قلوب العارفين.      ",
      "author": ""
    },
    {
      "text": "اللهم اغسلني فيه من الذنوب وطهرني فيه من العيوب، وامتحن قلبي فيه بتقوى القلوب، يا غافر عثرات المذنبين.      ",
      "author": ""
    },
    {
      "text": "اللهم اجعل سعيي فيه مشكوراً، وذنبي فيه مغفوراً، وعملي فيه مقبولاً، وعيبي فيه مستوراً، يا أسمع السامعين.      ",
      "author": ""
    },
    {
      "text": "اللهم افتح لي فيه أبواب الجنان، وأغلق عني أبواب النيران، ووفقني فيه لقراءة القرآن، يا منزل السكينة في قلوب المؤمنين.      ",
      "author": ""
    },
    {
      "text": "اللهم وفِّر حظي فيه من النوافل، وأكرمني فيه بإحضار المسائل، وقرب فيه وسيلتي إليك من بين الوسائل، يا من لا يشغله إلحاح الملحّين.      ",
      "author": ""
    },
    {
      "text": "اللهم ارزقني فيه فضل ليلة القدر، وسير أموري فيه من العسر إلى اليسر، واقبل معاذيري، وحُطَّ عني الذنب والوزر، يا رءوفاً بعبادك الصالحين.      ",
      "author": ""
    },
    {
      "text": "اللهم ارزقني فيه الذهن والتنبه، وباعد فيه بيني وبين السفاهة والتمويه، واجعل لي نصيباً من كل خير تنزله بجودك وكرمك يا أجود الأجودين.      ",
      "author": ""
    },
    {
      "text": "اللهم اغسلني فيه من الذنوب وطهرني فيه من العيوب، وامتحن قلبي فيه بتقوى القلوب، يا غافر عثرات المذنبين.      ",
      "author": ""
    },

  ]