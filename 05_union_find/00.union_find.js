export class UnionFind {
  constructor(n) {
    this.parents = [];
    for (let i = 0; i < n; i++) {
      this.parents[i] = i;
    }
  }
  find(x) {
    if (x === this.parents[x]) return x;
    const root = this.find(this.parents[x]);
    this.parents[x] = root;
    return root;
  }
  union(x, y) {
    const x_ = this.find(x);
    const y_ = this.find(y);
    if (x_ === y_) return 0;
    this.parents[x_] = y_;
    return 1;
  }
}
