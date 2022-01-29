const Player = type=>{
    const getType = ()=>type;

    return{getType};
};

const board = (function(){
    let _gameBoard = ['','','','','','','','',''];
    const update = (index, player) =>{
        _gameBoard[index] = player.getType();
    }

    return {update, _gameBoard};

})();
const playerSel = (function(){
    //this section regards the player selection buttons
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
    _playerPieceSelectors.forEach(button => button.addEventListener('click', _getPlayerChoice));
    const playerSelected = ()=>{
        _playerPieceSelectors.forEach(button => button.removeEventListener('click', _getPlayerChoice));
    }
    const getPlayerSelection = ()=>_playerSelection;
    return{getPlayerSelection, playerSelected};
})();

const display = (function(){
    const player1 = Player(playerSel.getPlayerSelection());
    const _gameBoardPieces = document.querySelectorAll(".board-space");

    const _updateBoardPiece = (index, e) =>{
        _gameBoardPieces[index].textContent = index;
        board.update(index,player1);
    }

    _gameBoardPieces.forEach((button, index) => button.addEventListener('click', _updateBoardPiece.bind(null,index)));

})();


