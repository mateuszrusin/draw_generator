export function level(round) {
    if (round === 0) {
        return 'FINAL'
    }

    return '1/' + Math.pow(2, round)
}
