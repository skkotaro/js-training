### pushの平均時間計算量

#### 等比数列の和の公式

初項a, 公比r, 項数n (rが1でない場合)<br>
`a*(r^n - 1)/(r - 1)`

#### 回答

初項1, 公比2, 項数$log_2 n$<br>
`(2 ^ (log_2 n) - 1)/(2 - 1) = n - 1`<br>
それをnで割るので平均時間計算量は以下になる<br>
`平均時間計算量 = (n - 1) / n`

### copyAの平均時間計算量

配列の長さn回、値の代入を行うので`O(n)`

### copyBの平均時間計算量

一回のpushにつき`(n - 1)/ n`の計算量のため、それを配列の長さn回行うと<br>
`((n - 1) / n) * n = n - 1`となる
