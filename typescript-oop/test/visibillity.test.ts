describe("Visibillity", () => {
  // parent class
  class Counter {
    // private counter: number = 0;
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  // child class
  class DoubleCounter extends Counter {
    // method overriding
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should support Visibillity - Private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCounter());
  });

  it("should support Visibillity - Protected", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log(counter.getCounter());
  });
});
