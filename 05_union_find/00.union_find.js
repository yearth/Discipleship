export class UnionFind {
  constructor(n) {
    this.parents = [];
    this.size = [];
    for (let i = 0; i < n; i++) {
      this.parents[i] = i;
      this.size[i] = 1;
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
    this.size[y_] += this.size[x_];
    return 1;
  }
}
