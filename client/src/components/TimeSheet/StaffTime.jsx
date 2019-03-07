import React, { Component } from 'react';

import InOut from "./inOut"

import StaffAPI from "../../utils/staff-api"
import TimeAPI from "../../utils/time-api"
import Moment from "moment"

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
                    let totalArr = []
                    for (let i = 0; i < newTime.length; i++) {
                        if ((i + 2) % 2 == 0) {
                            inArr.push(newTime[i]);
                        }
                        else {
                            outArr.push(newTime[i]);
                        }
                    }
                    for (let i = 0; i < outArr.length; i++) {
                        totalArr.push(outArr[i].time - inArr[i].time)
                    }
                    console.log(inArr)
                    console.log(outArr)
                    console.log(totalArr)
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
                                                    <div className="timeIn" key={inItem.id}>{Moment(parseInt(inItem.time)).format('hh:mm:ss a')}</div>
                                                )
                                            })
                                            }
                                            
                                            </td>
                                            <td>
                                            {outArr.map(outItem => {
                                                return (
                                                    <div className="timeOut" key={outItem.id}>{Moment(parseInt(outItem.time)).format('hh:mm:ss a')}</div>
                                                )
                                            })
                                            }
                                            </td>
                                            <td>
                                            {totalArr.map(totalItem => {
                                                return (
                                                    <div className="timeTotal" key={totalItem}>{Moment(parseInt(totalItem)).format('mm:ss')}</div>
                                                )
                                            })
                                            }
                                            </td>

                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </td>
                        </tr>

                )})}
            </tbody>
        )
    }
}

export default StaffTime;