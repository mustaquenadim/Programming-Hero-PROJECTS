import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import playersData from './Data/Data.json';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';

function App() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    }, []);

    const [selectedPlayer, setSelectedPlayer] = useState([]);

    const addToCart = (player) => {
        const newCart = [...selectedPlayer, player];
        setSelectedPlayer(newCart);
    };

    return (
        <div>
            <Header></Header>
            <div className='container-fluid d-flex'>
                <div className='container'>
                    {
                        players.map((player) => <Players
                            key={player.id}
                            players={player}
                            addToCart={addToCart}
                        ></Players>)
                    }
                </div>
                <div>
                    <Cart selectedPlayer={selectedPlayer}></Cart>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
