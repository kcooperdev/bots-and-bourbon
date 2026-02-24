export type Drink = {
    id: string;
    name: string;
    category: string;
    ingredients: string[];
    description: string;
    vibe_keywords: string[];
};

export const drinksData: Drink[] = [
    /* BOLD */
    {
        "id": "old_fashioned",
        "name": "Old Fashioned",
        "category": "bold",
        "ingredients": ["bourbon", "sugar", "bitters", "orange peel"],
        "description": "A classic, spirit-forward bourbon cocktail with bitters and citrus.",
        "vibe_keywords": ["strong", "classic", "confident"]
    },
    {
        "id": "manhattan",
        "name": "Manhattan",
        "category": "bold",
        "ingredients": ["bourbon", "sweet vermouth", "bitters"],
        "description": "A rich, elegant cocktail with deep flavor and smooth finish.",
        "vibe_keywords": ["elegant", "rich", "serious"]
    },
    {
        "id": "boulevardier",
        "name": "Boulevardier",
        "category": "bold",
        "ingredients": ["bourbon", "Campari", "sweet vermouth"],
        "description": "A bourbon-forward twist on the Negroni with bitter complexity.",
        "vibe_keywords": ["bitter", "bold", "complex"]
    },
    {
        "id": "whiskey_sour",
        "name": "Whiskey Sour",
        "category": "bold",
        "ingredients": ["bourbon", "lemon", "simple syrup"],
        "description": "A tart and balanced bourbon sour without egg white.",
        "vibe_keywords": ["tart", "balanced", "classic"]
    },
    {
        "id": "brown_derby",
        "name": "Brown Derby",
        "category": "bold",
        "ingredients": ["bourbon", "grapefruit juice", "honey syrup"],
        "description": "A citrusy bourbon drink with a honey-sweet finish.",
        "vibe_keywords": ["citrus", "smooth", "bright"]
    },
    {
        "id": "gold_rush",
        "name": "Gold Rush",
        "category": "bold",
        "ingredients": ["bourbon", "lemon", "honey"],
        "description": "A modern classic with a bold honey-lemon profile.",
        "vibe_keywords": ["modern", "bold", "smooth"]
    },

    /* ADVENTUROUS */
    {
        "id": "paper_plane",
        "name": "Paper Plane",
        "category": "adventurous",
        "ingredients": ["bourbon", "Aperol", "amaro", "lemon"],
        "description": "A balanced, modern cocktail with bitter, sweet, and citrus notes.",
        "vibe_keywords": ["modern", "bitter", "playful"]
    },
    {
        "id": "kentucky_mule",
        "name": "Kentucky Mule",
        "category": "adventurous",
        "ingredients": ["bourbon", "ginger beer", "lime"],
        "description": "A spicy, refreshing bourbon twist on the Moscow Mule.",
        "vibe_keywords": ["spicy", "refreshing", "fun"]
    },
    {
        "id": "bourbon_smash",
        "name": "Bourbon Smash",
        "category": "adventurous",
        "ingredients": ["bourbon", "lemon", "mint", "simple syrup"],
        "description": "A bright, minty bourbon cocktail with crushed ice.",
        "vibe_keywords": ["minty", "fresh", "energetic"]
    },
    {
        "id": "bourbon_rickey",
        "name": "Bourbon Rickey",
        "category": "adventurous",
        "ingredients": ["bourbon", "lime", "soda"],
        "description": "A tart, bubbly drink with minimal sweetness.",
        "vibe_keywords": ["light", "tart", "bubbly"]
    },
    {
        "id": "whiskey_ginger",
        "name": "Whiskey Ginger",
        "category": "adventurous",
        "ingredients": ["bourbon", "ginger ale"],
        "description": "A simple, spicy-sweet highball.",
        "vibe_keywords": ["easy", "spicy", "casual"]
    },

    /* SOCIAL */
    {
        "id": "bourbon_lemonade",
        "name": "Bourbon Lemonade",
        "category": "social",
        "ingredients": ["bourbon", "lemonade"],
        "description": "A sweet, refreshing drink perfect for warm weather.",
        "vibe_keywords": ["refreshing", "sweet", "friendly"]
    },
    {
        "id": "bourbon_coke",
        "name": "Bourbon & Coke",
        "category": "social",
        "ingredients": ["bourbon", "cola"],
        "description": "A simple, crowd-pleasing classic.",
        "vibe_keywords": ["easy", "casual", "popular"]
    },
    {
        "id": "john_collins",
        "name": "John Collins",
        "category": "social",
        "ingredients": ["bourbon", "lemon", "simple syrup", "soda"],
        "description": "A tall, refreshing bourbon cocktail.",
        "vibe_keywords": ["tall", "refreshing", "light"]
    },
    {
        "id": "bourbon_sweet_tea",
        "name": "Bourbon Sweet Tea",
        "category": "social",
        "ingredients": ["bourbon", "iced tea"],
        "description": "A Southern-style, easy-drinking favorite.",
        "vibe_keywords": ["smooth", "sweet", "relaxed"]
    },
    {
        "id": "bourbon_punch",
        "name": "Bourbon Punch",
        "category": "social",
        "ingredients": ["bourbon", "citrus", "simple syrup", "soda"],
        "description": "A fruity, shareable party drink.",
        "vibe_keywords": ["party", "fruity", "fun"]
    },

    /* CHILL */
    {
        "id": "bourbon_rocks",
        "name": "Bourbon on the Rocks",
        "category": "chill",
        "ingredients": ["bourbon", "ice"],
        "description": "Simple, smooth, and perfect for unwinding.",
        "vibe_keywords": ["simple", "smooth", "relaxed"]
    },
    {
        "id": "bourbon_soda",
        "name": "Bourbon & Soda",
        "category": "chill",
        "ingredients": ["bourbon", "soda water"],
        "description": "A light, refreshing highball.",
        "vibe_keywords": ["light", "easy", "clean"]
    },
    {
        "id": "hot_toddy",
        "name": "Hot Toddy",
        "category": "chill",
        "ingredients": ["bourbon", "hot water", "lemon", "honey"],
        "description": "A warm, soothing drink for slow nights.",
        "vibe_keywords": ["warm", "soothing", "calm"]
    },
    {
        "id": "mint_julep",
        "name": "Mint Julep",
        "category": "chill",
        "ingredients": ["bourbon", "mint", "sugar", "ice"],
        "description": "A cool, minty classic served over crushed ice.",
        "vibe_keywords": ["cool", "minty", "smooth"]
    },
    {
        "id": "bourbon_apple",
        "name": "Bourbon Apple",
        "category": "chill",
        "ingredients": ["bourbon", "apple juice"],
        "description": "A mellow, sweet drink with apple notes.",
        "vibe_keywords": ["sweet", "mellow", "easygoing"]
    }
];
