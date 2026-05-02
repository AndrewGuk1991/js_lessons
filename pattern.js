
// button.addEventListener('click', () => {})

const button = {
    subscribers: {
      click: [],
      focus: []
    },
    addEventListener(eventName, callback) {
        button.subscribers[eventName].push(callback)
        return () => {
            button.removeEventListener(eventName, callback)
        }
    },

    click(){
        console.log('base click')
        button.subscribers.click.forEach((callback) => callback())
    },

    removeEventListener(eventName, callback) {
        button.subscribers[eventName] = button.subscribers[eventName].filter(c => c !== callback)
    }

}

// const handler = () => {
//     console.log('click')
// }

const unSubscribe = button.addEventListener('click',() => {
    console.log('click')
})

// button.click()
//
// unSubscribe()

// button.removeEventListener('click', handler)

// button.click()

const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const link = document.querySelector('#link')

const handler = function (event) {
    event.stopPropagation()
    console.log('target', event.target.id)
    console.log('currentTarget', event.currentTarget.id)
}

smallDiv.addEventListener('click', handler)
mediumDiv.addEventListener('click', handler)
bigDiv.addEventListener('click', handler)

const handlerLink = (event) => {
    event.preventDefault()
    console.log('link clicked')
}

link.addEventListener('click', handlerLink)