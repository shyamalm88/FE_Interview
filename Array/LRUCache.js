class LRU {
  constructor(max = 3) {
    this.max = max;
    this.cache = new Map();
  }
  get(key) {
    let temp = this.cache.get(key);
    if (temp) {
      this.cache.delete(key);
      this.cache.set(temp);
    }
    return temp;
  }
  set(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    } else if (this.max === this.cache.size) {
      this.cache.delete(this.first());
    }
    this.cache.set(key, value);
  }
  first() {
    this.cache.keys().next().value;
  }
}

const lru = new LRU(3);

lru.set("name", "Arghya");
lru.set("age", 34);
lru.set("language", "bengali");
console.log(lru.cache);
lru.get("name");
lru.set("occupation", "developer");
console.log(lru.cache);
