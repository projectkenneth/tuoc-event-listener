function EventListener() {
    let _callbackMap = {};

    this.registerEventHandler = function(eventName, callback, priority = 1) {
        if (!_callbackMap[eventName]) {
            _callbackMap[eventName] = [];
        }

        _callbackMap[eventName].push({
            callback: callback,
            priority: priority
        });

        // rearrange the handlers for this event based on priority
        _callbackMap[eventName].sort((a, b) => {
            if (a.priority < b.priority) {
                return -1;
            } else if (a.priority > b.priority) {
                return 1;
            }

            return 0;
        });
    }

    this.onEvent = function(eventName) {
        if (_callbackMap[eventName]) {
            _callbackMap[eventName].forEach((handlerData) => {
                handlerData.callback();
            });
        }
    }

    return this;
}

let listener = new EventListener();

let eventAName = 'Event A';

listener.registerEventHandler(eventAName, () => {
    console.log('Event A Happened!');
}, 2);

listener.registerEventHandler(eventAName, () => {
    console.log('Now, let\'s do another thing for Event A!');
}, 1);

listener.onEvent(eventAName);