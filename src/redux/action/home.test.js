const home = require("./home")
// @ponicode
describe("home.getDataProduct", () => {
    test("0", () => {
        let callFunction = () => {
            home.getDataProduct()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("home.getDataProductByCategory", () => {
    test("0", () => {
        let callFunction = () => {
            home.getDataProductByCategory("Foo bar", 16000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            home.getDataProductByCategory("rt", 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            home.getDataProductByCategory("This is a Text", 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            home.getDataProductByCategory("atk", 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            home.getDataProductByCategory("masak", 1024)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            home.getDataProductByCategory(undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
