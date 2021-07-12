export default function(language = 'french', action){
    if(action.type == 'switch-english'){
        let englishLanguage = action.language;
        return englishLanguage;
    } else if (action.type == 'switch-french') {
        let frenchLanguage = action.language;
        return frenchLanguage
    } else {
        return language;
    }
}