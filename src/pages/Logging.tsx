import React, {useState} from 'react'

export default function Logging() {

    const [text, setText] = useState<string>(localStorage.getItem('entry') || "")
    setTimeout(() => {
        localStorage.setItem('entry', text)
    }, 5000)

    const months = ['January', 'February', 'March' ,'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.getMonth()
    let datestring = day.toString() +' '+  months[month] + ' '+  year.toString()
  return (
    <div style={{height:"100vh", width:"100%", display:"grid", placeItems:"center"}}>
        <h1 className='text-xl'>{datestring}</h1>
        <textarea className='bg-blue-200 p-3 rounded' placeholder='Write your heart out...' rows={20} cols={50} value={text} onChange={e => setText(e.target.value)}></textarea>
    </div>
  )
}
