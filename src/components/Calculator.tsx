import { useReducer } from "react"

type State = {
    num1: number | null
    num2: number | null
    result: number | null
}

type OperationType = "+" | "-" | "*" | "/"

type Action =
    | { type: "SET_NUM1", value: number | null }
    | { type: "SET_NUM2", value: number | null }
    | { type: "CALCULATE", operator: OperationType }

function calculatorReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_NUM1":
            return { ...state, num1: action.value }
        case "SET_NUM2":
            return { ...state, num2: action.value }
        case "CALCULATE": {
            const { num1, num2 } = state
            if (num1 == null || num2 == null) return { ...state, result: null }
            switch (action.operator) {
                case "+":
                    return { ...state, result: num1 + num2 }
                case "-":
                    return { ...state, result: num1 - num2 }
                case "*":
                    return { ...state, result: num1 * num2 }
                case "/":
                    return { ...state, result: num2 !== 0 ? num1 / num2 : NaN }
                default:
                    return state
            }
        }
        default:
            return state
    }
}

const initialState: State = { num1: null, num2: null, result: null }

export function Calculator() {
    const [state, dispatch] = useReducer(calculatorReducer, initialState)
    const { num1, num2, result } = state

    return (
        <div className="max-w-md mx-auto p-8 bg-white flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Lommeregner</h1>
            <div className="flex flex-col gap-4 w-full mb-6">
                <input
                    type="number"
                    placeholder="Indtast tal 1"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    value={num1 ?? ''}
                    onChange={e => dispatch({ type: "SET_NUM1", value: e.target.value ? Number(e.target.value) : null })}
                />
                <input
                    type="number"
                    placeholder="Indtast tal 2"
                    className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    value={num2 ?? ''}
                    onChange={e => dispatch({ type: "SET_NUM2", value: e.target.value ? Number(e.target.value) : null })}
                />
            </div>
            <div className="flex gap-4 mb-6">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition-colors duration-200 font-semibold"
                    onClick={() => dispatch({ type: "CALCULATE", operator: "+" })}
                >
                    +
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition-colors duration-200 font-semibold"
                    onClick={() => dispatch({ type: "CALCULATE", operator: "-" })}
                >
                    -
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition-colors duration-200 font-semibold"
                    onClick={() => dispatch({ type: "CALCULATE", operator: "*" })}
                >
                    *
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition-colors duration-200 font-semibold"
                    onClick={() => dispatch({ type: "CALCULATE", operator: "/" })}>
                    /
                </button>
            </div>
            <p className="text-lg font-medium">
                Resultat:{" "}
                <span className="text-blue-700">
                    {result !== null && !isNaN(result) ? result : ""}
                </span>
            </p>
        </div>
    )
}