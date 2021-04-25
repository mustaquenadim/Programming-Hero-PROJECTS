import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const selectedPlayer = props.selectedPlayer;
    const total = selectedPlayer.reduce((value, curr) => value + curr.value, 0);
    return (
        <div className='player-selection'>
            <h4 className='text-center'>Shortlisted Player</h4>
            <hr></hr>
            <h5 className='text-center'>Player Selected : {selectedPlayer.length}</h5>
            <table class="table table-bordered">
                <thead className='text-center'>
                    <th>Players Name</th>
                    <th>Value</th>
                </thead>
                <tbody>
                {
                    selectedPlayer.map((player) => <tr 
                        key={player.id}>
                        <td>{player.name}</td>
                        <td>€{player.value}M</td>
                    </tr>)
                }
                    <tr>
                        <th>Total</th>
                        <th>€{total}M</th>
                    </tr>
                </tbody>
                
            </table>
        </div>
    );
};

export default Cart;