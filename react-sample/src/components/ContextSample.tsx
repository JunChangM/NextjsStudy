import { title } from 'process'
import React from 'react'
import { text } from 'stream/consumers'

// Page 컴포넌트에서 손자 컴포넌트인 Title 컴포넌트로 Context를 사용해서 문자열 전달하기
const TitleContext = React.createContext('')
const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Page = () => {
    const title = 'React Book'
    return (
        <TitleContext.Provider value={title}>
            <header />
        </TitleContext.Provider>
    )
}

export default Page