function EventListener() {
    let _callbackMap = {};

    this.registerEventHandler = function(eventName, callback) {
        if (!_callbackMap[eventName]) {
            _callbackMap[eventName] = [];
        }

        _callbackMap[eventName].push(callback);
    }

    this.onEvent = function(eventName) {
        if (_callbackMap[eventName]) {
            _callbackMap[eventName].forEach((handlerData) => {
                handlerData();
            });
        }
    }

    return this;
}

let listener = new EventListener();

let eventAName = 'Event A';

listener.registerEventHandler(eventAName, () => {
    console.log('Event A Happened!');
});

listener.registerEventHandler(eventAName, () => {
    console.log('Now, let\'s do another thing for Event A!');
});

listener.onEvent(eventAName);