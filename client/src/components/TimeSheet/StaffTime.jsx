import React, { Component } from 'react';

import InOut from "./inOut"

import StaffAPI from "../../utils/staff-api"
import TimeAPI from "../../utils/time-api"

import "./staffTime.css";

class StaffTime extends Component {
    state = {
        staff: [],
        pin: [],
        time: []
    }
    componentDidMount() {
        StaffAPI.getStaff().then(res => {
            this.setState({
                staff: res.data
            })
        })
        TimeAPI.getTime().then(res => {
            this.setState({
                time: res.data
            })
        })
    }


    render() {
        const staffInfo = this.state.staff
        let staffTime = this.state.time

        return (
            <tbody className="tableContent">
                {staffInfo.map(item => {
                    let newTime = this.state.time.filter(time => {
                        return time.staffPin == item.pin
                    })
                    let inArr = []
                    let outArr = []
                    for (var i = 0; i < newTime.length; i++) {
                        if ((i + 2) % 2 == 0) {
                            inArr.push(newTime[i]);
                        }
                        else {
                            outArr.push(newTime[i]);
                        }
                    }
                    return (
                        <tr key={item.id}>
                            <td className="staffName">{item.first_name} {item.last_name}</td>
                            <td className="dayOfWeek">
                                <table>
                                    <InOut />
                                    <tbody>
                                        <tr className="timeRow">
                                            <td>
                                            {inArr.map(inItem => {
                                                return (
                                                    <div className="timeIn" key={inItem.id}>{inItem.time}</div>
                                                )
                                            })
                                            }
                                            
                                            </td>
                                            <td>
                                            {outArr.map(outItem => {
                                                return (
                                                    <div className="timeIn" key={outItem.id}>{outItem.time}</div>
                                                )
                                            })
                                            }

                                            </td>
                                            <td className="timeOut">Invalid date</td>
                                            <td className="timeTotal">Invalid date</td>
                                        </tr>
                                    </tbody>
                                    )
                                </table>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default StaffTime;