<?php

class Draw
{
    private array $rounds = [];

    public function __construct(int $number)
    {
        $limit = ceil(log($number, 2) + 1);

        for ($round = 1; $round < $limit; $round++) {
            $this->branch(1, 1, $limit - $round + 1, $round);
        }
    }

    public function get(): array
    {
        return $this->rounds;
    }

    private function branch(int $seed, int $level, int $limit, int $round): void
    {
        $opponent = (int) pow(2, $level) - $seed + 1;

        switch (true) {
            case $limit === $level + 1:
                $this->rounds[$round][$seed] = $opponent;
                break;
            case $seed % 2 === 1:
                $this->branch($seed, $level + 1, $limit, $round);
                $this->branch($opponent, $level + 1, $limit, $round);
                break;
            default:
                $this->branch($opponent, $level + 1, $limit, $round);
                $this->branch($seed, $level + 1, $limit, $round);
        }
    }
}
