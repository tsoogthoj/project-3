import React, { Component } from 'react';

import InOut from "./InOut"
import "./StaffTime.css";

class StaffTime extends Component {
    render() {
        return (
            <tr>
                <td class="staffName">Chong Thao</td>
                <td class="dayOfWeek">
                    <table>
                        <InOut />
                        <tbody>
                            <tr>
                                <td class="timeIn">Invalid date</td>
                                <td class="timeOut">Invalid date</td>
                                <td class="timeTotal">Invalid date</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td class="dayOfWeek">
                    <table>
                    <InOut />
                        <tbody>
                            <tr>
                                <td class="timeIn">Invalid date</td>
                                <td class="timeOut">Invalid date</td>
                                <td class="timeTotal">Invalid date</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td class="dayOfWeek">
                    <table>
                    <InOut />
                        <tbody>
                            <tr>
                                <td class="timeIn">Invalid date</td>
                                <td class="timeOut">Invalid date</td>
                                <td class="timeTotal">Invalid date</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td class="dayOfWeek">
                    <table>
                    <InOut />
                        <tbody>
                            <tr>
                                <td class="timeIn">Invalid date</td>
                                <td class="timeOut">Invalid date</td>
                                <td class="timeTotal">Invalid date</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td class="dayOfWeek">
                    <table>
                    <InOut />
                        <tbody>
                            <tr>
                                <td class="timeIn">Invalid date</td>
                                <td class="timeOut">Invalid date</td>
                                <td class="timeTotal">Invalid date</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        )
    }
}

export default StaffTime;