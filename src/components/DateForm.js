import React, {useState} from 'react'

function DateForm(props) {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const dateHandler = ()=> {
        const newDate = `&date=${year}-${month}-${day}`
        console.log(newDate);
        props.setDate(newDate);
        props.setData({});
  }
    const clearDate = ()=> {
        setDay('');
        setMonth('');
        setYear('');
        props.setDate('');
    }
    return (
        <div>
            <h5>View A Different Day:</h5>
            <input onChange={e => setDay(e.target.value)} value={day} placeholder="Day"/>
            <input onChange={e => setMonth(e.target.value)} value={month} placeholder="Month"/>
            <input onChange={e => setYear(e.target.value)} value={year} placeholder="Year"/>
            <button onClick={dateHandler}>View</button>
            <button onClick={clearDate}>Back to Today</button>
        </div>
    )
}

export default DateForm
