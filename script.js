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
        let _winner = _checkWinCon(_gameBoard[0], _gameBoard[1], _gameBoard[2]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[3], _gameBoard[4], _gameBoard[5]) ? _gameBoard[3]:
        _checkWinCon(_gameBoard[6], _gameBoard[7], _gameBoard[8]) ? _gameBoard[6]:
        _checkWinCon(_gameBoard[0], _gameBoard[3], _gameBoard[6]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[1], _gameBoard[4], _gameBoard[7]) ? _gameBoard[1]:
        _checkWinCon(_gameBoard[2], _gameBoard[5], _gameBoard[8]) ? _gameBoard[2]:
        _checkWinCon(_gameBoard[0], _gameBoard[4], _gameBoard[8]) ? _gameBoard[0]:
        _checkWinCon(_gameBoard[2], _gameBoard[4], _gameBoard[6]) ? _gameBoard[6]: 0;

        if (_winner == 0 && !(_gameBoard.includes(''))){
            _winner = "draw";
        }

        return _winner

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
    let _firstMove = false;
    let _player1;
    let _player2;
    const _gameBoardPieces = document.querySelectorAll(".board-space");
    let _currentPlayer;

    const _playerSet = ()=>{
        _player1 = Player(playerSel.getPlayerSelection());
        playerSel.playerSelected();
        _player1.getType() == 'x' ? _player2 = Player('o') : _player2 = Player('x');
        _firstMove = true;
        _currentPlayer = _player1;
    }

    const _updateBoardPiece = (index, e) =>{
        if(_firstMove == false){
            _playerSet();
        }
        
        e.target.textContent = _currentPlayer.getType();
        e.target.classList.add(`${_currentPlayer.getType()}-piece`)
        board.update(index,_currentPlayer);

        if(board.checkWin() == 'x' || board.checkWin() == 'o'){
            console.log(`${_currentPlayer.getType()} Wins!`);
            _gameBoardPieces.forEach(button => button.replaceWith(button.cloneNode(true)));
        }else if(board.checkWin() == 'draw'){
            console.log(`Draw`);
            _gameBoardPieces.forEach(button => button.replaceWith(button.cloneNode(true)));
        }
        _currentPlayer == _player1 ? _currentPlayer = _player2 : _currentPlayer = _player1;
    }
    _gameBoardPieces.forEach((button, index) => button.addEventListener('click', _updateBoardPiece.bind(null,index), {once:true}));
})();


