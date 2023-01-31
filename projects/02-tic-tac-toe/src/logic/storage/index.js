export const SaveGameToStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
};

export const ResetGameToStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}