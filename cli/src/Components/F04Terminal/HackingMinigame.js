import React, { useEffect, useState } from 'react';

const specialLeftChars = '{[(<'
const specialRightChars = `}])>`
const regularChars = `!@#$%^&*_-=+;:'",.`

//Checks to see if the character given has an opposite matching character.
const checkForMatching = (letter, row) => {
    const result = {
        ids: [],
        matchFound: false
    }

    if(letter.openingTag && !letter.used)
    {
        result.ids.push(letter.id)
        row.forEach((obj)=>{
            if(obj.letter === letter.oppositeTag && obj.id > letter.id){
                result.ids.push(obj.id)
                result.matchFound = true
            }
        })
    } else if (letter.wordPosition !== 0) {
        result.ids.push(letter.id - letter.wordPosition)
        result.ids.push(letter.id + (4 - letter.wordPosition))
    }

    return result
}
const letterCheck = (matchIds, letter, removingWord) => {
    let check = false
    if(letter.id >= matchIds[0] + 1 && letter.id <= matchIds[matchIds.length - 1] - 1) check = true

    if(letter.wordPosition > 0 && removingWord === true && letter.id >= matchIds[0] + 1 && letter.id <= matchIds[matchIds.length - 1]) check = true
    if(letter.wordPosition > 0 && removingWord === false) check = false
    return check
}

const removeMatch = (matchIds, rows, setRowsOne, removingWord) => {

    const row = Math.floor(matchIds[0] % 192 / 12)
    let editArray = rows
    let innerArray = rows[row]
    let secondArray = rows[row+1]
    let foundIndex = innerArray.findIndex((obj)=> obj.id === matchIds[0])
    innerArray.map((letter)=>{
        console.log(matchIds)
        console.log(letter)
        if(letterCheck(matchIds, letter, removingWord)){
            letter.wordPosition = 0
            letter.letter = '.'
            return letter
        } else return letter
    })
    if(removingWord){
        secondArray.map((letter)=>{
            console.log(matchIds)
            console.log(letter.id)
            if(letterCheck(matchIds, letter, removingWord)){
                letter.wordPosition = 0
                letter.letter = '.'
                return letter
            } else return letter
        })
    }
    innerArray[foundIndex] = {...innerArray[foundIndex], used:true}
    editArray[row] = innerArray
    editArray[row+1] = secondArray
    setRowsOne(editArray)

}

export const  HackingMinigame = () => {

    const [rowsOne, setRowsOne] = useState()
    const [rowsTwo, setRowsTwo] = useState()
    const [currentLetter, setCurrentLetter] = useState(0)
    const [matching, setMatching] = useState([])
    const [actions, setActions] = useState([">."])
    const [tries, setTries] = useState(4)
    const [makingWord, setMakingWord] = useState(false)
    const [currentWord, setCurrentWord] = useState("")
    const [currentFullWordState, setCurrentFullWord] = useState("")
    const [wordPosition, setWordPosition] = useState(0)
    const [wordsState] = useState(["JUMP", "WORN", "TURN", "DAMN", "SIGN", "BEAK", "BOOK", "JURY", "TORN", "FERN", "HOOD", "BURN", "SPIN", "QUIT", "PIKE"])
    const [wordsCountState, setWordsCount] = useState(0)
    const [passwordFoundState, setPasswordFound] = useState(false)
    const [failed, setFailed] = useState(false)
    const [passwordState, setPassword] = useState("")
    const [currentWordsState, setCurrentWordsState] = useState([])


    //Generates rows of randomized letters/words. Can be given an amount and either column 1 or 2 as an argument
    const rowGenerator = (amount, column) => {
        //Pre setting variables for use during loops
        const result = []
        let idDecider = 0 + (column * 192)
        let wordCheck = makingWord
        let word = currentWord
        let currentFullWord = currentFullWordState
        let position = wordPosition
        let words = wordsState
        let wordsCount = wordsCountState
        let currentWords = currentWordsState
        //Loops however many times amount is equal to. This will signify how many rows are in a column
        for(let i=0; i < amount; i++){
            const letterArray = []
            
            //Loops through 12 times to create a row. Each row contains 12 randomized characters.
            for(let b=0; b < 12; b++){
                let decider = Math.floor(Math.random() * 20)
                let randomLetter = ''
                let openingTag = false
                let closingTag = false
                let isLetter = false
                let oppositeTag = ''
                let picker = 0
                let fullWord = null
                if(idDecider === 383){
                    let pick = Math.floor(Math.random() * currentWords.length)
                    setPassword(currentWords[pick])
                }
                if (!wordCheck && currentWords.length === words.length && decider === 11){
                    decider = 12
                }
                if(wordCheck){
                    randomLetter = word[0]
                    let wordArray = word
                    wordArray.shift()
                    word = wordArray
                    position=position++
                    fullWord = currentFullWord
                    setWordPosition(position++)
                    setCurrentWord(wordArray)
                } else {
                switch(decider){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        picker = Math.floor(Math.random() * specialLeftChars.length)
                        openingTag = true;
                        randomLetter = specialLeftChars[picker]
                        oppositeTag = specialRightChars[picker]
                        break;
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        closingTag = true;
                        picker = Math.floor(Math.random() * specialRightChars.length)
                        randomLetter = specialRightChars[picker]
                        oppositeTag = specialLeftChars[picker]
                        break;
                    case 11:
                        // setWordsCount(wordsCountState + 1)
                        // wordsCount++
                        if(wordsCount === -1 || wordsState.length === 0){
                            isLetter = true
                            picker = Math.floor(Math.random() * specialRightChars.length)
                            randomLetter = regularChars[picker]
                        } else {
                        //Tell the program we are currently making a word
                        setMakingWord(true)
                        wordCheck = true

                        //Pick a word from the list
                        let wordDecider = Math.floor(Math.random() * words.length)

                        //Check to see if this word has been used
                        let unusedWord = currentWords.includes(words[wordDecider])
                        //Add word to list of used words
                        if(!unusedWord){
                            currentWords.push(words[wordDecider])
                            if(words[wordsState])
                                setCurrentWordsState([...currentWordsState, words[wordDecider]])
                                
                            fullWord = words[wordDecider]
                            
                            
                            //Split said word into an array of letters
                            let currentWordMaker = words[wordDecider].split("")
                            
                            //Set the current letter to the first letter of the word
                            randomLetter = currentWordMaker[0]
    
                            //Remove the first letter from the array
                            currentWordMaker.shift()
    
                            //Set the current word being made
                            setCurrentWord(currentWordMaker)
                            setCurrentFullWord(words[wordDecider])
                            currentFullWord = words[wordDecider]
                            word = currentWordMaker
    
                            //Give this letter a position of 1
                            position = 1
                            setWordPosition(1)
                            
                        }
                        if(unusedWord){
                        while(unusedWord){
                            wordDecider++
                            if(wordDecider >= words.length){
                                wordDecider = 0
                            }
                            if(!currentWords.includes(words[wordDecider])){
                                unusedWord = true
                                currentWords.push(words[wordDecider])
                                if(words[wordsState])
                                    setCurrentWordsState([...currentWordsState, words[wordDecider]])
                                    
                                fullWord = words[wordDecider]
        
        
                                //Split said word into an array of letters
                                let currentWordMaker = words[wordDecider].split("")
                                
                                //Set the current letter to the first letter of the word
                                randomLetter = currentWordMaker[0]
        
                                //Remove the first letter from the array
                                currentWordMaker.shift()
        
                                //Set the current word being made
                                setCurrentWord(currentWordMaker)
                                setCurrentFullWord(words[wordDecider])
                                currentFullWord = words[wordDecider]
                                word = currentWordMaker
        
                                //Give this letter a position of 1
                                position = 1
                                setWordPosition(1)
                                break
                            }
                        }
                            
                            
                        }
                        }
                        break;
                    default:
                        isLetter = true
                        picker = Math.floor(Math.random() * specialRightChars.length)
                        randomLetter = regularChars[picker]
                        break;
                }
                }
                const letter = {
                    id: idDecider,
                    letter: randomLetter,
                    openingTag: openingTag,
                    closingTag: closingTag,
                    isLetter: isLetter,
                    oppositeTag: oppositeTag,
                    wordPosition: position,
                    used: false,
                    fullWord: fullWord
                }
                if(position === 4){
                    setMakingWord(false)
                    wordCheck = false
                    position = 0
                    setWordPosition(0)
                }
                idDecider++
                letterArray.push(letter)
            }
            result.push(letterArray)
        }
        
        setWordsCount(wordsCountState + 1)
        wordsCount++
        return result
    }


    useEffect(()=>{
        setTries([4])
        setCurrentWordsState([])
        setActions([">."])
        setRowsOne(rowGenerator(16, 0))
        setRowsTwo(rowGenerator(16, 1))
    },[passwordFoundState, failed])

    



    const applyReward = () => {
        let decider = Math.floor(Math.random() * 4)
        if(decider <= 1){
            setTries(4)
            return ">Tries reset!"
            
        } else {
            return ">Removed Dud"
        }
    }

    const decideClick = (column, row, letter, setter) => {
        
        let match = checkForMatching(letter, row)
        if(letter.fullWord)
        {
            if(letter.fullWord === passwordState)
            {
                setActions(['Password Found', ...actions])
                setPasswordFound(true)
            } else 
            {
                setActions(['Wrong Password', 'Try Removed', ...actions])
                if(tries > 1){
                    let triesEdit = tries - 1
                    setTries(triesEdit)
                    removeMatch(matching, column, setter, true)
                } else {
                    setFailed(true)
                }
            }
        }

        if(match.matchFound)
        {
            const row = Math.floor(matching[0] % 192 / 12)
            // rowsTwo[row].map((letter)=>{return letter.letter})
            let letterArray = column[row]
                                    .filter(letter=>letter.id >= matching[0] && letter.id <= matching[1])
                                    .map(letter=>{return letter.letter})
            
            setActions([applyReward(), `> ${letterArray.join(" ")}`, ...actions,])
            removeMatch(matching, column, setter, false)
        }
    }

    const decideMouseEnter = (letter, row) => {
        let actionChange = actions
        if(letter)
        actionChange[actionChange.length - 1] = `>${letter.letter}`
        setActions(actionChange)
        let match;
        if(!letter.used) 
        {
        match = checkForMatching(letter, row)
        setMatching(match.ids)
        }
        if(match?.ids.length > 1 && letter.wordPosition !== 0) 
        {
            actionChange[actionChange.length - 1] = `>${letter.fullWord}`
        }
        setCurrentLetter(letter.id) 
        
    }

    const decideMouseLeave = () => {
        setCurrentLetter(999)
        setMatching([])
    }
    if(failed){
        return (
            <div>
                You ran out of attempts! Try again? <button onClick={(()=>setFailed(false))}>Reset</button>
            </div>
        )
    }
    if(passwordFoundState) {
        return (
            <div>
                You already found the password! Try again? <button onClick={(()=>setPasswordFound(false))}>Reset</button>
            </div>
    )
    }
    return (
        <>
        <div>Tries: {tries}</div>
        <div className='hackingMinigameWrapper'>
            
            <div className='hackingMinigameRows'>
                <div className='hackingMinigameColumn'>
                    {!rowsOne ? null : rowsOne.map((row)=>{
                        if(!row) return null
                        return <div className='hackingMinigameRow'>{row.map((letter)=>{
                            return(
                            <div 
                                className={`letter ${currentLetter === letter.id || (letter.id > matching[0] && letter.id < matching[1]+1) ? 'highlight' : null}`} 
                                onMouseEnter={()=>decideMouseEnter(letter, row)}
                                onMouseLeave={()=>()=>decideMouseLeave()} 
                                onClick={()=>{decideClick(rowsOne, row, letter, setRowsOne)}
                                }>
                                        {letter.letter}
                                    </div>)
                        })}</div>
                    })}
                </div>
                <div className='hackingMinigameColumn'>
                    {!rowsTwo ? null : rowsTwo.map((row)=>{
                        if(!row) return null
                        return <div className='hackingMinigameRow'>{row.map((letter)=>{
                            return(
                                <div 
                                    className={`letter ${currentLetter === letter.id || (letter.id > matching[0] && letter.id < matching[1]+1) ? 'highlight' : null}`} 
                                    onMouseEnter={()=>decideMouseEnter(letter, row)}
                                    onMouseLeave={()=>decideMouseLeave()} 
                                    onClick={()=>{decideClick(rowsTwo, row, letter, setRowsTwo)}
                                    }>
                                            {letter.letter}
                                        </div>)
                        })}</div>
                    })}
                </div>
                <div className='hackingMinigameTextbox'>
                    {actions.length === 0 ? null : actions.map((action)=>{
                        return <div>{action}</div>
                    })}
                </div>
            </div>
        </div>
        </>
    )
}