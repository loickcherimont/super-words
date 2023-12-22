export function Form() {
    return <form>
        <h2>Enter some letter and discover all words possibles to write with them</h2>
        <label for="words" className="flex text-sm font-medium leading-6 text-gray-900">
            <input type="text" id="words" name="words" className="border border-gray-400" />
            <button type="submit" className="rounded-r-lg bg-cyan-500 p-2">Check Words</button>
        </label>
    </form>
}