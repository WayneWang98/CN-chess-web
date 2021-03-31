export const record = [ // 初始局面
  ['r', 'n', 'b', 'a', 'k', 'a', 'b', 'n', 'r'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', 'c', '0', '0', '0', '0', '0', 'c', '0'],
  ['p', '0', 'p', '0', 'p', '0', 'p', '0', 'p'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['P', '0', 'P', '0', 'P', '0', 'P', '0', 'P'],
  ['0', 'C', '0', '0', '0', '0', '0', 'C', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['R', 'N', 'B', 'A', 'K', 'A', 'B', 'N', 'R']
]

// 初始化可以走棋的位置
const generateInitMove = () => {
  return [
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0']
  ]
}

// 象棋字典：采用国际象棋中FEN串的起名方法表示
export const chessDictionary = {
  // 红方
  'K': {
    name: '帅'
  },
  'A': {
    name: '仕'
  },
  'B': {
    name: '相'
  },
  'N': {
    name: '马',
    // 生成走法
    generateMove (x, y) {
      const canMoveArray = generateInitMove()
      const direction = [ // 马可以移动的方向
        { x: -2, y: -1 },
        { x: -2, y: +1 },
        { x: -1, y: +2 },
        { x: +1, y: +2 },
        { x: +2, y: +1 },
        { x: +2, y: -1 },
        { x: +1, y: -2 },
        { x: -1, y: -2 }
      ] 
      const KnightCheck = [ // 马脚的方向
        { x: -1, y: +0 },
        { x: -1, y: +0 },
        { x: +0, y: +1 },
        { x: +0, y: +1 },
        { x: +1, y: +0 },
        { x: +1, y: +0 },
        { x: +0, y: -1 },
        { x: +0, y: -1 }
      ]
      for (let i = 0; i < direction.length; i ++) {
        let col = x + direction[i].x, row = y + direction[i].y
        if (col < 0 || col > 8 || row < 0 || row > 9) { // 超出边界
          continue
        }
        if (record[x + KnightCheck[i].x][y + KnightCheck[i].y] === '0') { // 马腿检测
          canMoveArray[row][col] = '1'
        }
      }
      return canMoveArray
    }
  },
  'R': {
    name: '車'
  },
  'C': {
    name: '炮'
  },
  'P': {
    name: '兵'
  },
  // 黑方
  'k': {
    name: '将'
  },
  'a': {
    name: '士'
  },
  'b': {
    name: '象'
  },
  'n': {
    name: '马'
  },
  'r': {
    name: '車'
  },
  'c': {
    name: '炮'
  },
  'p': {
    name: '卒'
  },
}
