function solution(n) {
    let pizza = 0;

    for (let i = 0; i < n; i += 7) {
        pizza++; 
    }

    return pizza;
}