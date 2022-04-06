import React, { Component } from 'react';


class PlayerStats extends Component {

    render() {
        return (
            <>
                {this.props.stats.map((element) => <div className='stats' key={element.BatAverage} value={element.BatAverage}>{element.BatAverage}</div>)}
                {this.props.stats.map((element) => <div className='stats' key={element.HighScore} value={element.HighScore}>{element.HighScore}</div>)}
                {this.props.stats.map((element) => <div className='stats' key={element.SRBat} value={element.SRBat}>{element.SRBat}</div>)}
                {this.props.stats.map((element) => <div className='stats' key={element.BowlAverage} value={element.BowlAverage}>{element.BowlAverage}</div>)}
                {this.props.stats.map((element) => <div className='stats' key={element.SRBall} value={element.SRBall}>{element.SRBall}</div>)}
                {this.props.stats.map((element) => <div className='stats' key={element.Economy} value={element.Economy}>{element.Economy}</div>)}
                
            </>
        )
    }
}
export default PlayerStats

// import { useEffect } from "react";
// import { statsFile } from "./statsFile";
// function DynamicTable(){

// // get table column
//  const column = Object.keys(statsFile.Player);

//  // get table heading data
//  const ThData =()=>{
    
//      return column.map((data)=>{
//          return <th key={data}>{data}</th>
//      })
//  }

// // get table row data
// const tdData =() =>{
   
//      return statsFile.map((data)=>{
//        return(
//            <tr>
//                 {
//                    column.map((v)=>{
//                        return <td>{data[v]}</td>
//                    })
//                 }
//            </tr>
//        )
//      })
// }


//   return (
//       <table className="table">
//         <thead>
//          <tr>{ThData()}</tr>
//         </thead>
//         <tbody>
//         {tdData()}
//         </tbody>
//        </table>
//   )
// }
// export default DynamicTable;


