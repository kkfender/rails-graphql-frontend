import React, { useState } from 'react'
import { Child1 } from './app/components/Child1'
import { Child4 } from './app/components/Child4'

export const App = () => {
    console.log('Appレンダリング')
    const [num, setNum] = useState(0)

    const onClickButton = () => {
        setNum(num + 1)
    }
  return (
    <div>
        <button onClick={onClickButton}>ボタン</button>
        <p>現在の数値は{num}です</p>
      <Child1 />
      <Child4 />
    </div>
  )
}

