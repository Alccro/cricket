import React from 'react';


export default function Board(props) {

    const SR = 67
    
    function wicket() {
      let x;      
      if (Math.floor(Math.random()*SR)+1 === Math.floor(SR)) {
          x = true
            }
         x = false;
      return x
        }

    return (
        <div className='boxox'>
            <h1>Game Time</h1>
            <div className='playerContainer'>
               <div id='homeTeam'>
                    <h2>Home Team</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Runs</th>
                                <th>Balls</th>
                                <th>Fours</th>
                                <th>Sixes</th>
                                <th>S/R</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                {props.homePlayer1}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                {props.homePlayer2}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id='awayTeam'>
                    <h2>Away Team</h2>
                    {/* <Select /> */}
                </div>
            </div>
        </div>
    )

}

