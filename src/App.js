import React, { useState, useEffect } from 'react'

function App() {
    const init = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ]
    const arr = ['', '', '', '', '', '', '', '', '']
    const [isWin, setIswin] = useState(false)
    const [, setRole1] = useState([])
    const [, setRole2] = useState([])
    const [nums, setNums] =useState(arr)
    const [isMeOrHe, setMeOrHe] = useState(0)
    // 点击方块设置图形
    const handleClick = (e) => {
        const id = e.target.id*1
        // 判断是添加什么元素
        if (isMeOrHe === 0 && !nums[id]) {
            setRole1(value => {
                value[id+1] = id+1
                if (judeg(value)) {
                    setMeOrHe(value => {
                        return 2
                    })
                    setIswin(() => {
                        return judeg(value)
                    })
                }
                return value
            })
            setNums(value => {
                value[id] = 'x'
                return value
            })
            setMeOrHe(value => {
                return 1
            })

        } else if (isMeOrHe === 1 && !nums[id]) {
            setRole2(value => {
                value[id+1] = id+1
                if (judeg(value)) {
                    setMeOrHe(value => {
                        return 2
                    })
                    setIswin(() => {
                        return judeg(value)
                    })
                }
                return value
            })
            setNums(value => {
                value[id] = 'o'
                return value
            })
            setMeOrHe(value => {
                return 0
            })

        }
    }
    // 判断游戏有否结束
    const judeg = (role) => {
        let flag
        init.forEach(item => {
            const item1 = item[0] === role[item[0]]
            const item2 = item[1] === role[item[1]]
            const item3 = item[2] === role[item[2]]
            if (item1 && item2 && item3) {
                flag = true
                return
            } else {
                return
            }
        })
       return flag
    }
    // 重置游戏
    const Reset = () => {
        setIswin(false)
        setNums(arr)
        setMeOrHe(0)
        setRole1([])
        setRole2([])
    }
    useEffect(() => {
        if (isWin) {
            alert('游戏结束')

        }
    })
    return (
        <div className='box'>
            {
                nums.map((item, index) => {
                return(
                    <div key={index}>
                        <span onClick={handleClick} id={index}>{item}</span>
                    </div>
                )
            })}
            <button style={{width: 500, height: 50, marginTop: 20}} onClick={Reset}>重置</button>
        </div>
    )
}
export default App;