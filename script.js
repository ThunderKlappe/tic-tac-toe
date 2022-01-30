const Player = type=>{
    const getType = ()=>type;
    return{getType};
};

const board = (function(){
    let _gameBoard = ['','','','','','','','',''];
    const update = (index, player) =>{
        _gameBoard[index] = player.getType();
    }

    const _checkWinCon = (a,b,c)=> ((a==b && a==c) && a != '') ?  1 : 0;

    const checkWin = ()=>{
        return _checkWinCon(_gameBoard[0], _gameBoard[1], _gameBoard[2]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[3], _gameBoard[4], _gameBoard[5]) ? _gameBoard[3]:
        _checkWinCon(_gameBoard[6], _gameBoard[7], _gameBoard[8]) ? _gameBoard[6]:
        _checkWinCon(_gameBoard[0], _gameBoard[3], _gameBoard[6]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[1], _gameBoard[4], _gameBoard[7]) ? _gameBoard[1]:
        _checkWinCon(_gameBoard[2], _gameBoard[5], _gameBoard[8]) ? _gameBoard[2]:
        _checkWinCon(_gameBoard[0], _gameBoard[4], _gameBoard[8]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[2], _gameBoard[4], _gameBoard[6]) ? _gameBoard[6]: 0;
    }

    return {update, checkWin};

})();

//this section regards the player selection buttons
const playerSel = (function(){
    //default player selection is x
    let _playerSelection = "x";
    const _playerPieceSelectors = document.querySelectorAll(".piece-button");
    const _getPlayerChoice = e => {
        if(e.target.id == "x-piece"){
            _playerPieceSelectors[0].classList.add('active');
            _playerSelection = 'x';
            if(_playerPieceSelectors[1].classList.contains('active')){
                _playerPieceSelectors[1].classList.remove('active');
            }
        }else if(e.target.id == "o-piece"){
            _playerPieceSelectors[1].classList.add('active');
            _playerSelection = "o";
            if(_playerPieceSelectors[0].classList.contains('active')){
                _playerPieceSelectors[0].classList.remove('active');
            }
        }
    }

    //add event listeners to the selection buttons
    _playerPieceSelectors.forEach(button => button.addEventListener('click', _getPlayerChoice));

    //a function that removes the event listeners from the buttons.
    const playerSelected = ()=>_playerPieceSelectors.forEach(
        button => button.removeEventListener('click', _getPlayerChoice));

    //function that returns what the player chose
    const getPlayerSelection = ()=>_playerSelection;

    return{getPlayerSelection, playerSelected};
})();



const display = (function(){
    let firstMove = false;
    let player1;
    let player2;
    const _gameBoardPieces = document.querySelectorAll(".board-space");
    let currentPlayer;

    const _playerSet = ()=>{
        player1 = Player(playerSel.getPlayerSelection());
        playerSel.playerSelected();
        player1.getType() == 'x' ? player2 = Player('o') : player2 = Player('x');
        firstMove = true;
        currentPlayer = player1;
    }

    const _playerSwap = ()=>{
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
    }

    const _updateBoardPiece = (index, e) =>{
        if(firstMove == false){
            _playerSet();
        }
        
        e.target.textContent = currentPlayer.getType();
        e.target.classList.add(`${currentPlayer.getType()}-piece`)
        board.update(index,currentPlayer);
        if(board.checkWin()){
            console.log(`${currentPlayer.getType()} Wins!`);
        }
        _playerSwap();
    }
    _gameBoardPieces.forEach((button, index) => button.addEventListener('click', _updateBoardPiece.bind(null,index), {once:true}));
})();


