const Player = type=>{
    const getType = ()=>type;
    return{getType};
};

const AIPlayer = (type, difficulty)=>{
    const {getType} = Player(type);

    //if somebody can win, go there.
    const _defendOrAttack = function(player){
        for(let i = 0; i<9; i++){
            let _dummyBoard = board.getBoard().map(ele => ele);
            if(_dummyBoard[i] == ''){
                _dummyBoard[i] = player.getType();
                if(board.checkIfWon(_dummyBoard) == player.getType()){
                    display.playPiece(i,this);
                    return true;
                }
            }
        }
        return false;
    }

    const _pickRandom = function(){
        let _randStart = Math.floor((Math.random()*board.getBoard().length))
        while(true){
            if(board.getBoard()[_randStart] == ''){
                display.playPiece(_randStart, this);
                return;
            }else{
                _randStart++;
                if(_randStart == board.getBoard().length){
                    _randStart = 0;
                }
            }
        }
    }


    const _chooseMove = function(){
        let _playMade = false;
        //check if the AI can win
        _playMade = _defendOrAttack.call(this, this);
        //check if the Player can win
        if(!_playMade){
            _playMade = _defendOrAttack.call(this, display.getPlayer1());
        }
        if(!_playMade){
            let _oppPlays = board.getBoard().reduce((a,b)=> (b == display.getPlayer1().getType() ?
                a + 1 : a), 0);
            if(_oppPlays == 2){
                //If the opponent played on two corners, play on a side.
                let _sidePieces = [];
                for(let i = 1; i<board.getBoard().length; i += 2){
                    _sidePieces.push(board.getBoard()[i]);
                }
                if(!_sidePieces.includes(display.getPlayer1().getType())){
                    display.playPiece(1,this);
                    return;
                }
            }
            //go to the middle if it's available
            if(board.getBoard()[4] == ''){
                display.playPiece(4,this);
            //go to the corner if the middle is taken
            }else if(board.getBoard()[0] == ''){
                display.playPiece(0,this);
            }
            //or else pick a random spot.
            else{
                _pickRandom.call(this);
            }
            
        }
    }

    const makeMove = function(){
        _chooseMove.call(this);
    }

    return {getType, makeMove};
}

const board = (() => {
    let _gameBoard = ['', '', '', '', '', '', '', '', ''];
    const update = (index, player) => {
        _gameBoard[index] = player.getType();
    };
    const getBoard = () => _gameBoard;

    const _checkWinCon = (a, b, c) => ((a == b && a == c) && a != '') ? 1 : 0;

    const checkIfWon = board => {
        let _winner = _checkWinCon(board[0], board[1], board[2]) ? board[0] :
            _checkWinCon(board[3], board[4], board[5]) ? board[3] :
            _checkWinCon(board[6], board[7], board[8]) ? board[6] :
            _checkWinCon(board[0], board[3], board[6]) ? board[0] :
            _checkWinCon(board[1], board[4], board[7]) ? board[1] :
            _checkWinCon(board[2], board[5], board[8]) ? board[2] :
            _checkWinCon(board[0], board[4], board[8]) ? board[0] :
            _checkWinCon(board[2], board[4], board[6]) ? board[6] : 0;

        if (_winner == 0 && !(board.includes(''))) {
            _winner = "draw";
        }

        return _winner;

    };

    return { update, getBoard, checkIfWon };

})();

//this section regards the player selection buttons
const playerSel = (() => {
    //default player selection is x
    let _playerSelection = "x";
    const _playerPieceSelectors = document.querySelectorAll(".piece-button");
    const _getPlayerChoice = e => {
        if (e.target.id == "x-piece") {
            _playerPieceSelectors[0].classList.add('active');
            _playerSelection = 'x';
            if (_playerPieceSelectors[1].classList.contains('active')) {
                _playerPieceSelectors[1].classList.remove('active');
            }
        } else if (e.target.id == "o-piece") {
            _playerPieceSelectors[1].classList.add('active');
            _playerSelection = "o";
            if (_playerPieceSelectors[0].classList.contains('active')) {
                _playerPieceSelectors[0].classList.remove('active');
            }
        }
    };

    //add event listeners to the selection buttons
    _playerPieceSelectors.forEach(button => button.addEventListener('click', _getPlayerChoice));

    //a function that removes the event listeners from the buttons.
    const playerSelected = () => _playerPieceSelectors.forEach(
        button => button.removeEventListener('click', _getPlayerChoice));

    //function that returns what the player chose
    const getPlayerSelection = () => _playerSelection;

    return { getPlayerSelection, playerSelected };
})();

//this section regards the difficulty selection buttons
const difficultySel = (() => {
    //default difficulty selection is Easy
    let _difSelection = 3;
    const _difficultySelectors = document.querySelectorAll(".difficulty-button");
    const _getDifChoice = e => {
        _difSelection = e.target.value;
        e.target.classList.add("active");
        _difficultySelectors.forEach(button => {
            if(button != e.target){
                button.classList.remove("active");
            }
        });
    };

    //add event listeners to the selection buttons
    _difficultySelectors.forEach(button => button.addEventListener('click', _getDifChoice));

    //a function that removes the event listeners from the buttons.
    const difficultySelected = () => _difficultySelectors.forEach(
        button => button.removeEventListener('click', _getDifChoice));

    //function that returns what the player chose
    const getDifficultySelection = () => _difSelection;

    return { getDifficultySelection, difficultySelected };
})();



const display = (() => {
    let _player1;
    let _player2;
    const _gameBoardPieces = document.querySelectorAll(".board-space");
    const _startGameButton = document.querySelector("#start-game");
    let _currentPlayer;
    let _gameOver = false;

    const _startGame = () => {
        _startGameButton.classList.add("active");
        _player1 = Player(playerSel.getPlayerSelection());
        playerSel.playerSelected();
        _player1.getType() == 'x' ? 
            _player2 = AIPlayer('o', difficultySel.getDifficultySelection()): 
            _player2 = AIPlayer('x', difficultySel.getDifficultySelection());
        difficultySel.difficultySelected();
        _currentPlayer = _player1;
        _gameBoardPieces.forEach((button, index) => button.addEventListener(
            'click', playPiece.bind(null, index, _player1)));

    };

    const _updateBoardPiece = (index, player) => {
        _gameBoardPieces[index].textContent = player.getType();
        _gameBoardPieces[index].classList.add(`${player.getType()}-piece`);
        _gameBoardPieces[index].replaceWith(_gameBoardPieces[index].cloneNode(true));
        board.update(index, player);
    };

    const _nextMove = () => {
        if(_currentPlayer == _player1){
            return;
        }else{
            _player2.makeMove();
        }
    }

    const playPiece = (index, player) =>{
        _updateBoardPiece(index, player);
        if (board.checkIfWon(board.getBoard())) {
            _winnerDisplay = document.querySelector("#winner");
            if (board.checkIfWon(board.getBoard()) == 'x' || board.checkIfWon(board.getBoard()) == 'o') {
                _winnerDisplay.textContent = `${player.getType()} Wins!`;
            } else if (board.checkIfWon(board.getBoard()) == 'draw') {
                _winnerDisplay.textContent = `It's a Draw`;
            }
            _gameBoardPieces.forEach(button => button.replaceWith(button.cloneNode(true)));
            _gameOver = true;
        }
        if(!_gameOver){
            _currentPlayer == _player1 ? _currentPlayer = _player2 : _currentPlayer = _player1;
            _nextMove();
        }
    }

    const getPlayer1 = () => _player1;

    _startGameButton.addEventListener('click', _startGame, {once:true});

    return {playPiece, getPlayer1};

})();


