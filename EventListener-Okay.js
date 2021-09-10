function EventListener() {
    let _callbackMap = {};

    this.registerEventHandler = function(eventName, callback) {
        _callbackMap[eventName] = callback;
    }

    this.onEvent = function(eventName) {
        _callbackMap[eventName]();
    }

    return this;
}

let listener = new EventListener();

listener.registerEventHandler('Event A', () => {
    // First action 
    console.log('Event A Happened!');

    // Second action
    console.log('Now, let\'s do another thing for Event A!');
});

listener.onEvent('Event A');