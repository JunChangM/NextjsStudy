import React, {useState, useMemo} from 'react'

const UseMemoSample = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState<string[]>([])

    const onChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickBUttom = () => {
        setItems((prevItems) => {
            return [...prevItems, text]
        })
        setText('')
    }
}