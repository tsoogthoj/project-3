import React, { Component } from 'react';
import moment from "moment";

import "./TimeSheet.css";
class TimeSheet extends Component {
    state = {
        currentTime: moment(),
        month: parseInt(moment().format('MM')),
        year: parseInt(moment().format('YYYY')),
        daysInMonth: "",
        daysOfWeek: {
            0: {
                month: 10,
                day: 1,
                year: 2018
            },
            1: {
                month: 10,
                day: 1,
                year: 2018
            },
            2: {
                month: 10,
                day: 1,
                year: 2018
            },
            3: {
                month: 10,
                day: 1,
                year: 2018
            },
            4: {
                month: 10,
                day: 5,
                year: 2018,
            }
        },
        monthAbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }

    componentDidMount() {
        this.getCurrent()
        this.numberOfDays(this.state.year, this.state.month)
    }

    getCurrent = () => {
        let weekArray = {
            0: {
                month: parseInt(moment().format('MM')),
                day: parseInt(this.state.currentTime.startOf('week').format('DD')) + 1,
                year: parseInt(moment().format('YYYY'))
            },
            1: {
                month: parseInt(moment().format('MM')),
                day: parseInt(this.state.currentTime.startOf('week').format('DD')) + 2,
                year: parseInt(moment().format('YYYY'))
            },
            2: {
                month: parseInt(moment().format('MM')),
                day: parseInt(this.state.currentTime.startOf('week').format('DD')) + 3,
                year: parseInt(moment().format('YYYY'))
            },
            3: {
                month: parseInt(moment().format('MM')),
                day: parseInt(this.state.currentTime.startOf('week').format('DD')) + 4,
                year: parseInt(moment().format('YYYY'))
            },
            4: {
                month: parseInt(moment().format('MM')),
                day: parseInt(this.state.currentTime.startOf('week').format('DD')) + 5,
                year: parseInt(moment().format('YYYY'))
            }
        };

        this.setState({ daysOfWeek: weekArray })
    }

    numberOfDays = () => {
        let daysInMonth = moment(this.state.year + '-' + this.state.month).daysInMonth()
        this.setState({ daysInMonth: daysInMonth })
    }

    increaseDays = (weekArray, daysInMonth) => {
        let startingDay = 1;
        
        for (let i = 0; i < 5; i++) {
            weekArray[i]['day'] = weekArray[0]['day'] + i
            weekArray[i]['month'] = weekArray[0]['month']
            weekArray[i]['year'] = weekArray[0]['year']
            // check for going into next month
            if (weekArray[i]['day'] > daysInMonth) {

                let nextMonth = daysInMonth + 1
                weekArray[i]['month'] = nextMonth
                // going to next year
                if (parseInt(weekArray[i]['month']) === 13) {
                    weekArray[i]['month'] = 1
                    weekArray[i]['year'] = parseInt(weekArray[i]['year']) + 1
                }
                weekArray[i]['day'] = startingDay
                startingDay++
            }
            if (parseInt(weekArray[i]['month']) === 13) {
                weekArray[i]['month'] = 1
                weekArray[i]['year'] = weekArray[i]['year'] + 1
            }
            if (parseInt(weekArray[i]['month']) === 0) {
                weekArray[i]['month'] = 12
                weekArray[i]['year'] = weekArray[i]['year'] - 1
            }
        }

        this.setState({ daysOfWeek: weekArray })
    }

    goBack = () => {
        let weekArray = {
            0: {
                month: "",
                day: "",
                year: ""
            },
            1: {
                month: "",
                day: "",
                year: ""
            },
            2: {
                month: "",
                day: "",
                year: ""
            },
            3: {
                month: "",
                day: "",
                year: ""
            },
            4: {
                month: "",
                day: "",
                year: ""
            }
        };
        let daysInMonth;
        // populate week array
        for (let i = 0; i < 5; i++) {
            weekArray[i]["day"] = this.state.daysOfWeek[i]["day"]
            weekArray[i]["month"] = this.state.daysOfWeek[i]["month"]
            weekArray[i]["year"] = this.state.daysOfWeek[i]["year"]
        }

        weekArray[0]['day'] = weekArray[0]['day'] - 7

        if (parseInt(weekArray[0]['day']) < 0) {
            let previousMonth = parseInt(weekArray[0]['month']) - 1
            daysInMonth = moment(weekArray[0]['year'] + '-' + previousMonth).daysInMonth()
            weekArray[0]['day'] = parseInt(daysInMonth) + parseInt(weekArray[0]['day'])
            weekArray[0]['month'] = previousMonth
        }
        if (parseInt(weekArray[0]['day']) === 0) {
            weekArray[0]['month'] = parseInt(weekArray[0]['month']) - 1
            if (parseInt(weekArray[0]['month']) === 0) {
                weekArray[0]['month'] = 12
                weekArray[0]['year'] = parseInt(weekArray[0]['year']) - 1
            }
            this.numberOfDays(weekArray[0]['year'], weekArray[0]['month'])
            weekArray[0]['day'] = this.state.daysInMonth
        }

        this.setState({ daysOfWeek: weekArray }, this.increaseDays(weekArray, daysInMonth))

    }

    goForward = () => {
        let weekArray = {
            0: {
                month: "",
                day: "",
                year: ""
            },
            1: {
                month: "",
                day: "",
                year: ""
            },
            2: {
                month: "",
                day: "",
                year: ""
            },
            3: {
                month: "",
                day: "",
                year: ""
            },
            4: {
                month: "",
                day: "",
                year: ""
            }
        };
        // populate week array
        for (let i = 0; i < 5; i++) {
            weekArray[i]["day"] = this.state.daysOfWeek[i]["day"]
            weekArray[i]["month"] = this.state.daysOfWeek[i]["month"]
            weekArray[i]["year"] = this.state.daysOfWeek[i]["year"]
        }
        let daysInMonth = moment(weekArray[0]['year'] + '-' + weekArray[0]["month"]).daysInMonth()
        
        weekArray[0]['day'] = weekArray[0]['day'] + 7

        if (parseInt(weekArray[0]['day']) > daysInMonth) {
            weekArray[0]['day'] = weekArray[0]['day'] - daysInMonth
            weekArray[0]['month'] = parseInt(weekArray[0]['month']) + 1
        }

        this.setState({ daysOfWeek: weekArray }, this.increaseDays(weekArray, daysInMonth))
    }

    render() {
        return (
            <div className="timeClockSheetWrapper">
                <div id="nav-timeClockSheet">
                    <div className="timeSheetToolbar">
                        <div className="navDateRange">{this.state.daysOfWeek[0]["month"] + " " + this.state.daysOfWeek[0]["day"] + " - " + this.state.daysOfWeek[4]["day"] + ", " + this.state.year}</div>
                        <div className="navBtn">
                            <button type="button" id="todayBtn" onClick={this.getCurrent}>Current Week</button>
                            <div>
                                <button type="button" id="leftArrowBtn" onClick={this.goBack}>&#60;</button>
                                <button type="button" id="rightArrowBtn" onClick={this.goForward}>&#62;</button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="content">
                        <div className="timeDisplay">
                            <table>
                                <thead>
                                    <tr className="daysOfWeek">
                                        <th className="listName">Name</th>
                                        <th className="mon weekday">
                                            Mon - {this.state.daysOfWeek[0]["day"]}
                                        </th>
                                        <th className="tue weekday">
                                            Tues - {this.state.daysOfWeek[1]["day"]}
                                        </th>
                                        <th className="wed weekday">
                                            Wed - {this.state.daysOfWeek[2]["day"]}
                                        </th>
                                        <th className="thu weekday">
                                            Thur - {this.state.daysOfWeek[3]["day"]}
                                        </th>
                                        <th className="fri weekday">
                                            Fri - {this.state.daysOfWeek[4]["day"]}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="tableContent">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
};

export default TimeSheet