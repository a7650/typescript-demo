(function () {
    interface select {
        a: string,
        b?: number
    }
    let a: select = {
        a: "1",
        b: undefined
    }

    //字符串字面量类型
    type Easing = "in" | "out" | "in-out"
    function animationUI(x: number, y: number, easing: Easing): void {
        if (easing === "in") {

        } else if (easing === "in-out") {

        } else if (easing === "out") {

        } else {
            //error
        }
    }
    animationUI(10, 10, "in")
})()