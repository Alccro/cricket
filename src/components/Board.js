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

        // function alert() {
        //     alert('welcome');
        // }
        function start() {
            const commentary = document.getElementsByClassName('commentary');
            const wontoss = Math.random();
            const toss = () => {
                if (wontoss <= 0.35) {
                    commentary.innerHTML = `${props.home} won the toss and elected to bat first`
                } else if (wontoss > 0.35 <= 0.5) {
                    commentary.innerHTML = `${props.home} won the toss and elected to bowl first`
                } else if (wontoss > 0.5 <= 0.85) {
                    commentary.innerHTML = `${props.away} won the toss and elected to bat first`
                } else {
                    commentary.innerHTML = `${props.away} won the toss and elected to bowl first`
                }
            }
            setTimeout(toss,5000)
            `"Welcome to this match between ${props.home} and ${props.away}"`
        }

    return (
        <div className='box'>
            <h1>Game Time</h1>
            <button className='start' onClick={() => alert('welcome')}>Start Game</button>
            <div className='commentary'>test</div>
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

                </div>
            </div>
        </div>
    )

}

