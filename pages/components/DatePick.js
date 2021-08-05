import DatePicker from "react-datepicker"
import React, {useState} from "react"
import 'react-datepicker/dist/react-datepicker.css'

function DatePick() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className="text-black ">
            <DatePicker 
                className="w-24 h-7 rounded-md"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                maxDate={new Date()}
                placeholderText="  Date"
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePick
