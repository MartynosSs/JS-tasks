const string = "Привет! как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё"];

const getVowels = StringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < StringToFilter.length; i++) {
        const currentLetter = StringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
}


console.log(getVowels(string));