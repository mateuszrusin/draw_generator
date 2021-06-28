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

    public function show(): void
    {
        foreach ($this->rounds as $round => $draw) {
            echo sprintf("Round %s\n", $round);
            foreach ($draw as $seed => $opponent) {
                echo sprintf("%s - %s\n", $seed, $opponent);
            }
        }
    }

	private function branch(int $seed, int $level, int $limit, int $round): void
    {
        $levelSum = (int) pow(2, $level) + 1;

        switch (true) {
            case $limit === $level + 1:
                $this->rounds[$round][$seed] = $levelSum - $seed;
                break;
            case $seed % 2 === 1:
                $this->branch($seed, $level + 1, $limit, $round);
                $this->branch($levelSum - $seed, $level + 1, $limit, $round);
                break;
            default:
                $this->branch($levelSum - $seed, $level + 1, $limit, $round);
                $this->branch($seed, $level + 1, $limit, $round);
        }
    }
}

$d = new Draw(9);
$d->show();