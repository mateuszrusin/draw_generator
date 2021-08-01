export function drawGenerator(numberOfPlayers) {

    let rounds = {};

    const branch = function (seed, level, limit, round) {

        const opponent = Math.pow(2, level) - seed + 1;

        switch (true) {
            case limit === level + 1:
                if (!rounds[round]) {
                    rounds[round] = [];
                }
                rounds[round].push({seed, opponent});
                break;
            case seed % 2 === 1:
                branch(seed, level + 1, limit, round);
                branch(opponent, level + 1, limit, round);
                break;
            default:
                branch(opponent, level + 1, limit, round);
                branch(seed, level + 1, limit, round);
        }
    }

    let limit = Math.ceil(Math.log2(numberOfPlayers) + 1);

    for (let round = 1; round < limit; round++) {
        branch(1, 1, limit - round + 1, round);
    }
    
    return rounds;
}