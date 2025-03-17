/**
 * Definições dos elementos do jogo
 */
const elementDefinitions = {
    // === ELEMENTOS NATURAIS ===
    fogo: {
        categoria: "natural",
        nome: {
            'pt-BR': "Fogo",
            'en-US': "Fire",
            'es-ES': "Fuego",
            'fr-FR': "Feu",
            'de-DE': "Feuer",
            'it-IT': "Fuoco",
            'ja-JP': "火",
            'zh-CN': "火",
            'ru-RU': "Огонь"
        },
        icone: "fa-fire",
        cor: "#e74c3c",
        descricao: {
            'pt-BR': "Elemento que representa calor, energia e transformação.",
            'en-US': "Element that represents heat, energy and transformation.",
            'es-ES': "Elemento que representa calor, energía y transformación.",
            'fr-FR': "Élément qui représente la chaleur, l'énergie et la transformation.",
            'de-DE': "Element, das Wärme, Energie und Transformation repräsentiert.",
            'it-IT': "Elemento che rappresenta calore, energia e trasformazione.",
            'ja-JP': "熱、エネルギー、変化を表す要素。",
            'zh-CN': "代表热量、能量和转化的元素。",
            'ru-RU': "Элемент, представляющий тепло, энергию и трансформацию."
        },
        propriedades: {
            'pt-BR': ["quente", "luminoso", "consumidor", "transformador"],
            'en-US': ["hot", "luminous", "consuming", "transforming"],
            'es-ES': ["caliente", "luminoso", "consumidor", "transformador"],
            'fr-FR': ["chaud", "lumineux", "consommateur", "transformateur"],
            'de-DE': ["heiß", "leuchtend", "verzehrend", "transformierend"],
            'it-IT': ["caldo", "luminoso", "consumatore", "trasformatore"],
            'ja-JP': ["熱い", "明るい", "消費する", "変化させる"],
            'zh-CN': ["热", "明亮", "消耗", "转化"],
            'ru-RU': ["горячий", "светящийся", "потребляющий", "трансформирующий"]
        },
        interacoes: {
            agua: {
                'pt-BR': "O fogo é apagado pela água, criando vapor.",
                'en-US': "Fire is extinguished by water, creating steam.",
                'es-ES': "El fuego es apagado por el agua, creando vapor.",
                'fr-FR': "Le feu est éteint par l'eau, créant de la vapeur.",
                'de-DE': "Feuer wird durch Wasser gelöscht und erzeugt Dampf.",
                'it-IT': "Il fuoco viene spento dall'acqua, creando vapore.",
                'ja-JP': "火は水によって消され、蒸気を生成します。",
                'zh-CN': "火被水熄灭，产生蒸汽。",
                'ru-RU': "Огонь гасится водой, создавая пар."
            },
            terra: {
                'pt-BR': "O fogo aquece a terra, podendo criar vidro ou cerâmica.",
                'en-US': "Fire heats the earth, potentially creating glass or ceramics.",
                'es-ES': "El fuego calienta la tierra, pudiendo crear vidrio o cerámica.",
                'fr-FR': "Le feu chauffe la terre, pouvant créer du verre ou de la céramique.",
                'de-DE': "Feuer erhitzt die Erde und kann Glas oder Keramik erzeugen.",
                'it-IT': "Il fuoco riscalda la terra, potendo creare vetro o ceramica.",
                'ja-JP': "火は土を熱し、ガラスや陶器を作ることができます。",
                'zh-CN': "火加热土壤，可以制造玻璃或陶瓷。",
                'ru-RU': "Огонь нагревает землю, создавая стекло или керамику."
            },
            ar: "O fogo é alimentado pelo ar, aumentando sua intensidade.",
            metal: "O fogo derrete o metal, transformando-o em líquido.",
            madeira: "O fogo consome a madeira, transformando-a em cinzas."
        }
    },
    agua: {
        categoria: "natural",
        nome: {
            'pt-BR': "Água",
            'en-US': "Water",
            'es-ES': "Agua",
            'fr-FR': "Eau",
            'de-DE': "Wasser",
            'it-IT': "Acqua",
            'ja-JP': "水",
            'zh-CN': "水",
            'ru-RU': "Вода"
        },
        icone: "fa-water",
        cor: "#3498db",
        descricao: {
            'pt-BR': "Elemento que representa fluidez, adaptabilidade e purificação.",
            'en-US': "Element that represents fluidity, adaptability and purification.",
            'es-ES': "Elemento que representa fluidez, adaptabilidad y purificación.",
            'fr-FR': "Élément qui représente la fluidité, l'adaptabilité et la purification.",
            'de-DE': "Element, das Flüssigkeit, Anpassungsfähigkeit und Reinigung repräsentiert.",
            'it-IT': "Elemento che rappresenta fluidità, adattabilità e purificazione.",
            'ja-JP': "流動性、適応性、浄化を表す要素。",
            'zh-CN': "代表流动性、适应性和净化的元素。",
            'ru-RU': "Элемент, представляющий текучесть, адаптивность и очищение."
        },
        propriedades: {
            'pt-BR': ["fluida", "fria", "purificadora", "adaptável"],
            'en-US': ["fluid", "cold", "purifying", "adaptable"],
            'es-ES': ["fluida", "fría", "purificadora", "adaptable"],
            'fr-FR': ["fluide", "froide", "purifiante", "adaptable"],
            'de-DE': ["flüssig", "kalt", "reinigend", "anpassungsfähig"],
            'it-IT': ["fluida", "fredda", "purificante", "adattabile"],
            'ja-JP': ["流動的", "冷たい", "浄化する", "適応性がある"],
            'zh-CN': ["流动", "冷", "净化", "适应"],
            'ru-RU': ["жидкая", "холодная", "очищающая", "адаптивная"]
        },
        interacoes: {
            fogo: "A água apaga o fogo, gerando vapor.",
            terra: "A água molda a terra, criando lama ou erosão.",
            ar: "A água pode evaporar no ar, formando nuvens.",
            metal: "A água pode oxidar o metal ao longo do tempo.",
            madeira: "A água nutre a madeira, ajudando-a a crescer."
        }
    },
    terra: {
        categoria: "natural",
        nome: "Terra",
        icone: "fa-mountain",
        cor: "#795548",
        descricao: "Elemento que representa estabilidade, nutrição e fundação.",
        propriedades: ["sólida", "estável", "nutritiva", "resistente"],
        interacoes: {
            fogo: "A terra pode ser aquecida pelo fogo, tornando-se mais dura.",
            agua: "A terra absorve a água, tornando-se fértil ou lamacenta.",
            ar: "A terra pode ser erodida pelo ar, formando poeira.",
            metal: "A terra contém metais em seu interior.",
            madeira: "A terra nutre a madeira, fornecendo minerais."
        }
    },
    ar: {
        categoria: "natural",
        nome: "Ar",
        icone: "fa-wind",
        cor: "#95a5a6",
        descricao: "Elemento que representa liberdade, movimento e comunicação.",
        propriedades: ["invisível", "móvel", "leve", "expansivo"],
        interacoes: {
            fogo: "O ar alimenta o fogo, aumentando sua intensidade.",
            agua: "O ar pode evaporar a água ou criar ondas.",
            terra: "O ar pode erodir a terra ao longo do tempo.",
            metal: "O ar pode oxidar o metal quando úmido.",
            madeira: "O ar move as folhas da madeira, espalhando sementes."
        }
    },
    metal: {
        categoria: "natural",
        nome: "Metal",
        icone: "fa-cog",
        cor: "#7f8c8d",
        descricao: "Elemento que representa força, condução e precisão.",
        propriedades: ["condutor", "maleável", "resistente", "brilhante"],
        interacoes: {
            fogo: "O metal é derretido pelo fogo intenso.",
            agua: "O metal pode oxidar em contato com a água.",
            terra: "O metal é extraído da terra através de mineração.",
            ar: "O metal pode conduzir eletricidade do ar (raios).",
            madeira: "O metal pode cortar a madeira com facilidade."
        }
    },
    madeira: {
        categoria: "natural",
        nome: "Madeira",
        icone: "fa-tree",
        cor: "#27ae60",
        descricao: "Elemento que representa crescimento, vitalidade e flexibilidade.",
        propriedades: ["viva", "flexível", "crescente", "renovável"],
        interacoes: {
            fogo: "A madeira alimenta o fogo, sendo consumida.",
            agua: "A madeira absorve a água para crescer.",
            terra: "A madeira extrai nutrientes da terra.",
            ar: "A madeira libera oxigênio no ar.",
            metal: "A madeira pode ser cortada pelo metal."
        }
    },

    // === PERSONAGENS HERÓICOS ===
    guerreiro: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Guerreiro",
            'en-US': "Warrior",
            'es-ES': "Guerrero",
            'fr-FR': "Guerrier",
            'de-DE': "Krieger",
            'it-IT': "Guerriero",
            'ja-JP': "戦士",
            'zh-CN': "战士",
            'ru-RU': "Воин"
        },
        icone: "fa-sword",
        cor: "#8B4513",
        descricao: {
            'pt-BR': "Um valente guerreiro com habilidades em combate corpo a corpo.",
            'en-US': "A brave warrior skilled in close combat."
        },
        propriedades: {
            'pt-BR': ["forte", "corajoso", "habilidoso", "determinado"],
            'en-US': ["strong", "brave", "skilled", "determined"]
        }
    },
    mago: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Mago",
            'en-US': "Mage"
        },
        icone: "fa-hat-wizard",
        cor: "#4B0082",
        descricao: {
            'pt-BR': "Um poderoso usuário de magia com conhecimento arcano.",
            'en-US': "A powerful magic user with arcane knowledge."
        },
        propriedades: {
            'pt-BR': ["sábio", "místico", "poderoso", "estudioso"],
            'en-US': ["wise", "mystical", "powerful", "scholarly"]
        }
    },
    arqueiro: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Arqueiro",
            'en-US': "Archer"
        },
        icone: "fa-bow-arrow",
        cor: "#228B22",
        descricao: {
            'pt-BR': "Um habilidoso atirador com precisão mortal.",
            'en-US': "A skilled shooter with deadly accuracy."
        },
        propriedades: {
            'pt-BR': ["preciso", "ágil", "paciente", "observador"],
            'en-US': ["precise", "agile", "patient", "observant"]
        }
    },
    clerigo: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Clérigo",
            'en-US': "Cleric"
        },
        icone: "fa-cross",
        cor: "#FFD700",
        descricao: {
            'pt-BR': "Um servo divino com poderes de cura.",
            'en-US': "A divine servant with healing powers."
        },
        propriedades: {
            'pt-BR': ["devoto", "curador", "protetor", "sábio"],
            'en-US': ["devout", "healer", "protector", "wise"]
        }
    },

    // === CRIATURAS MÍSTICAS ===
    dragao: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Dragão",
            'en-US': "Dragon"
        },
        icone: "fa-dragon",
        cor: "#FF4500",
        descricao: {
            'pt-BR': "Uma majestosa criatura alada que cospe fogo.",
            'en-US': "A majestic winged creature that breathes fire."
        },
        propriedades: {
            'pt-BR': ["poderoso", "antigo", "mágico", "voador"],
            'en-US': ["powerful", "ancient", "magical", "flying"]
        }
    },
    unicornio: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Unicórnio",
            'en-US': "Unicorn"
        },
        icone: "fa-horse",
        cor: "#FFB6C1",
        descricao: {
            'pt-BR': "Um cavalo místico com um chifre mágico.",
            'en-US': "A mystical horse with a magical horn."
        },
        propriedades: {
            'pt-BR': ["puro", "mágico", "curador", "nobre"],
            'en-US': ["pure", "magical", "healing", "noble"]
        }
    },
    fenix: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Fênix",
            'en-US': "Phoenix"
        },
        icone: "fa-fire-alt",
        cor: "#FF4500",
        descricao: {
            'pt-BR': "Uma ave imortal que renasce das cinzas.",
            'en-US': "An immortal bird that rises from the ashes."
        },
        propriedades: {
            'pt-BR': ["imortal", "ardente", "majestosa", "renascida"],
            'en-US': ["immortal", "burning", "majestic", "reborn"]
        }
    },
    grifo: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Grifo",
            'en-US': "Griffin"
        },
        icone: "fa-eagle",
        cor: "#DAA520",
        descricao: {
            'pt-BR': "Uma criatura híbrida com corpo de leão e cabeça de águia.",
            'en-US': "A hybrid creature with a lion's body and eagle's head."
        },
        propriedades: {
            'pt-BR': ["nobre", "feroz", "guardião", "voador"],
            'en-US': ["noble", "fierce", "guardian", "flying"]
        }
    },

    // === VILÕES ===
    bandido: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Bandido",
            'en-US': "Bandit"
        },
        icone: "fa-mask",
        cor: "#696969",
        descricao: {
            'pt-BR': "Um ladrão astuto que vive de roubos e assaltos.",
            'en-US': "A cunning thief who lives by robbery and theft."
        },
        propriedades: {
            'pt-BR': ["astuto", "ágil", "furtivo", "perigoso"],
            'en-US': ["cunning", "agile", "stealthy", "dangerous"]
        }
    },
    necromante: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Necromante",
            'en-US': "Necromancer"
        },
        icone: "fa-skull",
        cor: "#800080",
        descricao: {
            'pt-BR': "Um mago das trevas que controla os mortos.",
            'en-US': "A dark mage who controls the dead."
        },
        propriedades: {
            'pt-BR': ["sombrio", "poderoso", "corrupto", "imortal"],
            'en-US': ["dark", "powerful", "corrupt", "immortal"]
        }
    },
    bruxa: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Bruxa",
            'en-US': "Witch"
        },
        icone: "fa-hat-wizard",
        cor: "#9400D3",
        descricao: {
            'pt-BR': "Uma praticante de magia negra e maldições.",
            'en-US': "A practitioner of dark magic and curses."
        },
        propriedades: {
            'pt-BR': ["astuta", "vingativa", "poderosa", "malévola"],
            'en-US': ["cunning", "vengeful", "powerful", "malevolent"]
        }
    },
    dragaoNegro: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Dragão Negro",
            'en-US': "Black Dragon"
        },
        icone: "fa-dragon",
        cor: "#000000",
        descricao: {
            'pt-BR': "Um dragão corrupto que espalha destruição.",
            'en-US': "A corrupt dragon that spreads destruction."
        },
        propriedades: {
            'pt-BR': ["corrupto", "destruidor", "tirano", "poderoso"],
            'en-US': ["corrupt", "destroyer", "tyrant", "powerful"]
        }
    },

    // === ITENS MÁGICOS ===
    espadaMagica: {
        categoria: "item",
        nome: {
            'pt-BR': "Espada Mágica",
            'en-US': "Magic Sword"
        },
        icone: "fa-sword",
        cor: "#4169E1",
        descricao: {
            'pt-BR': "Uma espada encantada com poderes mágicos.",
            'en-US': "An enchanted sword with magical powers."
        },
        propriedades: {
            'pt-BR': ["afiada", "mágica", "lendária", "poderosa"],
            'en-US': ["sharp", "magical", "legendary", "powerful"]
        }
    },
    grimorio: {
        categoria: "item",
        nome: {
            'pt-BR': "Grimório",
            'en-US': "Grimoire"
        },
        icone: "fa-book-dead",
        cor: "#8B4513",
        descricao: {
            'pt-BR': "Um livro antigo contendo feitiços e conhecimento arcano.",
            'en-US': "An ancient book containing spells and arcane knowledge."
        },
        propriedades: {
            'pt-BR': ["mágico", "antigo", "sábio", "poderoso"],
            'en-US': ["magical", "ancient", "wise", "powerful"]
        }
    },
    varinhaMagica: {
        categoria: "item",
        nome: {
            'pt-BR': "Varinha Mágica",
            'en-US': "Magic Wand"
        },
        icone: "fa-wand-magic",
        cor: "#9370DB",
        descricao: {
            'pt-BR': "Um instrumento mágico para canalizar feitiços.",
            'en-US': "A magical instrument for channeling spells."
        },
        propriedades: {
            'pt-BR': ["mágica", "precisa", "poderosa", "antiga"],
            'en-US': ["magical", "precise", "powerful", "ancient"]
        }
    },
    pocaoMagica: {
        categoria: "item",
        nome: {
            'pt-BR': "Poção Mágica",
            'en-US': "Magic Potion"
        },
        icone: "fa-flask",
        cor: "#FF69B4",
        descricao: {
            'pt-BR': "Um líquido mágico com efeitos sobrenaturais.",
            'en-US': "A magical liquid with supernatural effects."
        },
        propriedades: {
            'pt-BR': ["mágica", "potente", "misteriosa", "volátil"],
            'en-US': ["magical", "potent", "mysterious", "volatile"]
        }
    },

    // === LOCAIS ===
    castelo: {
        categoria: "local",
        nome: {
            'pt-BR': "Castelo",
            'en-US': "Castle"
        },
        icone: "fa-castle",
        cor: "#808080",
        descricao: {
            'pt-BR': "Uma imponente fortaleza medieval.",
            'en-US': "An imposing medieval fortress."
        },
        propriedades: {
            'pt-BR': ["fortificado", "antigo", "majestoso", "imponente"],
            'en-US': ["fortified", "ancient", "majestic", "imposing"]
        }
    },
    floresta: {
        categoria: "local",
        nome: {
            'pt-BR': "Floresta Mística",
            'en-US': "Mystic Forest"
        },
        icone: "fa-tree",
        cor: "#228B22",
        descricao: {
            'pt-BR': "Uma floresta antiga cheia de magia e mistério.",
            'en-US': "An ancient forest full of magic and mystery."
        },
        propriedades: {
            'pt-BR': ["mística", "antiga", "viva", "mágica"],
            'en-US': ["mystical", "ancient", "alive", "magical"]
        }
    },
    caverna: {
        categoria: "local",
        nome: {
            'pt-BR': "Caverna Sombria",
            'en-US': "Dark Cave"
        },
        icone: "fa-mountain",
        cor: "#696969",
        descricao: {
            'pt-BR': "Uma caverna profunda cheia de segredos e perigos.",
            'en-US': "A deep cave full of secrets and dangers."
        },
        propriedades: {
            'pt-BR': ["escura", "misteriosa", "perigosa", "antiga"],
            'en-US': ["dark", "mysterious", "dangerous", "ancient"]
        }
    },
    vulcao: {
        categoria: "local",
        nome: {
            'pt-BR': "Vulcão Ativo",
            'en-US': "Active Volcano"
        },
        icone: "fa-fire-alt",
        cor: "#FF4500",
        descricao: {
            'pt-BR': "Uma montanha que expele lava e fogo.",
            'en-US': "A mountain that spews lava and fire."
        },
        propriedades: {
            'pt-BR': ["ardente", "perigoso", "poderoso", "instável"],
            'en-US': ["burning", "dangerous", "powerful", "unstable"]
        }
    },

    // === ARMAS ===
    arcoFlecha: {
        categoria: "arma",
        nome: {
            'pt-BR': "Arco e Flecha",
            'en-US': "Bow and Arrow"
        },
        icone: "fa-bow-arrow",
        cor: "#8B4513",
        descricao: {
            'pt-BR': "Uma arma de longo alcance para ataques precisos.",
            'en-US': "A long-range weapon for precise attacks."
        },
        propriedades: {
            'pt-BR': ["preciso", "mortal", "silencioso", "eficiente"],
            'en-US': ["precise", "deadly", "silent", "efficient"]
        }
    },
    lancaMagica: {
        categoria: "arma",
        nome: {
            'pt-BR': "Lança Mágica",
            'en-US': "Magic Spear"
        },
        icone: "fa-bolt",
        cor: "#4169E1",
        descricao: {
            'pt-BR': "Uma lança encantada com poderes elementais.",
            'en-US': "An enchanted spear with elemental powers."
        },
        propriedades: {
            'pt-BR': ["mágica", "poderosa", "versátil", "lendária"],
            'en-US': ["magical", "powerful", "versatile", "legendary"]
        }
    },

    // === ARMAS (continuação) ===
    adaga: {
        categoria: "arma",
        nome: {
            'pt-BR': "Adaga Envenenada",
            'en-US': "Poisoned Dagger"
        },
        icone: "fa-knife",
        cor: "#32CD32",
        descricao: {
            'pt-BR': "Uma lâmina curta embebida em veneno mortal.",
            'en-US': "A short blade soaked in deadly poison."
        },
        propriedades: {
            'pt-BR': ["venenosa", "mortal", "furtiva", "rápida"],
            'en-US': ["poisonous", "deadly", "stealthy", "quick"]
        }
    },
    machado: {
        categoria: "arma",
        nome: {
            'pt-BR': "Machado de Guerra",
            'en-US': "War Axe"
        },
        icone: "fa-axe",
        cor: "#A0522D",
        descricao: {
            'pt-BR': "Uma arma pesada para combate brutal.",
            'en-US': "A heavy weapon for brutal combat."
        },
        propriedades: {
            'pt-BR': ["pesado", "brutal", "poderoso", "destruidor"],
            'en-US': ["heavy", "brutal", "powerful", "destructive"]
        }
    },

    // === CRIATURAS MÍSTICAS (continuação) ===
    sereia: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Sereia",
            'en-US': "Mermaid"
        },
        icone: "fa-water",
        cor: "#00CED1",
        descricao: {
            'pt-BR': "Uma criatura aquática com voz encantadora.",
            'en-US': "An aquatic creature with an enchanting voice."
        },
        propriedades: {
            'pt-BR': ["encantadora", "aquática", "misteriosa", "sedutora"],
            'en-US': ["enchanting", "aquatic", "mysterious", "seductive"]
        }
    },
    golem: {
        categoria: "criatura",
        nome: {
            'pt-BR': "Golem",
            'en-US': "Golem"
        },
        icone: "fa-robot",
        cor: "#B8860B",
        descricao: {
            'pt-BR': "Uma criatura artificial feita de pedra ou metal.",
            'en-US': "An artificial creature made of stone or metal."
        },
        propriedades: {
            'pt-BR': ["forte", "resistente", "obediente", "incansável"],
            'en-US': ["strong", "resistant", "obedient", "tireless"]
        }
    },

    // === PERSONAGENS HERÓICOS (continuação) ===
    druida: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Druida",
            'en-US': "Druid"
        },
        icone: "fa-leaf",
        cor: "#228B22",
        descricao: {
            'pt-BR': "Um guardião da natureza com poderes elementais.",
            'en-US': "A guardian of nature with elemental powers."
        },
        propriedades: {
            'pt-BR': ["natural", "sábio", "protetor", "transformador"],
            'en-US': ["natural", "wise", "protective", "shapeshifting"]
        }
    },
    paladino: {
        categoria: "heroi",
        nome: {
            'pt-BR': "Paladino",
            'en-US': "Paladin"
        },
        icone: "fa-shield-alt",
        cor: "#FFD700",
        descricao: {
            'pt-BR': "Um cavaleiro sagrado com poderes divinos.",
            'en-US': "A holy knight with divine powers."
        },
        propriedades: {
            'pt-BR': ["sagrado", "justo", "protetor", "poderoso"],
            'en-US': ["holy", "righteous", "protective", "powerful"]
        }
    },

    // === VILÕES (continuação) ===
    vampiro: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Vampiro",
            'en-US': "Vampire"
        },
        icone: "fa-moon",
        cor: "#800000",
        descricao: {
            'pt-BR': "Um ser imortal que se alimenta de sangue.",
            'en-US': "An immortal being that feeds on blood."
        },
        propriedades: {
            'pt-BR': ["imortal", "sedutor", "poderoso", "noturno"],
            'en-US': ["immortal", "seductive", "powerful", "nocturnal"]
        }
    },
    demonioAntigo: {
        categoria: "vilao",
        nome: {
            'pt-BR': "Demônio Antigo",
            'en-US': "Ancient Demon"
        },
        icone: "fa-fire",
        cor: "#8B0000",
        descricao: {
            'pt-BR': "Uma entidade maligna de poder imensurável.",
            'en-US': "An evil entity of immeasurable power."
        },
        propriedades: {
            'pt-BR': ["maligno", "antigo", "corrupto", "poderoso"],
            'en-US': ["evil", "ancient", "corrupt", "powerful"]
        }
    },

    // === ITENS MÁGICOS (continuação) ===
    amuleto: {
        categoria: "item",
        nome: {
            'pt-BR': "Amuleto Protetor",
            'en-US': "Protective Amulet"
        },
        icone: "fa-gem",
        cor: "#9370DB",
        descricao: {
            'pt-BR': "Um talismã mágico que protege seu portador.",
            'en-US': "A magical talisman that protects its bearer."
        },
        propriedades: {
            'pt-BR': ["protetor", "mágico", "poderoso", "sagrado"],
            'en-US': ["protective", "magical", "powerful", "sacred"]
        }
    },
    pergaminho: {
        categoria: "item",
        nome: {
            'pt-BR': "Pergaminho Mágico",
            'en-US': "Magic Scroll"
        },
        icone: "fa-scroll",
        cor: "#DEB887",
        descricao: {
            'pt-BR': "Um antigo pergaminho com feitiços poderosos.",
            'en-US': "An ancient scroll with powerful spells."
        },
        propriedades: {
            'pt-BR': ["mágico", "antigo", "poderoso", "único"],
            'en-US': ["magical", "ancient", "powerful", "unique"]
        }
    },

    // === LOCAIS (continuação) ===
    pantano: {
        categoria: "local",
        nome: {
            'pt-BR': "Pântano Sombrio",
            'en-US': "Dark Swamp"
        },
        icone: "fa-water",
        cor: "#556B2F",
        descricao: {
            'pt-BR': "Um pântano perigoso cheio de criaturas misteriosas.",
            'en-US': "A dangerous swamp full of mysterious creatures."
        },
        propriedades: {
            'pt-BR': ["sombrio", "perigoso", "misterioso", "mortal"],
            'en-US': ["dark", "dangerous", "mysterious", "deadly"]
        }
    },
    ruinas: {
        categoria: "local",
        nome: {
            'pt-BR': "Ruínas Antigas",
            'en-US': "Ancient Ruins"
        },
        icone: "fa-archway",
        cor: "#A0522D",
        descricao: {
            'pt-BR': "Restos de uma civilização antiga e poderosa.",
            'en-US': "Remains of an ancient and powerful civilization."
        },
        propriedades: {
            'pt-BR': ["antigo", "misterioso", "mágico", "abandonado"],
            'en-US': ["ancient", "mysterious", "magical", "abandoned"]
        }
    }
};

/**
 * Obtém informações detalhadas sobre um elemento
 * @param {string} elementType - O tipo do elemento
 * @returns {object} - Informações do elemento
 */
function getElementInfo(elementType) {
    const element = elementDefinitions[elementType] || null;
    if (!element) return null;
    
    // Obter o idioma atual do sistema global
    const lang = window.currentLanguage || 'pt-BR';
    const fallbackLang = 'en-US'; // Idioma de fallback
    
    // Criar uma cópia do elemento com as traduções aplicadas
    const translatedElement = {
        ...element,
        nome: typeof element.nome === 'object' ? (element.nome[lang] || element.nome[fallbackLang]) : element.nome,
        descricao: typeof element.descricao === 'object' ? (element.descricao[lang] || element.descricao[fallbackLang]) : element.descricao,
        propriedades: Array.isArray(element.propriedades) ? element.propriedades : 
                     (element.propriedades && element.propriedades[lang]) || element.propriedades[fallbackLang] || []
    };
    
    return translatedElement;
}

/**
 * Obtém a descrição da interação entre dois elementos
 * @param {string} element1 - Primeiro elemento
 * @param {string} element2 - Segundo elemento
 * @returns {string} - Descrição da interação
 */
function getElementInteraction(element1, element2) {
    if (!elementDefinitions[element1] || !elementDefinitions[element2]) {
        return "Interação desconhecida";
    }
    
    // Obter o idioma atual do sistema global
    const lang = window.currentLanguage || 'pt-BR';
    const fallbackLang = 'en-US'; // Idioma de fallback
    
    const interaction = elementDefinitions[element1].interacoes[element2];
    
    if (!interaction) {
        const unknownInteraction = {
            'pt-BR': "Estes elementos não interagem diretamente.",
            'en-US': "These elements do not interact directly.",
            'es-ES': "Estos elementos no interactúan directamente.",
            'fr-FR': "Ces éléments n'interagissent pas directement.",
            'de-DE': "Diese Elemente interagieren nicht direkt miteinander.",
            'it-IT': "Questi elementi non interagiscono direttamente.",
            'ja-JP': "これらの要素は直接相互作用しません。",
            'zh-CN': "这些元素不直接相互作用。",
            'ru-RU': "Эти элементы не взаимодействуют напрямую."
        };
        return unknownInteraction[lang] || unknownInteraction[fallbackLang];
    }
    
    return typeof interaction === 'object' ? (interaction[lang] || interaction[fallbackLang]) : interaction;
}

/**
 * Gera uma descrição do cenário baseada nos elementos presentes
 * @param {Array} elements - Array com os tipos de elementos no cenário
 * @returns {string} - Descrição do cenário
 */
function generateScenarioDescription(elements) {
    // Obter o idioma atual do sistema global
    const lang = window.currentLanguage || 'pt-BR';
    const fallbackLang = 'en-US'; // Idioma de fallback
    
    const emptyScenarioText = {
        'pt-BR': "Um cenário vazio, esperando para ser preenchido com elementos.",
        'en-US': "An empty scenario, waiting to be filled with elements.",
        'es-ES': "Un escenario vacío, esperando ser llenado con elementos.",
        'fr-FR': "Un scénario vide, en attente d'être rempli d'éléments.",
        'de-DE': "Ein leeres Szenario, das darauf wartet, mit Elementen gefüllt zu werden.",
        'it-IT': "Uno scenario vuoto, in attesa di essere riempito con elementi.",
        'ja-JP': "要素で満たされるのを待っている空のシナリオ。",
        'zh-CN': "一个空场景，等待被元素填充。",
        'ru-RU': "Пустой сценарий, ожидающий заполнения элементами."
    };
    
    if (!elements || elements.length === 0) {
        return emptyScenarioText[lang] || emptyScenarioText[fallbackLang];
    }
    
    const scenarioStartText = {
        'pt-BR': "Um cenário contendo ",
        'en-US': "A scenario containing ",
        'es-ES': "Un escenario que contiene ",
        'fr-FR': "Un scénario contenant ",
        'de-DE': "Ein Szenario mit ",
        'it-IT': "Uno scenario contenente ",
        'ja-JP': "次の要素を含むシナリオ：",
        'zh-CN': "一个包含以下元素的场景：",
        'ru-RU': "Сценарий, содержащий "
    };
    
    let description = scenarioStartText[lang] || scenarioStartText[fallbackLang];
    
    // Lista os elementos
    const elementNames = elements.map(el => getElementInfo(el).nome);
    
    if (elementNames.length === 1) {
        const onlyText = {
            'pt-BR': `apenas ${elementNames[0]}.`,
            'en-US': `only ${elementNames[0]}.`,
            'es-ES': `solo ${elementNames[0]}.`,
            'fr-FR': `seulement ${elementNames[0]}.`,
            'de-DE': `nur ${elementNames[0]}.`,
            'it-IT': `solo ${elementNames[0]}.`,
            'ja-JP': `${elementNames[0]}のみ。`,
            'zh-CN': `仅${elementNames[0]}。`,
            'ru-RU': `только ${elementNames[0]}.`
        };
        description += onlyText[lang] || onlyText[fallbackLang];
    } else {
        const lastElement = elementNames.pop();
        const andText = {
            'pt-BR': ` e `,
            'en-US': ` and `,
            'es-ES': ` y `,
            'fr-FR': ` et `,
            'de-DE': ` und `,
            'it-IT': ` e `,
            'ja-JP': `と`,
            'zh-CN': `和`,
            'ru-RU': ` и `
        };
        description += `${elementNames.join(', ')}${andText[lang] || andText[fallbackLang]}${lastElement}.`;
    }
    
    // Adiciona interações se houver mais de um elemento
    if (elements.length > 1) {
        const interactionText = {
            'pt-BR': " Estes elementos podem interagir de formas interessantes: ",
            'en-US': " These elements can interact in interesting ways: ",
            'es-ES': " Estos elementos pueden interactuar de formas interesantes: ",
            'fr-FR': " Ces éléments peuvent interagir de manières intéressantes: ",
            'de-DE': " Diese Elemente können auf interessante Weise interagieren: ",
            'it-IT': " Questi elementi possono interagire in modi interessanti: ",
            'ja-JP': " これらの要素は興味深い方法で相互作用します：",
            'zh-CN': " 这些元素可以以有趣的方式相互作用：",
            'ru-RU': " Эти элементы могут взаимодействовать интересными способами: "
        };
        description += interactionText[lang] || interactionText[fallbackLang];
        
        const interactions = [];
        
        // Obtém interações únicas entre os elementos
        for (let i = 0; i < elements.length; i++) {
            for (let j = i + 1; j < elements.length; j++) {
                const interaction = getElementInteraction(elements[i], elements[j]);
                interactions.push(interaction);
            }
        }
        
        // Limita a 3 interações para não ficar muito longo
        const selectedInteractions = interactions.slice(0, 3);
        description += selectedInteractions.join(' ');
        
        if (interactions.length > 3) {
            const moreInteractionsText = {
                'pt-BR': "... entre outras interações.",
                'en-US': "... among other interactions.",
                'es-ES': "... entre otras interacciones.",
                'fr-FR': "... parmi d'autres interactions.",
                'de-DE': "... unter anderen Interaktionen.",
                'it-IT': "... tra altre interazioni.",
                'ja-JP': "...他の相互作用もあります。",
                'zh-CN': "...以及其他相互作用。",
                'ru-RU': "... среди других взаимодействий."
            };
            description += moreInteractionsText[lang] || moreInteractionsText[fallbackLang];
        }
    }
    
    return description;
}

/**
 * Gera um prompt para a IA baseado nos elementos e comando do usuário
 * @param {Array} elements - Array com os tipos de elementos no cenário
 * @param {string} userCommand - Comando do usuário
 * @returns {string} - Prompt para a IA
 */
function generateAIPrompt(elements, userCommand) {
    // Obter o idioma atual do sistema global
    const lang = window.currentLanguage || 'pt-BR';
    const fallbackLang = 'en-US';

    if (!elements || elements.length === 0) {
        const noElementsText = {
            'pt-BR': "Não há elementos no cenário. Por favor, adicione alguns elementos primeiro.",
            'en-US': "There are no elements in the scenario. Please add some elements first."
        };
        return noElementsText[lang] || noElementsText[fallbackLang];
    }

    // Agrupar elementos por categoria
    const elementsByCategory = elements.reduce((acc, el) => {
        const category = elementDefinitions[el].categoria;
        if (!acc[category]) acc[category] = [];
        acc[category].push(el);
        return acc;
    }, {});

    // Gerar descrição do cenário por categoria
    const categoryDescriptions = {
        'pt-BR': {
            natural: "No ambiente natural, encontramos",
            heroi: "Os heróis presentes são",
            criatura: "As criaturas místicas incluem",
            vilao: "As forças do mal são representadas por",
            item: "Os itens mágicos disponíveis são",
            local: "O cenário se passa em",
            arma: "As armas em cena são"
        },
        'en-US': {
            natural: "In the natural environment, we find",
            heroi: "The present heroes are",
            criatura: "The mystical creatures include",
            vilao: "The forces of evil are represented by",
            item: "The available magical items are",
            local: "The scene takes place in",
            arma: "The weapons in scene are"
        }
    };

    let sceneDescription = "";
    Object.entries(elementsByCategory).forEach(([category, categoryElements]) => {
        const categoryDesc = (categoryDescriptions[lang] || categoryDescriptions[fallbackLang])[category];
        if (categoryDesc) {
            const elementNames = categoryElements.map(el => getElementInfo(el).nome).join(", ");
            sceneDescription += `${categoryDesc} ${elementNames}. `;
        }
    });

    // Gerar sugestões de interação baseadas nas categorias presentes
    const interactionSuggestions = {
        'pt-BR': {
            heroi_vilao: "Os heróis podem enfrentar os vilões em combate épico.",
            heroi_item: "Os heróis podem usar os itens mágicos para aumentar seus poderes.",
            criatura_local: "As criaturas místicas podem interagir com o ambiente de maneiras únicas.",
            natural_local: "Os elementos naturais podem afetar o cenário dramaticamente.",
            arma_heroi: "As armas podem ser empunhadas pelos heróis em batalha.",
            item_local: "Os itens mágicos podem revelar segredos ocultos no cenário."
        },
        'en-US': {
            heroi_vilao: "Heroes can face villains in epic combat.",
            heroi_item: "Heroes can use magical items to enhance their powers.",
            criatura_local: "Mystical creatures can interact with the environment in unique ways.",
            natural_local: "Natural elements can affect the scenario dramatically.",
            arma_heroi: "Weapons can be wielded by heroes in battle.",
            item_local: "Magical items can reveal hidden secrets in the scenario."
        }
    };

    let suggestions = [];
    const categories = Object.keys(elementsByCategory);
    for (let i = 0; i < categories.length; i++) {
        for (let j = i + 1; j < categories.length; j++) {
            const interaction = `${categories[i]}_${categories[j]}`;
            const suggestion = (interactionSuggestions[lang] || interactionSuggestions[fallbackLang])[interaction];
            if (suggestion) suggestions.push(suggestion);
        }
    }

    // Construir o prompt final
    const promptText = {
        'pt-BR': {
            intro: "Você é um narrador criativo em uma história fantástica. A cena atual se desenrola assim:",
            elements: "Elementos presentes na cena:",
            possibilities: "Possibilidades de interação:",
            command: "Com base no comando do usuário:",
            instructions: `
Por favor, crie uma resposta narrativa que:
1. Desenvolva uma história envolvente considerando todos os elementos presentes
2. Incorpore interações significativas entre os diferentes tipos de elementos
3. Mantenha consistência com as propriedades e características de cada elemento
4. Siga o comando do usuário de forma criativa e coerente
5. Crie uma narrativa em 3-4 parágrafos com desenvolvimento, clímax e conclusão

Sua resposta deve ser escrita em um estilo descritivo e imersivo, como se estivesse narrando uma história épica.`
        },
        'en-US': {
            intro: "You are a creative narrator in a fantastic story. The current scene unfolds as follows:",
            elements: "Elements present in the scene:",
            possibilities: "Interaction possibilities:",
            command: "Based on the user's command:",
            instructions: `
Please create a narrative response that:
1. Develops an engaging story considering all present elements
2. Incorporates meaningful interactions between different types of elements
3. Maintains consistency with the properties and characteristics of each element
4. Follows the user's command creatively and coherently
5. Creates a narrative in 3-4 paragraphs with development, climax, and conclusion

Your response should be written in a descriptive and immersive style, as if narrating an epic story.`
        }
    };

    const prompt = `
${(promptText[lang] || promptText[fallbackLang]).intro}

${(promptText[lang] || promptText[fallbackLang]).elements}
${sceneDescription}

${(promptText[lang] || promptText[fallbackLang]).possibilities}
${suggestions.join(' ')}

${(promptText[lang] || promptText[fallbackLang]).command}
"${userCommand}"

${(promptText[lang] || promptText[fallbackLang]).instructions}
`;

    return prompt;
}

// Adicionar função para obter elementos por categoria
function getElementsByCategory(category) {
    return Object.entries(elementDefinitions)
        .filter(([_, element]) => element.categoria === category)
        .map(([key, _]) => key);
}

// Sistema de Elementos
const ElementSystem = {
    // Categorias de elementos
    categories: [
        {
            id: 'naturais',
            nome: 'Elementos Naturais',
            icone: 'fa-leaf',
            cor: '#4CAF50'
        },
        {
            id: 'herois',
            nome: 'Heróis',
            icone: 'fa-shield-alt',
            cor: '#2196F3'
        },
        {
            id: 'criaturas',
            nome: 'Criaturas Místicas',
            icone: 'fa-dragon',
            cor: '#9C27B0'
        },
        {
            id: 'objetos',
            nome: 'Objetos Mágicos',
            icone: 'fa-magic',
            cor: '#FF9800'
        },
        {
            id: 'locais',
            nome: 'Locais Fantásticos',
            icone: 'fa-mountain',
            cor: '#795548'
        },
        {
            id: 'dialogos',
            nome: 'Diálogos',
            icone: 'fa-comments',
            cor: '#E91E63'
        },
        {
            id: 'eras',
            nome: 'Eras',
            icone: 'fa-clock',
            cor: '#607D8B'
        }
    ],

    // Elementos por categoria
    elements: {
        naturais: [
            {
                id: 'fogo',
                nome: 'Fogo',
                icone: 'fa-fire',
                cor: '#F44336',
                descricao: 'O elemento do calor e da transformação'
            },
            {
                id: 'agua',
                nome: 'Água',
                icone: 'fa-water',
                cor: '#2196F3',
                descricao: 'O elemento da fluidez e adaptação'
            },
            {
                id: 'terra',
                nome: 'Terra',
                icone: 'fa-mountain',
                cor: '#795548',
                descricao: 'O elemento da estabilidade e nutrição'
            },
            {
                id: 'ar',
                nome: 'Ar',
                icone: 'fa-wind',
                cor: '#90CAF9',
                descricao: 'O elemento da liberdade e comunicação'
            },
            {
                id: 'raio',
                nome: 'Raio',
                icone: 'fa-bolt',
                cor: '#FFC107',
                descricao: 'O elemento da energia e poder'
            }
        ],
        herois: [
            {
                id: 'guerreiro',
                nome: 'Guerreiro',
                icone: 'fa-sword',
                cor: '#F44336',
                descricao: 'Mestre das armas e da coragem'
            },
            {
                id: 'mago',
                nome: 'Mago',
                icone: 'fa-hat-wizard',
                cor: '#3F51B5',
                descricao: 'Mestre da magia e do conhecimento'
            },
            {
                id: 'arqueiro',
                nome: 'Arqueiro',
                icone: 'fa-bullseye',
                cor: '#4CAF50',
                descricao: 'Mestre da precisão e da paciência'
            },
            {
                id: 'ladino',
                nome: 'Ladino',
                icone: 'fa-mask',
                cor: '#9E9E9E',
                descricao: 'Mestre da furtividade e da astúcia'
            },
            {
                id: 'clerigo',
                nome: 'Clérigo',
                icone: 'fa-pray',
                cor: '#FFEB3B',
                descricao: 'Mestre da cura e da fé'
            }
        ],
        criaturas: [
            {
                id: 'dragao',
                nome: 'Dragão',
                icone: 'fa-dragon',
                cor: '#F44336',
                descricao: 'Criatura ancestral de grande poder'
            },
            {
                id: 'unicornio',
                nome: 'Unicórnio',
                icone: 'fa-horse',
                cor: '#E1BEE7',
                descricao: 'Criatura pura e mágica'
            },
            {
                id: 'grifo',
                nome: 'Grifo',
                icone: 'fa-crow',
                cor: '#FFA000',
                descricao: 'Criatura metade águia, metade leão'
            },
            {
                id: 'sereia',
                nome: 'Sereia',
                icone: 'fa-water',
                cor: '#4FC3F7',
                descricao: 'Criatura encantadora dos mares'
            },
            {
                id: 'fenix',
                nome: 'Fênix',
                icone: 'fa-fire-alt',
                cor: '#FF5722',
                descricao: 'Ave imortal que renasce das cinzas'
            }
        ],
        objetos: [
            {
                id: 'espada',
                nome: 'Espada Lendária',
                icone: 'fa-sword',
                cor: '#2196F3',
                descricao: 'Arma forjada por deuses'
            },
            {
                id: 'amuleto',
                nome: 'Amuleto Mágico',
                icone: 'fa-gem',
                cor: '#9C27B0',
                descricao: 'Joia com poderes de proteção'
            },
            {
                id: 'grimorio',
                nome: 'Grimório Antigo',
                icone: 'fa-book',
                cor: '#795548',
                descricao: 'Livro com feitiços poderosos'
            },
            {
                id: 'varinha',
                nome: 'Varinha Mística',
                icone: 'fa-wand-magic',
                cor: '#FF9800',
                descricao: 'Canalizadora de magia'
            },
            {
                id: 'pocao',
                nome: 'Poção Mágica',
                icone: 'fa-flask',
                cor: '#4CAF50',
                descricao: 'Líquido com efeitos sobrenaturais'
            }
        ],
        locais: [
            {
                id: 'castelo',
                nome: 'Castelo Encantado',
                icone: 'fa-castle',
                cor: '#607D8B',
                descricao: 'Fortaleza mágica imponente'
            },
            {
                id: 'floresta',
                nome: 'Floresta Mística',
                icone: 'fa-tree',
                cor: '#4CAF50',
                descricao: 'Bosque cheio de segredos e criaturas'
            },
            {
                id: 'caverna',
                nome: 'Caverna dos Segredos',
                icone: 'fa-dungeon',
                cor: '#5D4037',
                descricao: 'Passagem para o desconhecido'
            },
            {
                id: 'montanha',
                nome: 'Montanha Sagrada',
                icone: 'fa-mountain',
                cor: '#78909C',
                descricao: 'Pico que toca o reino dos deuses'
            },
            {
                id: 'ilha',
                nome: 'Ilha Flutuante',
                icone: 'fa-island-tropical',
                cor: '#00BCD4',
                descricao: 'Terra que desafia a gravidade'
            }
        ],
        dialogos: [
            {
                id: 'dialogo_hostil',
                nome: 'Diálogo Hostil',
                icone: 'fa-angry',
                cor: '#F44336',
                descricao: 'Interação agressiva e tensa',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_amigavel',
                nome: 'Diálogo Amigável',
                icone: 'fa-smile',
                cor: '#4CAF50',
                descricao: 'Conversa cordial e positiva',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_misterioso',
                nome: 'Diálogo Misterioso',
                icone: 'fa-question',
                cor: '#9C27B0',
                descricao: 'Conversa enigmática e intrigante',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_romantico',
                nome: 'Diálogo Romântico',
                icone: 'fa-heart',
                cor: '#E91E63',
                descricao: 'Interação afetuosa e íntima',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_comico',
                nome: 'Diálogo Cômico',
                icone: 'fa-laugh',
                cor: '#FF9800',
                descricao: 'Conversa engraçada e bem-humorada',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_dramatico',
                nome: 'Diálogo Dramático',
                icone: 'fa-theater-masks',
                cor: '#3F51B5',
                descricao: 'Interação emocionalmente intensa',
                tipo: 'dialogo',
                requerParticipantes: true
            },
            {
                id: 'dialogo_filosofico',
                nome: 'Diálogo Filosófico',
                icone: 'fa-brain',
                cor: '#607D8B',
                descricao: 'Conversa profunda sobre questões existenciais',
                tipo: 'dialogo',
                requerParticipantes: true
            }
        ],
        eras: [
            {
                id: 'era_prehistorica',
                nome: 'Era Pré-histórica',
                icone: 'fa-fire',
                cor: '#795548',
                descricao: 'Período dos primeiros humanos e grandes animais',
                tipo: 'era'
            },
            {
                id: 'era_antiga',
                nome: 'Era Antiga',
                icone: 'fa-landmark',
                cor: '#FFC107',
                descricao: 'Tempo das grandes civilizações como Egito, Grécia e Roma',
                tipo: 'era'
            },
            {
                id: 'era_medieval',
                nome: 'Era Medieval',
                icone: 'fa-chess-rook',
                cor: '#607D8B',
                descricao: 'Período de castelos, cavaleiros e feudalismo',
                tipo: 'era'
            },
            {
                id: 'era_renascimento',
                nome: 'Renascimento',
                icone: 'fa-palette',
                cor: '#9C27B0',
                descricao: 'Época de grande florescimento artístico e cultural',
                tipo: 'era'
            },
            {
                id: 'era_industrial',
                nome: 'Revolução Industrial',
                icone: 'fa-industry',
                cor: '#455A64',
                descricao: 'Período de grandes avanços tecnológicos e máquinas',
                tipo: 'era'
            },
            {
                id: 'era_moderna',
                nome: 'Era Moderna',
                icone: 'fa-city',
                cor: '#2196F3',
                descricao: 'Século XX com suas guerras e avanços tecnológicos',
                tipo: 'era'
            },
            {
                id: 'era_digital',
                nome: 'Era Digital',
                icone: 'fa-laptop',
                cor: '#00BCD4',
                descricao: 'Nosso tempo atual dominado pela internet e tecnologia',
                tipo: 'era'
            },
            {
                id: 'era_futurista',
                nome: 'Era Futurista',
                icone: 'fa-rocket',
                cor: '#3F51B5',
                descricao: 'Futuro próximo com tecnologias avançadas',
                tipo: 'era'
            },
            {
                id: 'era_espacial',
                nome: 'Era Espacial',
                icone: 'fa-space-shuttle',
                cor: '#673AB7',
                descricao: 'Futuro de colonização espacial e viagens interestelares',
                tipo: 'era'
            },
            {
                id: 'era_pos_apocaliptica',
                nome: 'Era Pós-Apocalíptica',
                icone: 'fa-radiation',
                cor: '#FF5722',
                descricao: 'Mundo após um grande cataclismo ou colapso',
                tipo: 'era'
            },
            {
                id: 'era_steampunk',
                nome: 'Era Steampunk',
                icone: 'fa-cogs',
                cor: '#8D6E63',
                descricao: 'Realidade alternativa com tecnologia a vapor avançada',
                tipo: 'era'
            },
            {
                id: 'era_cyberpunk',
                nome: 'Era Cyberpunk',
                icone: 'fa-microchip',
                cor: '#E91E63',
                descricao: 'Futuro distópico de alta tecnologia e baixa qualidade de vida',
                tipo: 'era'
            }
        ]
    },

    // Participantes de diálogo
    dialogoParticipantes: {},

    // Métodos para acessar os dados
    getCategories() {
        return this.categories;
    },

    getElementsByCategory(categoryId) {
        return this.elements[categoryId] || [];
    },

    getElementById(elementId) {
        for (const category in this.elements) {
            const element = this.elements[category].find(el => el.id === elementId);
            if (element) return element;
        }
        return null;
    },

    getInfo(elementId) {
        return this.getElementById(elementId);
    },

    // Adicionar participantes a um diálogo
    adicionarParticipantesDialogo(dialogoId, participantes) {
        this.dialogoParticipantes[dialogoId] = participantes;
    },

    // Obter participantes de um diálogo
    getParticipantesDialogo(dialogoId) {
        return this.dialogoParticipantes[dialogoId] || [];
    },

    // Verificar se um elemento é um diálogo
    isDialogo(elementId) {
        const elemento = this.getElementById(elementId);
        return elemento && elemento.tipo === 'dialogo';
    },

    // Verificar se um elemento é uma era
    isEra(elementId) {
        const elemento = this.getElementById(elementId);
        return elemento && elemento.tipo === 'era';
    },

    // Gerar prompt para a IA com base nos elementos selecionados
    generateAIPrompt(elementIds, userCommand) {
        const elements = elementIds.map(id => this.getElementById(id));
        
        // Separar elementos por tipo
        const dialogos = elements.filter(el => el && el.tipo === 'dialogo');
        const eras = elements.filter(el => el && el.tipo === 'era');
        const outrosElementos = elements.filter(el => el && el.tipo !== 'dialogo' && el.tipo !== 'era');
        
        let prompt = "Você é um narrador de histórias criativo. ";
        
        // Adicionar informações sobre a era (se houver)
        if (eras.length > 0) {
            // Usar apenas a primeira era selecionada para evitar conflitos
            const era = eras[0];
            prompt += `Ambiente a história na ${era.nome} (${era.descricao}). `;
        }
        
        // Adicionar informações sobre os elementos normais
        if (outrosElementos.length > 0) {
            const elementsList = outrosElementos.map(el => `${el.nome} (${el.descricao})`).join(', ');
            prompt += `Incorpore os seguintes elementos na história: ${elementsList}. `;
        }
        
        // Adicionar informações sobre os diálogos
        if (dialogos.length > 0) {
            dialogos.forEach(dialogo => {
                const participantes = this.getParticipantesDialogo(dialogo.id);
                if (participantes && participantes.length > 0) {
                    const participantesNomes = participantes.map(id => {
                        const p = this.getElementById(id);
                        return p ? p.nome : id;
                    }).join(' e ');
                    
                    prompt += `Inclua um diálogo ${dialogo.descricao.toLowerCase()} entre ${participantesNomes}. `;
                } else {
                    prompt += `Inclua um diálogo ${dialogo.descricao.toLowerCase()}. `;
                }
            });
        }
        
        prompt += `\nComando do usuário: ${userCommand}\n\nSua resposta deve ser criativa, envolvente e incorporar naturalmente os elementos mencionados.`;
        
        return prompt;
    }
};

// Exportar para uso global
window.ElementSystem = ElementSystem; 