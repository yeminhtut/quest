import map from 'lodash/map'

const random = (array, start, n) => array.sort(() => 0.5 - Math.random()).slice(start, n)
const shuffle = arr => arr.sort(() => Math.random() - 0.5)

const list = {
    toState: data => {
        const randomGlossaries = random(data, 0, 40)
        return map(randomGlossaries.slice(0, 10), glossary => quest(glossary, randomGlossaries))
    }
}

const quest = (data, randomGlossaries) => {
    const wrongAnswers = random(randomGlossaries.slice(11, 40), 0, 3)
    wrongAnswers.push(data)
    return {
        id: data.id,
        correctAnswerId: data.id || '',
        defenition: data.excerpt,
        answers: shuffle(wrongAnswers)
    }
}

export default list
