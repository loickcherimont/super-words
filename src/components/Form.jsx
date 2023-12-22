import { useState } from "react"
import { getAlphabet } from "../assets/scripts/utils"

export function Form() {

    const [letters, setLetters] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        sanitize(letters)

        // e.target.reset() // to empty fields

        // const arrayLetters = letters.split("")

        // console.log(arrayLetters)
    }

    // Update the input value
    // When user writes
    const handleChange = (e) => {
        setLetters(e.target.value)
    }

    return <form onSubmit={handleSubmit} id="form" autoComplete="off">
        <h2>Enter some letter and discover all words possibles to write with them</h2>
        <label htmlFor="words" className="flex text-sm font-medium leading-6 text-gray-900">
            <input
                type="text"
                id="words"
                name="words"
                className="border border-gray-400"
                value={letters ?? ""}
                onChange={handleChange} />
            <button type="submit" className="rounded-r-lg bg-cyan-500 p-2">Check Words</button>
        </label>
    </form>
}

// Verify if user input is valid
function sanitize(inputValue) {

    const ALPHABET = getAlphabet()

    inputValue = inputValue.toUpperCase()

    // Not empty
    if (!inputValue.trim()) {
        console.log("Please complete this input!")
        return
    }

    // All characters are included in alphabet
    try {
        compare(inputValue, ALPHABET)
    } catch (e) {
        console.error(e)
        return
    }

    // clean entry
    console.log(inputValue)
}

// Verify if all character in word are included in reference
function compare(word, reference) {
    const [...rest] = word // work with an array instead of a string

    rest.forEach(character => {


        if (reference.indexOf(character) == -1) {
            throw new Error(`This entry is not character is not valid: ${character}`)
        }
    })

    console.log("That's great!", word)
}



